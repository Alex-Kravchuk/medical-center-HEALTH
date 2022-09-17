import React, { useState } from "react";

import PageContent from "./PageContent";
import SideBarMenu from "../Menu/SideBarMenu";
import HeaderHomePage from "../Header/HeaderHomePage";
import HeaderIcon from "../Menu/HeaderIcon/HeaderIcon";
import SliderTrigger from "../Menu/SliderTrigger/SliderTrigger";
import { Menu, Page, PageFooter, Wrapper } from "./Home.styled";

// TODO to load some components with React.lazy

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed)
    setCollapsed(collapsed);
  };

  return (
    <Wrapper >
      <Menu
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        trigger={<SliderTrigger collapsed={collapsed} />}
      >
        <HeaderIcon collapse={collapsed} />
        <SideBarMenu />
      </Menu>
      <Page  collapsed={collapsed.toString()}>
        <HeaderHomePage collapse={collapsed} />
        <PageContent />
        <PageFooter>
          Medical center HEALTH ©2022 Created by Alex Kravchuk
        </PageFooter>
      </Page>
    </Wrapper>
  );
};

export default Home;
