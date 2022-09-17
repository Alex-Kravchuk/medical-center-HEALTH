import React from "react";
import { useSelector } from "react-redux";

import { Avatar, Comment } from "antd";

import AddFeedbackForm from "./AddFeedbackForm";

const AddFeedback = ({ doctorUID, numberOfFeedback }) => {
  const { avatarURL, name, surname } = useSelector((state) => state.auth.user);
  return (
    <Comment
      avatar={<Avatar src={avatarURL} alt="avatar" />}
      content={
        <AddFeedbackForm
          doctorUID={doctorUID}
          name={name}
          surname={surname}
          avatarURL={avatarURL}
          numberOfFeedback={numberOfFeedback}
        />
      }
    />
  );
};

export default AddFeedback;
