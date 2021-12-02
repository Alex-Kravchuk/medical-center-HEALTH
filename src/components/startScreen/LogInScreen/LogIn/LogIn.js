import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

import FormLogIn from "../FormLogIn/FormLogIn";
import HeaderLogIn from "../HeaderLogIn/HeaderLogIn";
import {
  Container,
  CustomizeLink,
  DontHaveAccount,
  Wrapper,
  LoadingScreen,
} from "../../Styles/Screen.styled";

const LogIn = () => {
  const { user, loading, atention } = useSelector((state) => state.auth);
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
      <Container loading={loading}>
        <HeaderLogIn innvalidLoginOrPassword={atention} />
        <FormLogIn loading={loading} />
        <DontHaveAccount>
          Don't have an account?{" "}
          <CustomizeLink to="/signUp">Sign up</CustomizeLink>
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

export default LogIn;
