import React from "react";

import logInIcon from "../../../../images/health-insurance.png";
import { Header, Icon, SubTitle, Title } from "./HeaderLogIn.styled";

const HeaderLogIn = () => {
  return (
    <Header>
      <Icon src={logInIcon} alt="medical-care" />
      <Title>
        <p style={{ fontSize: "22px", color: "#A4A6B3" }}>Medical center</p>
        <p style={{ fontSize: "32px", color: "#1faa00", fontWeight: "bold" }}>
          Health
        </p>
      </Title>
      <SubTitle>
        <p style={{ fontSize: "30px", color: "#000", fontWeight: "bold" }}>
          Log In to medical center
        </p>
        <p style={{ fontSize: "16px", color: "#A4A6B3" }}>
          Enter your email and password below
        </p>
      </SubTitle>
    </Header>
  );
};

export default HeaderLogIn;
