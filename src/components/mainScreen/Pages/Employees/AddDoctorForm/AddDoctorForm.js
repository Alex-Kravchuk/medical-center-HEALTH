import React from "react";

import { Modal, Form, Input } from "antd";
import { formFields } from "./formFields";

const AddDoctorForm = ({
  visible,
  onCreate,
  onCancel,
  form,
  confirmLoading,
}) => {
  return (
    <Modal
      visible={visible}
      confirmLoading={confirmLoading}
      title="Add a new doctor"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form form={form} layout="vertical" name="add-doctor">
        {formFields.map(({ name, label, rules }, index) =>
          name === "password" ? (
            <Form.Item name={name} label={label} rules={rules} key={index}>
              <Input.Password autoComplete="new-password" />
            </Form.Item>
          ) : (
            <Form.Item name={name} label={label} rules={rules} key={index}>
              <Input autoComplete="new-password" />
            </Form.Item>
          )
        )}
      </Form>
    </Modal>
  );
};

export default AddDoctorForm;
