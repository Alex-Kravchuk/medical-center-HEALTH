import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Admissions, FeedbackIcon, Patients } from "../../../../fontawesome";
import {
  NotificationHeaderWrap,
  TimeDataBlock,
  TypeNotificationBlock,
} from "../Notifications.styled";

const DataBlock = styled.span``;

const NotificationHeader = ({ time, date, type }) => {
  const iconType =
    type === "discharged" || type === "changeTreatment"
      ? Patients
      : type === "feedback"
      ? FeedbackIcon
      : Admissions;

  return (
    <NotificationHeaderWrap>
      <TimeDataBlock>
        <DataBlock>{date}</DataBlock> <DataBlock>{time}</DataBlock>
      </TimeDataBlock>
      <TypeNotificationBlock>
        <FontAwesomeIcon icon={iconType} style={{ fontSize: 18 }} />
      </TypeNotificationBlock>
    </NotificationHeaderWrap>
  );
};

export default NotificationHeader;
