import React, { useEffect, useState } from "react";

import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { Table, Form } from "antd";

import { onValue, ref } from "firebase/database";
import { database } from "../../../../../firebase";

import { changePageName } from "../../../../../redux/pageNameReducer/pageNameReducer";

import EditableCell from "../EditableCell";
import { setMergedColumns } from "../setMergedColumns";
import { getPatientColumns } from "./getPatientColumns";
import { sendPatientChanges } from "./sendPatientChanges";

import { createFilters } from "../createFilters";
import { defineUserRole } from "../../../../../auxiliary functions/defineUserRole";
import { determineWhatHasChanged } from "../../../../../auxiliary functions/determineWhatHasChanged";
import { createAndSendingNotification } from "../../../../../auxiliary functions/createAndSendingNotification";

const Patients = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { uid, patients, role } = user;

  const [data, setData] = useState(patients);

  const [editingId, setEditingId] = useState("");

  const userRole = defineUserRole(role);
  const filters = createFilters(patients);

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
        const { patients } = data;
        if (isMounted) {
          setData(patients);
        }
      }
    });

    return () => (isMounted = false);
  }, [userRole, uid]);

  const isEditing = (record) => record.id === editingId;

  const edit = (record) => {
    form.setFieldsValue({
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
    const { id } = record;

    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => item.id === id);
      setEditingId("");

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingId("");
        sendPatientChanges(uid, newData[id]);
      } else {
        newData.push(row);
        setData(newData);
        setEditingId("");
        sendPatientChanges(uid, newData[id]);
      }

      const changedData = determineWhatHasChanged(user, record, row);

      createAndSendingNotification(record.userId, changedData);
    } catch (error) {
      console.log("Validate failed", error);
    }
  };

  const columns = getPatientColumns(
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
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        dataSource={data}
        columns={mergedColumns}
        pagination={{
          pageSize: 10,
        }}
        rowKey="id"
      />
    </Form>
  );
};

export default Patients;
