import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { RightOutlined, LeftOutlined } from "@ant-design/icons";

import {
  Wrapper,
  DoneButton,
  CustomButton,
} from "./StepsControlButtons.styled";

import { setDataToDataBase } from "../../../../../firebase/setDataToDataBase";
import { getDataFromDataBase } from "../../../../../firebase/getDataFromDataBase";

const StepsControlButton = ({
  handlerToNext,
  handlerToPrevious,
  lastPage,
  currentStep,
  appointmentData,
  successfullyHandler,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { generalSymptoms, symptomDetails, doctor, date, time } =
    appointmentData;

  const nextButtonIsDisabled = currentStep >= 3;
  const previousButtonIsDisabled = currentStep <= 0;

  //   create new admission
  const sendDataToDB = async () => {
    setLoading(true);

    const admissionsFromDB = await getDataFromDataBase(
      `users/doctors/${doctor.uid}/admissions`
    );

    const appointmentsFromDB = await getDataFromDataBase(
      `users/clients/${user.uid}/appointments`
    );

    const numberOfAdmissons =
      admissionsFromDB === undefined ? "0" : admissionsFromDB.length.toString();

    const numberOfAppointments =
      appointmentsFromDB === undefined
        ? "0"
        : appointmentsFromDB.length.toString();

    const pathForDoctors = `users/doctors/${doctor.uid}/admissions/${numberOfAdmissons}`;
    const pathForUsers = `users/clients/${user.uid}/appointments/${numberOfAppointments}`;

    const admission = {
      name: user.name,
      surname: user.surname,
      healthComplaints: generalSymptoms,
      dateOfAdmission: date,
      time: time,
      status: "waiting",
      id: numberOfAdmissons,
      appointmentId: numberOfAppointments,
      userId: user.uid,
      symptomDetails,
      avatarURL: user.avatarURL ?? null,
    };

    const appointment = {
      doctor: doctor.name,
      healthComplaints: generalSymptoms,
      dateOfAdmission: date,
      time: time,
      status: "waiting",
      id: numberOfAppointments,
      admissionId: numberOfAdmissons,
      userId: doctor.uid,
    };

    await setDataToDataBase(pathForDoctors, admission);
    await setDataToDataBase(pathForUsers, appointment);

    setLoading(false);
    successfullyHandler(true);

    setTimeout(
      () =>
        navigate("/home/appointments", {
          replace: true,
          state: location,
        }),
      2000
    );
  };

  return (
    <Wrapper>
      <CustomButton
        onClick={handlerToPrevious}
        size="large"
        disabled={previousButtonIsDisabled}
      >
        <LeftOutlined /> Previous
      </CustomButton>
      {lastPage && (
        <DoneButton size="large" onClick={sendDataToDB} loading={loading}>
          Done
        </DoneButton>
      )}
      <CustomButton
        size="large"
        type="primary"
        onClick={handlerToNext}
        disabled={nextButtonIsDisabled}
      >
        Next <RightOutlined />
      </CustomButton>
    </Wrapper>
  );
};

export default StepsControlButton;
