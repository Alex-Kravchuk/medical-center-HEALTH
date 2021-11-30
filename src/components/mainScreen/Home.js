import React, { useState } from "react";

import { Layout, Breadcrumb } from "antd";

import SideBarMenu from "./Menu/SideBarMenu";
import HeaderIcon from "./Menu/HeaderIcon/HeaderIcon";
import SliderTrigger from "./Menu/SliderTrigger/SliderTrigger";
import HeaderHomePage from "./Header/HeaderHomePage";

const { Content, Footer, Sider } = Layout;

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
        style={{ background: "#e1e5f2" }}
        trigger={<SliderTrigger collapsed={collapsed} />}
      >
        <HeaderIcon collapse={collapsed} />
        <SideBarMenu />
      </Sider>
      <Layout className="site-layout" style={{ background: "#fff" }}>
        <HeaderHomePage />
        <Content style={{ margin: "0 16px", background: "#fff" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
