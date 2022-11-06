import React, { useRef, useState } from "react";

import moment from "moment";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "antd";

import { setDataToDataBase } from "../../../../../../firebase/setDataToDataBase";
import { getDataFromDataBase } from "../../../../../../firebase/getDataFromDataBase";

import { defineTypeOfNotification } from "../../../../../../auxiliary functions/defineTypeOfNotification";
import { createAndSendingNotification } from "../../../../../../auxiliary functions/createAndSendingNotification";

import { ButtonBlock, ErrorWithDuplicate, FormItem } from "./SideDrawer.styled";

const HospitalizeForm = ({ admission, onClose }) => {
  const [form] = Form.useForm();
  const diagnosisRef = useRef();
  const treatmentRef = useRef();

  const {
    uid,
    name: doctorName,
    surname: doctorSurname,
  } = useSelector((state) => state.auth.user);

  const [thereIsDuplicate, setThereIsDuplicate] = useState(false);

  const { name, surname, id, appointmentId, userId } = admission;

  const therapist = `${doctorName} ${doctorSurname}`;

  const hospitalizeHandler = async (values) => {
    form.resetFields();

    let checkForDuplication = false;

    const { diagnosis, treatment } = values;

    const patients =
      (await getDataFromDataBase(`users/doctors/${uid}/patients`)) ?? [];

    patients.forEach((element) =>
      element.userId === userId
        ? (checkForDuplication = true)
        : (checkForDuplication = false)
    );

    if (checkForDuplication) {
      setThereIsDuplicate(true);
      return;
    }

    const numberOfPatients = patients ? patients.length : 0;

    const path = `users/doctors/${uid}/patients/${numberOfPatients}`;
    const pathForChangeAdmissionStatus = `users/doctors/${uid}/admissions/${id}/status`;
    const pathForChangeAppointmentStatus = `users/clients/${userId}/appointments/${appointmentId}/status`;
    const pathForSetTreatment = `users/clients/${userId}/isInTreatment`;

    const hospitalizedPatient = {
      dateOfHospitalization: moment().format("YYYY-MM-DD"),
      statusOfTreatment: "is in treatment",
      prescribedTreatment: treatment,
      name,
      surname,
      diagnosis,
      id: numberOfPatients,
      therapist,
      userId,
    };

    const treatmentData = {
      prescribedTreatment: treatment,
      therapist,
    };

    setDataToDataBase(path, hospitalizedPatient);
    setDataToDataBase(pathForSetTreatment, treatmentData);
    setDataToDataBase(pathForChangeAdmissionStatus, "ended");
    setDataToDataBase(pathForChangeAppointmentStatus, "ended");

    // make notification
    const notificationTemplate = defineTypeOfNotification("hospitalization", {
      name: therapist,
    });

    createAndSendingNotification(userId, notificationTemplate);

    onClose();
  };

  return (
    <Form
      form={form}
      name="treatmentForm"
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 20 }}
      onFinish={hospitalizeHandler}
    >
      <FormItem
        name="diagnosis"
        label="Diagnosis:"
        labelAlign="left"
        rules={[{ required: true, message: "Please, input diagnosis!" }]}
      >
        <Input ref={diagnosisRef} />
      </FormItem>
      <FormItem
        name="treatment"
        label="Prescribe treatment:"
        labelAlign="left"
        rules={[{ required: true, message: "Please, prescribe treatment!" }]}
      >
        <Input.TextArea ref={treatmentRef} />
      </FormItem>
      <FormItem wrapperCol={{ offset: 0 }}>
        <ButtonBlock>
          <Button size="large" type="primary" htmlType="submit">
            Hospitalize
          </Button>
        </ButtonBlock>
        {thereIsDuplicate && (
          <ErrorWithDuplicate>
            This person is already under treatment
          </ErrorWithDuplicate>
        )}
      </FormItem>
    </Form>
  );
};

export default HospitalizeForm;
