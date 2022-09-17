import React from "react";

import appIcon from "../../../../images/health-insurance.png";
import { Container, Icon, Wrapper, Title } from "./HeaderIcon.styled";

const HeaderIcon = ({ collapse }) => {
  return (
    <Wrapper>
      <Container collapse={collapse}>
        <Icon src={appIcon} alt="brand" collapse={collapse} />
        <Title>HEALTH</Title>
      </Container>
    </Wrapper>
  );
};

export default HeaderIcon;
