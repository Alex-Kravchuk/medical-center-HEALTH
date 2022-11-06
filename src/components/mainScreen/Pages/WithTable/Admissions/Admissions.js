import React, { useEffect, useState } from "react";

import { Table, Form } from "antd";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { onValue, ref } from "firebase/database";
import { database } from "../../../../../firebase";

import { changePageName } from "../../../../../redux/pageNameReducer/pageNameReducer";

import { mutateDate } from "../mutateData";
import { setMergedColumns } from "../setMergedColumns";
import { createFilters } from "../../WithTable/createFilters";
import { getAdmissionsColumns } from "./getAdmissionsColumns";
import { sendAdmissionsChanges } from "./sendAdmissionsChanges";
import { defineUserRole } from "../../../../../auxiliary functions/defineUserRole";

import EditableCell from "../EditableCell";
import SideDrawer from "./SideDrawer/SideDrawer";
import { determineWhatHasChanged } from "../../../../../auxiliary functions/determineWhatHasChanged";
import { createAndSendingNotification } from "../../../../../auxiliary functions/createAndSendingNotification";

const Admissions = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { admissions, uid, role } = user;

  const [editingId, setEditingId] = useState("");

  const [selectedAdmission, setSelectedAdmission] = useState({});

  const [data, setData] = useState([]);

  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);

  const userRole = defineUserRole(role);
  const filters = createFilters(admissions);

  useEffect(() => {
    const { pathname } = location;
    dispatch(changePageName({ pathname }));
  }, [location]);

  useEffect(() => {
    let isMounted = true;
    const dbRef = ref(database, `users/${userRole}/` + uid);

    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const { admissions } = data;
        const mutatedAdmissions = mutateDate(admissions ?? [], false);

        if (isMounted) {
          setData(mutatedAdmissions);
        }
      }
    });
    return () => (isMounted = false);
  }, []);

  const onCloseSideDrawer = () => setSideDrawerVisible(false);

  const onRowClick = (record) => ({
    onDoubleClick: (event) => {
      const { status } = record;
      if (status === "confirmed") {
        setSideDrawerVisible(true);
        setSelectedAdmission(record);
      }
    },
  });

  const isEditing = (record) => record.id === editingId;

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      surname: "",
      healthComplaints: "",
      dateOfAdmission: record.dateOfAdmission,
      time: record.dateOfAdmission,
      status: record.status,
      ...record,
    });

    setEditingId(record.id);
  };

  const cancel = () => setEditingId("");

  const save = async (record) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => item.id === record.id);
      setEditingId("");

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingId("");
        sendAdmissionsChanges(user, newData, userRole, record);
      } else {
        newData.push(row);
        setData(newData);
        setEditingId("");
        sendAdmissionsChanges(user, newData, userRole, record);
      }

      const changedData = determineWhatHasChanged(user, record, row);
      createAndSendingNotification(record.userId, changedData);
    } catch (error) {
      console.log("Validate failed", error);
    }
  };

  const columns = getAdmissionsColumns(
    isEditing,
    save,
    cancel,
    editingId,
    edit,
    filters
  );

  const mergedColumns = setMergedColumns(columns, isEditing);

  return (
    <Form form={form} name="editable-form" component={false}>
      <Table
        onRow={onRowClick}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        dataSource={data}
        columns={mergedColumns}
        pagination={{
          pageSize: 12,
        }}
        rowKey="id"
      />
      <SideDrawer
        onClose={onCloseSideDrawer}
        visible={sideDrawerVisible}
        admission={selectedAdmission}
      />
    </Form>
  );
};

export default Admissions;
