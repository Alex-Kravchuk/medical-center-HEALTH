import { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/mainScreen/Home";

import LogIn from "./components/startScreen/LogInScreen/LogIn/LogIn";
import SignUp from "./components/startScreen/SignUpScreen/SignUp/SignUp";

import RequireAuth from "./components/hoc/RequireAuth";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <HashRouter>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<LogIn />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </HashRouter>
    </Wrapper>
  );
}

export default App;
