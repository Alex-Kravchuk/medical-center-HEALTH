import React from "react";

import { useDispatch } from "react-redux";

import { Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import {
  CustomizeInput,
  CustomizeButton,
  CustomizeCheckbox,
  CustomizePasswordInput,
} from "../../Styles/Form.styled";

import CreateLabel from "../../CreateLabel";

import { logInAction } from "../../../../redux/authReducer/actions/logIn";

const INPUT_RULE = [
  {
    required: true,
    message: "Please fill in this field",
  },
];

const FormLogIn = ({ loading }) => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(logInAction({ ...values }));
  };
  return (
    <Form
      name="normal_login"
      layout="vertical"
      className="login-form"
      style={{ width: "100%" }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        label={<CreateLabel text="email" />}
        rules={INPUT_RULE}
      >
        <CustomizeInput
          placeholder="Email address"
          autoComplete={"new-password"}
        />
      </Form.Item>
      <Form.Item
        name="password"
        label={<CreateLabel text="password" password />}
        rules={INPUT_RULE}
      >
        <CustomizePasswordInput
          type="password"
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <CustomizeCheckbox>Remember me</CustomizeCheckbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <CustomizeButton type="primary" htmlType="submit" disabled={loading}>
          Log in
        </CustomizeButton>
      </Form.Item>
    </Form>
  );
};

export default FormLogIn;
