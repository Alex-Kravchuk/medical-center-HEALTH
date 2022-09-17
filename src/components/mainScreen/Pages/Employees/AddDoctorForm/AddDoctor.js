import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { Form, Tooltip } from "antd";

import { AddUser } from "../../../../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { signUpAction } from "../../../../../redux/authReducer/actions/signUp";

import AddDoctorForm from "./AddDoctorForm";

import { Container, IconContainer, Wrapper } from "./AddDoctorForm.styled";

const AddDoctor = () => {
  const [modalVisible, setModaVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onSendForm = () => {
    setConfirmLoading(true);
    form.validateFields().then((values) => {
      // I set type as creating, because in reducer I check it, and if it's not sign up like a client
      // we don't need to change user
      dispatch(
        signUpAction({ ...values, role: "doctor", type: "creating" })
      ).then((res) => {
        setConfirmLoading(false);
        setModaVisible(false);
        form.resetFields();
      });
    });
  };

  const onCancelForm = () => setModaVisible(false);
  const onShowFormModal = () => setModaVisible(true);

  return (
    <Wrapper>
      <Tooltip placement="left" title="Add a new doctor">
        <Container onClick={onShowFormModal}>
          <IconContainer>
            <FontAwesomeIcon icon={AddUser} />
          </IconContainer>
        </Container>
      </Tooltip>
      <AddDoctorForm
        visible={modalVisible}
        onCancel={onCancelForm}
        onCreate={onSendForm}
        form={form}
        confirmLoading={confirmLoading}
      />
    </Wrapper>
  );
};

export default AddDoctor;

