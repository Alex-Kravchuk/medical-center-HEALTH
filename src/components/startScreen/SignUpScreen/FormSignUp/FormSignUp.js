import React from "react";

import { Form } from "antd";
import { useDispatch } from "react-redux";

import {
  CustomizeInput,
  CustomizeButton,
  CustomizeCheckbox,
  CustomizePasswordInput,
} from "../../Styles/Form.styled";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { signUpAction } from "../../../../redux/authReducer/actions/signUp";

import CreateLabel from "../../CreateLabel";

const INPUT_RULE = [
  {
    required: true,
    message: "Please fill in this field",
  },
];

const FormSignUp = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log(values);
    dispatch(signUpAction({ ...values, role: "client" }));
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
        name="name"
        label={<CreateLabel text="name" />}
        rules={INPUT_RULE}
      >
        <CustomizeInput placeholder="Your name" autoComplete={"new-password"} />
      </Form.Item>
      <Form.Item
        name="surname"
        label={<CreateLabel text="surname" />}
        rules={INPUT_RULE}
      >
        <CustomizeInput
          placeholder="Your surname"
          autoComplete={"new-password"}
        />
      </Form.Item>
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
        label={<CreateLabel text="password" />}
        rules={INPUT_RULE}
      >
        <CustomizePasswordInput
          type="password"
          placeholder="Password"
          autoComplete={"new-password"}
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
        <CustomizeButton type="primary" htmlType="submit">
          Sign up
        </CustomizeButton>
      </Form.Item>
    </Form>
  );
};

export default FormSignUp;

// TODO Form.Item points like array maybe
