import { Button, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { createAndSendingNotification } from "../../../../../../../auxiliary functions/createAndSendingNotification";
import { defineTypeOfNotification } from "../../../../../../../auxiliary functions/defineTypeOfNotification";
import { getDataFromDataBase } from "../../../../../../../firebase/getDataFromDataBase";
import { setDataToDataBase } from "../../../../../../../firebase/setDataToDataBase";

const AddFeedbackForm = ({
  doctorUID,
  name,
  surname,
  avatarURL,
  numberOfFeedback,
}) => {
  const [loadingSending, setLoadingSending] = useState(false);

  const [form] = useForm();

  const feedbackAuthorName = `${name} ${surname}`;

  const onSendFeedback = async (values) => {
    setLoadingSending(true);
    const path = `users/doctors/${doctorUID}/feedbacks/${numberOfFeedback}`;
    const feedback = {
      author: feedbackAuthorName,
      avatarURL: avatarURL ?? null,
      date: moment(new Date()).format("YYYY-MM-DD"),
      time: new Date().getTime(),
      content: values.content,
    };
    await setDataToDataBase(path, feedback);
    setLoadingSending(false);

    // make notification
    const notificationTemplate = defineTypeOfNotification("feedback", {
      name: feedbackAuthorName,
    });

    createAndSendingNotification(doctorUID, notificationTemplate);
    form.resetFields();
  };
  return (
    <Form form={form} name="add-feedback" onFinish={onSendFeedback}>
      <Form.Item
        name="content"
        rules={[{ required: true, message: "Please input this field!" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loadingSending}>
          Leave feedback
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddFeedbackForm;
