import React, { useEffect } from "react";

import moment from "moment";
import { Spin, message } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { ref, onValue } from "firebase/database";
import { database } from "../../../../../firebase";

import { defineUserRole } from "../../../../../auxiliary functions/defineUserRole";

import { changeUserDataListener } from "../../../../../redux/authReducer/authReducer";
import { resetState } from "../../../../../redux/changeUserDataReducer/changeUserDataReducer";
import { changeProfileInfo } from "../../../../../redux/changeUserDataReducer/actions/changeProfileInfo";

import EditProfileForm from "./EditProfileForm";
import {
  Title,
  Wrapper,
  LoadingScreen,
  sendingMessageConfig,
} from "./EditProfile.styled";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.changingUserData);
  const {
    city,
    country,
    dateOfBirth,
    email,
    name,
    phoneNumber,
    sex,
    surname,
    uid,
    avatarURL,
    role,
    specialization,
    feedbacks,
    about,
    appointments,
    admissions,
  } = useSelector((state) => state.auth.user);

  const userRole = defineUserRole(role);

  useEffect(() => {
    dispatch(resetState());
    const dbRef = ref(database, `users/${userRole}/` + uid);

    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        dispatch(changeUserDataListener({ ...data, uid, avatarURL }));
      }
    });
  }, []);

  const onFinish = async (values) => {
    console.log("Success:", values);

    const userData = {
      name: values.name ?? null,
      surname: values.surname ?? null,
      email: values.email ?? null,
      phoneNumber: values.phoneNumber ?? null,
      dateOfBirth: values.dateOfBirth.format("YYYY-MM-DD") ?? null,
      sex: values.sex ?? null,
      country: values.country ?? null,
      city: values.city ?? null,
      avatarURL: avatarURL ?? null,
      role: role ?? null,
      specialization: specialization ?? null,
      about: values.about ?? null,
      feedbacks: feedbacks ?? null,
      appointments: appointments ?? null,
      admissions: admissions ?? null,
      uid,
    };

    // if changing data finished with error(or successes), to show error(successes) message
    const response = await dispatch(changeProfileInfo({ userData, userRole }));
    const check = response.hasOwnProperty("error");

    if (check) {
      message.error(sendingMessageConfig("Error sending data"));
      console.log(response);
    } else {
      message.success(sendingMessageConfig("Data successfully submitted"));
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const initialValues = {
    city,
    country,
    dateOfBirth: moment(dateOfBirth),
    email,
    name,
    phoneNumber,
    sex,
    surname,
    specialization,
    about,
  };

  return (
    <Wrapper>
      <Title>You can change your details here!</Title>
      <EditProfileForm
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        role={role}
      />
      {loading && (
        <LoadingScreen>
          <Spin size="large" tip="Saving..." />
        </LoadingScreen>
      )}
    </Wrapper>
  );
};

export default EditProfile;
