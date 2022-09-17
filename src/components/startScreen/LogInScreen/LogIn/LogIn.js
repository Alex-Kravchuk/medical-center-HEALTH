import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import FormLogIn from "../FormLogIn/FormLogIn";

import {
  Wrapper,
  Container,
  LoadingIcon,
  CustomizeLink,
  LoadingScreen,
  DontHaveAccount,
} from "../../Styles/Screen.styled";
import ScreenHeader from "../../ScreeHeader/ScreenHeader";

const LogIn = () => {
  const { user, loading, atention } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = user !== null;

  useEffect(() => {
    if (auth) {
      redirectToHomePage();
    }
  });

  const redirectToHomePage = () => {
    const homePageAfterLogIn =
      user.role !== "client" ? "admissions" : "appointments";

    navigate(`/home/${homePageAfterLogIn}`, {
      replace: true,
      state: location,
    });
  };

  return (
    <Wrapper>
      <Container>
        <ScreenHeader error={atention} type="logIn" />
        <FormLogIn loading={loading} />
        <DontHaveAccount>
          Don't have an account?{" "}
          <CustomizeLink to="/signUp">Sign up</CustomizeLink>
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

export default LogIn;
