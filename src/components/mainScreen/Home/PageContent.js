import React from "react";

import { Layout } from "antd";
import {  Routes } from "react-router";

import styled from "styled-components";

import { pagesRoutes } from "../../../routes/pagesRoutes";
import DistributionOfRoutes from "../../hoc/DistributionOfRoutes";


const { Content } = Layout;

const ContentWrapper = styled(Content)`
  margin: 0 16px;
  background: #fff;
  overflow: initial;
`;

const ContentBlock = styled.div`
  min-height: 360px;
  margin: 76px 0 0 0;
`;

const PageContent = () => {
  const routes = DistributionOfRoutes(pagesRoutes);
  return (
    <ContentWrapper>
      <ContentBlock>
        <Routes>{routes}</Routes>
      </ContentBlock>
    </ContentWrapper>
  );
};

export default PageContent;
