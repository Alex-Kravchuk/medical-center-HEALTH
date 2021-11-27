import { HashRouter, Routes, Route } from "react-router-dom";

import LogIn from "./components/startScreen/LogInScreen/LogIn/LogIn";
import SignUp from "./components/startScreen/SignUpScreen/SignUp/SignUp";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
