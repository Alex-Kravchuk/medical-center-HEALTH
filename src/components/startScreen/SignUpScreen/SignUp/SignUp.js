import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import ScreenHeader from "../../ScreeHeader/ScreenHeader";

import {
  Wrapper,
  Container,
  LoadingIcon,
  CustomizeLink,
  LoadingScreen,
  DontHaveAccount,
} from "../../Styles/Screen.styled";

import FormSignUp from "../FormSignUp/FormSignUp";

const SignUp = () => {
  const { user, loading, atention } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = user !== null;

  useEffect(() => {
    if (auth) {
      navigate("/home/profile", { replace: true, state: location });
      console.log(location);
    }
  });
  return (
    <Wrapper signUp>
      <Container>
        <ScreenHeader error={atention} type="signUp" />
        <FormSignUp loading={loading.toString()} />
        <DontHaveAccount>
          Already have an account? <CustomizeLink to="/">Log in</CustomizeLink>
        </DontHaveAccount>
      </Container>
      {loading && (
        <LoadingScreen loading={loading.toString()}>
          <LoadingIcon />
        </LoadingScreen>
      )}
    </Wrapper>
  );
};

export default SignUp;
