import React, { useEffect } from "react";

import moment from "moment";
import { Spin, message } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { ref, onValue } from "firebase/database";
import { database } from "../../../../../firebase";

import { changeUserDataListener } from "../../../../../redux/authReducer/authReducer";
import { resetState } from "../../../../../redux/changeUserDataReducer/changeUserDataReducer";
import { changeProfileInfo } from "../../../../../redux/changeUserDataReducer/actions/changeProfileInfo";

import EditProfileForm from "./EditProfileForm";
import {
  LoadingScreen,
  sendingMessageConfig,
  Title,
  Wrapper,
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
  } = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(resetState());
    // TODO path should be another, I have to define a correct path, when a user is client or doctor or admin
    const dbRef = ref(database, "users/clients/" + uid);

    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        dispatch(changeUserDataListener({ ...data, uid, avatarURL }));
      }
      //   probably, need some warning message here, when someting worng with fethcing
    });
  }, []);

  const onFinish = async (values) => {
    console.log("Success:", values);

    const data = {
      name: values.name ?? null,
      surname: values.surname ?? null,
      email: values.email ?? null,
      phoneNumber: values.phoneNumber ?? null,
      dateOfBirth: values.dateOfBirth.format("YYYY-MM-DD") ?? null,
      sex: values.sex ?? null,
      country: values.country ?? null,
      city: values.city ?? null,
      avatarURL: avatarURL ?? null,
    };

    // if changing data finished with error(or successes), to show error(successes) message
    const response = await dispatch(changeProfileInfo({ userID: uid, data }));
    const check = response.hasOwnProperty("error");

    if (check) {
      message.error(sendingMessageConfig("Error sending data"));
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
  };

  return (
    <Wrapper>
      <Title>You can change your details here!</Title>
      <EditProfileForm
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
