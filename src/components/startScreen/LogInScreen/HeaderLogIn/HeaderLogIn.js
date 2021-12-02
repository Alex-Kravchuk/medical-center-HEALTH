import React from "react";

import logInIcon from "../../../../images/health-insurance.png";
import { Header, Icon, SubTitle, Title } from "../../Styles/Header.styled";

const HeaderLogIn = ({ innvalidLoginOrPassword }) => {
  return (
    <Header>
      <Icon src={logInIcon} alt="medical-care" />
      <Title>
        <p>Medical center</p>
        <p>Health</p>
      </Title>
      <SubTitle>
        <p>Log In to medical center</p>
        <p>Enter your email and password below</p>
        {innvalidLoginOrPassword && (
          <p style={{ color: "red", marginTop: 20, marginBottom: -40 }}>
            Invalid login or password
          </p>
        )}
      </SubTitle>
    </Header>
  );
};

export default HeaderLogIn;
