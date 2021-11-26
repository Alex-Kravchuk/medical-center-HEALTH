import React from "react";

import { Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import {
  CustomizeButton,
  CustomizeCheckbox,
  CustomizeInput,
  CustomizePasswordInput,
} from "./FormLogIn.styled";

const FormLogIn = () => {
  const onFinish = (values) => {
    console.log(values);
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
        label={
          <span
            style={{ color: "#A4A6B3", fontWeight: "bold", fontSize: "12px" }}
          >
            EMAIL
          </span>
        }
        rules={[
          {
            required: true,
            message: "Please input your email address!",
          },
        ]}
      >
        <CustomizeInput placeholder="Email address" />
      </Form.Item>
      <Form.Item
        name="password"
        label={
          <span
            style={{ color: "#A4A6B3", fontWeight: "bold", fontSize: "12px" }}
          >
            PASSWORD
          </span>
        }
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
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
        <CustomizeButton type="primary" htmlType="submit">
          Log in
        </CustomizeButton>
      </Form.Item>
    </Form>
  );
};

export default FormLogIn;
