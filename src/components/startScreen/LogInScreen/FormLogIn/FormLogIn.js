import React from "react";

import { useDispatch } from "react-redux";

import { Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import {
  createLabel,
  CustomizeButton,
  CustomizeCheckbox,
  CustomizeInput,
  CustomizePasswordInput,
} from "../../Styles/Form.styled";
import { signIn } from "../../../../redux/authReducer/authReducer";
import { fetchUser } from "../../../../redux/authReducer/fetchUserLogIn/fetchUser";
import { getDataFromDataBase } from "../../../../firebase/getDataFromDataBase";

const FormLogIn = ({ loading }) => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const { email, password } = values;
    // console.log(values);
    dispatch(fetchUser(values));
    // getDataFromDataBase();
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
        label={createLabel("PASSWORD", true)}
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
        <CustomizeButton type="primary" htmlType="submit" disabled={loading}>
          Log in
        </CustomizeButton>
      </Form.Item>
    </Form>
  );
};

export default FormLogIn;
