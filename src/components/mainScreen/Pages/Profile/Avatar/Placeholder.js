import React from "react";

import { Spin } from "antd";
import { PlaceholderWrapper } from "./ProfileAvatar.styled";

const Placeholder = () => {
  return (
    <PlaceholderWrapper>
      <Spin size="large"/>
    </PlaceholderWrapper>
  );
};

export default Placeholder;
