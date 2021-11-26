import React from "react";
import styled from "styled-components";

import { ReactComponent as HomeSvg } from "../../images/home.svg";

const Wrapper = styled.div`
  widht: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6b9b37;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
`;
const NameOfPage = styled.div`
  display: flex;
`;
const UserAbout = styled.div``;
const Icon = styled.div`
  & svg {
    fill: #fff;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <NameOfPage>
          <Icon>
            <HomeSvg />
          </Icon>
          Home
        </NameOfPage>
        <UserAbout>John Smith</UserAbout>
      </Container>
    </Wrapper>
  );
};

export default Header;
