import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  width: 30%;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 0 15px #fff;
  border: 1px solid black;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SignUp = () => {
  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
};

export default SignUp;
