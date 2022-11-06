import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Image } from "antd";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { specializationIcon } from "../../../../fontawesome";
import { changePageName } from "../../../../redux/pageNameReducer/pageNameReducer";

import DoctorInfoTabs from "./InfoTabs/DoctorInfoTabs";
import RemoveDoctor from "./RemoveDoctor/RemoveDoctor";

import {
  Wrapper,
  Container,
  InfoBlock,
  NameBlock,
  AvatarBlock,
  SpecializationBlock,
} from "./EmployeePage.styled";

const Title = styled.h2``;

const EmployeePage = () => {
  const { role } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const doctorData = location.state;
  const { pathname } = location;

  const {
    name,
    surname,
    specialization,
    avatarURL,
    email,
    phoneNumber,
    about,
    uid,
    fromNotifications,
  } = doctorData;

  const doctorName = name + " " + surname;

  useEffect(() => {
    dispatch(changePageName({ pathname }));
  }, [pathname, dispatch]);

  return (
    <Wrapper>
      <Container>
        <AvatarBlock>
          <Image src={avatarURL} width={300} />
        </AvatarBlock>
        <InfoBlock>
          <NameBlock>
            <Title>{doctorName}</Title>
          </NameBlock>

          <SpecializationBlock>
            <FontAwesomeIcon icon={specializationIcon} />
            <Title>{specialization}</Title>
          </SpecializationBlock>
          <DoctorInfoTabs
            phone={phoneNumber}
            email={email}
            currentDoctorUID={uid}
            about={about}
            fromNotifications={fromNotifications}
          />
        </InfoBlock>
      </Container>
      {role === "admin" && (
        <RemoveDoctor
          doctorName={doctorName}
          currentDoctorUID={doctorData.uid}
        />
      )}
    </Wrapper>
  );
};

export default EmployeePage;
