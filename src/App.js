import { HashRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import LogIn from "./components/startScreen/LogInScreen/LogIn/LogIn";
import SignUp from "./components/startScreen/SignUpScreen/SignUp/SignUp";
import { deviceMinWidth } from "./components/startScreen/Styles/mediaQueries";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${deviceMinWidth.tablet} {
    padding: 20px 0;
  }
`;

function App() {
  return (
    <Wrapper>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
        </Routes>
      </HashRouter>
    </Wrapper>
  );
}

export default App;
