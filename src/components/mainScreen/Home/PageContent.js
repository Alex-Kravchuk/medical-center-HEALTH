import React from "react";

import { Layout, Breadcrumb } from "antd";
import { Route, Routes, Outlet } from "react-router";

import News from "../Pages/News/News";
import About from "../Pages/About/About";
import Profile from "../Pages/Profile/Profile";
import Settings from "../Pages/Settings/Settings";
import Patients from "../Pages/Patients/Patients";
import Employees from "../Pages/Employees/Employees";
import Admissions from "../Pages/Admissions/Admissions";
import EditProfile from "../Pages/Settings/EditProfile/EditProfile";

const { Content } = Layout;

const PageContent = () => {
  return (
    <Content
      style={{ margin: "0 16px", background: "#fff", overflow: "initial" }}
    >
      <Breadcrumb style={{ margin: "76px 0 0 0" }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ minHeight: 360 }}>
        <Routes>
          <Route path="admissions" element={<Admissions />} />
          <Route path="patients" element={<Patients />} />
          <Route path="news" element={<News />} />
          <Route path="employees" element={<Employees />} />
          <Route path="about" element={<About />} />
          <Route path="settings" element={<Settings />}>
              <Route path="edit-profile" element={<EditProfile />} />
            </Route>
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </Content>
  );
};

export default PageContent;
