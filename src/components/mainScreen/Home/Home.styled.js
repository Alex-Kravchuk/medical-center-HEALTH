import { Layout } from "antd";
import styled from "styled-components";

const { Footer, Sider } = Layout;

export const Wrapper = styled(Layout)`
  min-height: 100vh;
`;

export const Menu = styled(Sider)`
  background: #e1e5f2;
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
`;

export const Page = styled(Layout)`
  background: #fff;
  margin-left: ${({ collapsed }) => (collapsed === 'true' ? "80px" : "200px")};
  transition: 0.2s all ease;
`;

export const PageFooter = styled(Footer)`
  text-align: center;
  height: 40;
`;
