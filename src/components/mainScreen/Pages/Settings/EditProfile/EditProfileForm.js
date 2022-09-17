import React from "react";

import { Form, Input, Button } from "antd";

import { formItems } from "./formItems";

const EditProfileForm = ({ initialValues, onFinish, onFinishFailed, role }) => {
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
      {formItems.map(({ input, label, name }) => (
        <Form.Item label={label} name={name} key={name}>
          {input}
        </Form.Item>
      ))}
      {role === "doctor" && (
        <>
          <Form.Item label="Specialization" name="specialization">
            <Input />
          </Form.Item>
          <Form.Item label="About you" name="about">
            <Input.TextArea />
          </Form.Item>
        </>
      )}

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
