import React, { useState } from "react";

import NotificationHeader from "./NotifHeader";
import NotificationContent from "./NotifContent";

import ControllButtons from "../NotificationControllButtons/ControllButtons";

import {
  NotificationListItem,
  NotificationWrapper,
} from "../Notifications.styled";

const Notification = ({ data, updateListFunc, onClose }) => {
  const [buttonsAreVisible, setButtonsVisible] = useState(false);

  const {
    id,
    type,
    notificationTime,
    notificationDate,
    contentData,
    category,
  } = data;

  const onMouseEnterHandler = () => {
    setButtonsVisible(true);
  };
  const onMouseLeaveHandler = () => {
    setButtonsVisible(false);
  };

  return (
    <NotificationListItem
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <ControllButtons
        visible={buttonsAreVisible}
        notificationId={id}
        updateListFunc={updateListFunc}
        type={type}
        category={category}
        onClose={onClose}
        data={contentData}
      />
      <NotificationWrapper>
        <NotificationHeader
          time={notificationTime}
          date={notificationDate}
          type={type}
        />
        <NotificationContent
          data={contentData}
          type={type}
          category={category}
        />
      </NotificationWrapper>
    </NotificationListItem>
  );
};

export default Notification;
