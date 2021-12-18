import { useState } from "react";
import { HashRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/mainScreen/Home/Home";

import LogIn from "./components/startScreen/LogInScreen/LogIn/LogIn";
import SignUp from "./components/startScreen/SignUpScreen/SignUp/SignUp";

import RequireAuth from "./components/hoc/RequireAuth";
import Admissions from "./components/mainScreen/Pages/Admissions/Admissions";
import Patients from "./components/mainScreen/Pages/Patients/Patients";
import News from "./components/mainScreen/Pages/News/News";
import Employees from "./components/mainScreen/Pages/Employees/Employees";
import About from "./components/mainScreen/Pages/About/About";
import Settings from "./components/mainScreen/Pages/Settings/Settings";
import Profile from "./components/mainScreen/Pages/Profile/Profile";
import EditProfile from "./components/mainScreen/Pages/Settings/EditProfile/EditProfile";

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
          >
            <Route path="admissions" element={<Admissions />} />
            <Route path="patients" element={<Patients />} />
            <Route path="news" element={<News />} />
            <Route path="employees" element={<Employees />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} >
              <Route path="edit-profile" element={<EditProfile />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </Wrapper>
  );
}

export default App;
