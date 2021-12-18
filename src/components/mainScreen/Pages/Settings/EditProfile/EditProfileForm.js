import React from "react";

import { Form, Input, Button, Select, DatePicker } from "antd";

const EditProfileForm = ({ initialValues, onFinish, onFinishFailed }) => {
  return (
    <Form
      name="basic"
      labelCol={{
        span: 7,
      }}
      wrapperCol={{
        span: 10,
      }}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="large"
    >
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Surname" name="surname">
        <Input />
      </Form.Item>

      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      <Form.Item label="Phone number" name="phoneNumber">
        <Input />
      </Form.Item>
      <Form.Item label="Date of birth" name="dateOfBirth">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Sex" name="sex">
        <Select>
          <Select.Option key="Male">Male</Select.Option>
          <Select.Option key="Female">Female</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Country" name="country">
        <Input />
      </Form.Item>
      <Form.Item label="City" name="city">
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 11,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Send changes
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditProfileForm;
