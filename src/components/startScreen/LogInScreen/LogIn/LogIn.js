import React from "react";

import FormLogIn from "../FormLogIn/FormLogIn";
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import {
  Container,
  CustomizeLink,
  DontHaveAccount,
  Wrapper,
} from "../../Styles/Screen.styled";

const LogIn = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderLogIn />
        <FormLogIn />
        <DontHaveAccount>
          Don't have an account?{" "}
          <CustomizeLink to="/signUp">Sign up</CustomizeLink>
        </DontHaveAccount>
      </Container>
    </Wrapper>
  );
};

export default LogIn;
