import styled from "styled-components";

import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { SubMenu } = Menu;

export const CustomizeMenu = styled(Menu)`
  .ant-menu-item {
    &:hover {
      background: #fff;
    }
  }

  .ant-menu-submenu-title {
    a {
      color: #000;
    }

    &:hover {
      background: #fff;

      a {
        color: #1890ff;
      }
    }
  }
  .ant-menu-title-content {
    font-size: 16px;

    a:hover {
      color: #1890ff;
    }
  }

  background: #e1e5f2;
`;

export const CustomizeMenuItem = styled(Menu.Item)`
  &:hover {
    background: #fff;
  }

  span {
    color: #000;
    font-size: 16px;
  }
`;

export const CustomizeSubMenu = styled(SubMenu)`
  span {
    color: #000;
    font-size: 16px;
  }
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
`;
