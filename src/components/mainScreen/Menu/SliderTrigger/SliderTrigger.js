import React from "react";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { Container, Wrapper } from "./SliderTrigger.styled";

const SliderTrigger = ({ collapsed }) => {
  return (
    <Wrapper>
      <Container>{collapsed ? <RightOutlined /> : <LeftOutlined />}</Container>
    </Wrapper>
  );
};

export default SliderTrigger;
