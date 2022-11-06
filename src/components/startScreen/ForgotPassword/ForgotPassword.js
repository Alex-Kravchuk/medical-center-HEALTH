import React, { useRef, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

import styled from "styled-components";

import { auth } from "../../../firebase";

import logInIcon from "../../../images/health-insurance.png";

import { CustomizeInput } from "../Styles/Form.styled";
import { Container, Wrapper } from "../Styles/Screen.styled";
import { ForgotPasswordButton } from "./ForgotPassword.styled";
import { Header, Icon, SubTitle, Title } from "../Styles/Header.styled";

import QueryResult from "./SuccessfullySending";
import { getCorrectErrorCode } from "./getCorrectErrorCode";

const TextItem = styled.p``;

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const [successfullySent, setSuccessfulySent] = useState(false);
  const [error, setError] = useState("");

  const sendResetEmailHandler = () => {
    setError("");
    const email = emailRef.current.input.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessfulySent(true);

        setTimeout(
          () =>
            navigate("/", {
              replace: true,
              state: location,
            }),
          2000
        );
      })
      .catch((er) => {
        const error = getCorrectErrorCode(er.code);
        setError(error);
      });
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <Icon src={logInIcon} alt="medical-care" />
          <Title>
            <TextItem>Medical center</TextItem>
            <TextItem>Health</TextItem>
          </Title>
          <SubTitle>
            <TextItem>If you forgot your password</TextItem>
            <TextItem>Enter your email below</TextItem>
            <TextItem style={{ color: "red" }}>{error}</TextItem>
          </SubTitle>
        </Header>
        {successfullySent ? (
          <QueryResult status={successfullySent} />
        ) : (
          <>
            <CustomizeInput placeholder="Enter your email" ref={emailRef} />
            <ForgotPasswordButton
              onClick={sendResetEmailHandler}
              type="primary"
            >
              Send password reset email
            </ForgotPasswordButton>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default ForgotPassword;
