import React, { useState } from "react";

import { Layout } from "antd";

import PageContent from "./PageContent";
import SideBarMenu from "../Menu/SideBarMenu";
import HeaderHomePage from "../Header/HeaderHomePage";
import HeaderIcon from "../Menu/HeaderIcon/HeaderIcon";
import SliderTrigger from "../Menu/SliderTrigger/SliderTrigger";

const { Footer, Sider } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          background: "#e1e5f2",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
        trigger={<SliderTrigger collapsed={collapsed} />}
      >
        <HeaderIcon collapse={collapsed} />
        <SideBarMenu />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          background: "#fff",
          marginLeft: collapsed ? 80 : 200,
          transition: "0.2s all ease",
        }}
      >
        <HeaderHomePage collapse={collapsed} />
        <PageContent />
        <Footer style={{ textAlign: "center", height: 40 }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
