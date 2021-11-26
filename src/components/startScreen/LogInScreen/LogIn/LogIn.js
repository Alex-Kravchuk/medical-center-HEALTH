import React from "react";

import FormLogIn from "../FormLogIn/FormLogIn";
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import { Container, DontHaveAccount, Wrapper } from "./LogIn.styled";

const LogIn = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderLogIn />
        <FormLogIn />
        <DontHaveAccount>
          Don't have an account? <span>Sign up</span>
        </DontHaveAccount>
      </Container>
    </Wrapper>
  );
};

export default LogIn;
