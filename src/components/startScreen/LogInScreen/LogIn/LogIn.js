import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import FormLogIn from "../FormLogIn/FormLogIn";
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import {
  Container,
  CustomizeLink,
  DontHaveAccount,
  Wrapper,
} from "../../Styles/Screen.styled";

const LogIn = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = user !== null;

  useEffect(() => {
    if (auth) {
      navigate("/home", { replace: true, state: location });
      console.log(location);
    }
  });

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
