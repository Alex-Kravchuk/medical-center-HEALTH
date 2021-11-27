import { Form } from "antd";
import React from "react";
import {
  createLabel,
  CustomizeButton,
  CustomizeCheckbox,
  CustomizeInput,
  CustomizePasswordInput,
} from "../../Styles/Form.styled";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const FormSignUp = () => {
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
        name="name"
        label={createLabel("NAME")}
        rules={[
          {
            required: true,
            message: "Please input your email address!",
          },
        ]}
      >
        <CustomizeInput placeholder="Your name" />
      </Form.Item>
      <Form.Item
        name="surname"
        label={createLabel("SURNAME")}
        rules={[
          {
            required: true,
            message: "Please input your email address!",
          },
        ]}
      >
        <CustomizeInput placeholder="Your surname" />
      </Form.Item>
      <Form.Item
        name="email"
        label={createLabel("EMAIL")}
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
        label={createLabel("PASSWORD")}
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
          Sign up
        </CustomizeButton>
      </Form.Item>
    </Form>
  );
};

export default FormSignUp;
