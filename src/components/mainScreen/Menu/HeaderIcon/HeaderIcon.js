import React from "react";

import { Container, Icon, Wrapper } from "./HeaderIcon.styled";
import appIcon from "../../../../images/health-insurance.png";

const HeaderIcon = ({ collapse }) => {
  return (
    <Wrapper>
      <Container collapse={collapse}>
        <Icon src={appIcon} alt="brand" collapse={collapse} />
        <span>HEALTH</span>
      </Container>
    </Wrapper>
  );
};

export default HeaderIcon;
