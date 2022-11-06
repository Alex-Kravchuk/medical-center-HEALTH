import React, { useEffect, useState } from "react";

import { Table, Form } from "antd";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { onValue, ref } from "firebase/database";
import { database } from "../../../../../firebase";

import EditableCell from "../EditableCell";

import { mutateDate } from "../mutateData";

import { changePageName } from "../../../../../redux/pageNameReducer/pageNameReducer";

import { setMergedColumns } from "../setMergedColumns";
import MakeAppointmentsButton from "./MakeAppontmentsButton";
import { getApointmentsColumns } from "./getApointmentsColumns";
import { sendAppointmentsChanges } from "./sendAppointmentsChanges";
import { createApointmentsFilters } from "./createApointmentsFilters";

import { defineUserRole } from "../../../../../auxiliary functions/defineUserRole";
import { determineWhatHasChanged } from "../../../../../auxiliary functions/determineWhatHasChanged";
import { createAndSendingNotification } from "../../../../../auxiliary functions/createAndSendingNotification";

const Appointments = () => {
  const [form] = Form.useForm();
  const location = useLocation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { uid, role, appointments } = user;

  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState("");

  const userRole = defineUserRole(role);

  const filters = createApointmentsFilters(appointments);

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
        const { appointments } = data;
        const mutatedAppointments = mutateDate(appointments ?? [], false);
        if (isMounted) {
          setData(mutatedAppointments);
        }
      }
    });

    return () => (isMounted = false);
  }, []);

  const isEditing = (record) => record.id === editingId;

  const isDisabledEdit = (record) => record.status === "ended";

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
        sendAppointmentsChanges(user, newData, userRole, record);
      } else {
        newData.push(row);
        setData(newData);
        setEditingId("");
        sendAppointmentsChanges(user, newData, userRole, record);
      }

      const changedData = determineWhatHasChanged(user, record, row);
      createAndSendingNotification(record.userId, changedData);
    } catch (error) {
      console.log("Validate failed", error);
    }
  };

  const columns = getApointmentsColumns(
    isEditing,
    isDisabledEdit,
    editingId,
    save,
    cancel,
    edit,
    filters
  );
  const mergedColumns = setMergedColumns(columns, isEditing);

  return (
    <div>
      <MakeAppointmentsButton />
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
            pageSize: 12,
          }}
          rowKey="id"
        />
      </Form>
    </div>
  );
};

export default Appointments;
