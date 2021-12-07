import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

import { LoadingOutlined } from "@ant-design/icons";

import {
  Container,
  CustomizeLink,
  DontHaveAccount,
  LoadingScreen,
  Wrapper,
} from "../../Styles/Screen.styled";

import FormSignUp from "../FormSignUp/FormSignUp";
import HeaderSignUp from "../HeaderSignUp/HeaderSignUp";

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
      <Container loading={loading.toString()}>
        <HeaderSignUp />
        <FormSignUp loading={loading.toString()} />
        <DontHaveAccount>
          Already have an account? <CustomizeLink to="/">Log in</CustomizeLink>
        </DontHaveAccount>
      </Container>
      {loading && (
        <LoadingScreen>
          <LoadingOutlined style={{ fontSize: "48px", color: "green" }} />
        </LoadingScreen>
      )}
    </Wrapper>
  );
};

export default SignUp;
