import React from "react";

import {
  Container,
  CustomizeLink,
  DontHaveAccount,
  Wrapper,
} from "../../Styles/Screen.styled";

import FormSignUp from "../FormSignUp/FormSignUp";
import HeaderSignUp from "../HeaderSignUp/HeaderSignUp";

const SignUp = () => {
  return (
    <Wrapper signUp>
      <Container>
        <HeaderSignUp />
        <FormSignUp />
        <DontHaveAccount>
          Already have an account?{" "}
          <CustomizeLink to="/">Log in</CustomizeLink>
        </DontHaveAccount>
      </Container>
    </Wrapper>
  );
};

export default SignUp;
