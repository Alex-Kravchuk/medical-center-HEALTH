import styled from "styled-components";

import { Layout, Avatar } from "antd";
const { Header } = Layout;

export const CustomizeHeaderHomePage = styled(Header)`
  padding: 0;
  background: #e1e5f2;
  height: 60px;
  position: fixed;
  z-index: 222;
  transition: 0.2s all ease;
  width: ${(props) =>
    props.collapse === "true" ? "calc(100% - 80px)" : "calc(100% - 200px)"};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px;
  font-family: "Ubuntu", sans-serif;
  color: #474749;
`;

export const PageName = styled.div`
  font-size: 30px;
`;
export const AboutUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserName = styled.div`
  padding: 0 15px 0 0;
  font-size: 16px;
`;

export const HeaderNotification = styled.div`
  margin-right: 40px;
  position: relative;
  width: 60px;
  display: flex;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    width: 1px;
    height: 25px;
    background-color: #bfbdbd;
  }
`;

export const CustomAvatar = styled(Avatar)`
  cursor: pointer;
  background: ${(props) => !props.user && "inherit"};

  svg {
    font-size: 28px;
    color: #000;
  }
`;
