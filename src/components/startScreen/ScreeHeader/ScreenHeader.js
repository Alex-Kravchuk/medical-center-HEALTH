import React from "react";
import styled from "styled-components";

import logInIcon from "../../../images/logo.png";

import { Header, Icon, SubTitle, Title } from "../Styles/Header.styled";

const TextElement = styled.p``;

const ScreenHeader = ({ error, type }) => {
  return (
    <Header>
      <Icon src={logInIcon} alt="medical-care" />
      <Title>
        <TextElement>Medical center</TextElement>
        <TextElement>Health</TextElement>
      </Title>
      <SubTitle>
        {type === "logIn" ? (
          <TextElement>Log In to medical center</TextElement>
        ) : (
          <TextElement>Welcome</TextElement>
        )}
        {error ? (
          <TextElement style={{ color: "red" }}>{error}</TextElement>
        ) : (
          <TextElement>Please fill the fields below</TextElement>
        )}
      </SubTitle>
    </Header>
  );
};

export default ScreenHeader;
