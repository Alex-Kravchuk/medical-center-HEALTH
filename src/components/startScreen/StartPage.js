import React from "react";
import styled from "styled-components";
import LogIn from "./LogInScreen/LogIn/LogIn";

const Wrapper = styled.div`
  background: #dcd8cf;
  width: 100vw;
  height: 100vh;
`;

const StartPage = () => {
  return (
    <Wrapper>
      <LogIn />
    </Wrapper>
  );
};

export default StartPage;
