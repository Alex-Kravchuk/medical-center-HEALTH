import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HideIcon, RedicrectIcon } from "../../../../fontawesome";
import {
  ButtonsWrapper,
  HideIconContainer,
  RedicrectIconContainer,
} from "./ControllButtons.styled";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { defineCorrectRouteName } from "../../../../auxiliary functions/defineCorrectRouteName";

const ControllButtons = ({
  visible,
  type,
  notificationId,
  updateListFunc,
  onClose,
}) => {
  const {
    role,
    name,
    surname,
    specialization,
    avatarURL,
    email,
    phoneNumber,
    about,
    uid,
  } = useSelector((state) => state.auth.user);
  const userNameForPath = defineCorrectRouteName(`${name} ${surname}`);

  const linkToProfilePage =
    type === "changeTreatment" || type === "hospitalization";

  const linkToEmployeePage = type === "feedback";

  const mainPageForUser = role === "doctor" ? "admissions" : "appointments";

  const linkPath = `/home/${
    linkToProfilePage
      ? "profile"
      : linkToEmployeePage
      ? "employees/" + userNameForPath
      : mainPageForUser
  }`;

  // it needs for redirect to employee page (for feedbacks)
  const doctorData = {
    name,
    surname,
    specialization,
    avatarURL,
    email,
    phoneNumber,
    about,
    uid,
    fromNotifications: true,
  };

  const onClickHandler = () => updateListFunc(notificationId);
  const hideNotificationListHandler = () => onClose();

  return (
    <ButtonsWrapper isVisble={visible.toString()}>
      <HideIconContainer>
        <Tooltip placement="left" title="Hide it">
          <FontAwesomeIcon icon={HideIcon} onClick={onClickHandler} />
        </Tooltip>
      </HideIconContainer>
      <RedicrectIconContainer>
        <Tooltip placement="left" title="Redirect to page">
          <Link to={linkPath} state={linkToEmployeePage ? doctorData : null}>
            <FontAwesomeIcon
              icon={RedicrectIcon}
              onClick={hideNotificationListHandler}
            />
          </Link>
        </Tooltip>
      </RedicrectIconContainer>
    </ButtonsWrapper>
  );
};

export default ControllButtons;
