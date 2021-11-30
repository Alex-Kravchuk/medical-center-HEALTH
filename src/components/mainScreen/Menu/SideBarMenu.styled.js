import styled from "styled-components";

import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CustomizeMenu = styled(Menu)`
  background: #e1e5f2;
`;

export const CustomizeMenuItem = styled(Menu.Item)`
  &:hover {
    background: #fff;
  }

  span {
    color: #000;
    font-size: 18px;
  }
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
`;
