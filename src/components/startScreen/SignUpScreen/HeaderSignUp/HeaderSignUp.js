import React from "react";

import logInIcon from "../../../../images/health-insurance.png";
import { Header, Icon, SubTitle, Title } from "../../Styles/Header.styled";

const HeaderSignUp = () => {
  return (
    <Header>
      <Icon src={logInIcon} alt="medical-care" />
      <Title>
        <p>Medical center</p>
        <p>Health</p>
      </Title>
      <SubTitle>
        <p>WELCOME</p>
        <p>Please fill the fields below</p>
      </SubTitle>
    </Header>
  );
};

export default HeaderSignUp;
