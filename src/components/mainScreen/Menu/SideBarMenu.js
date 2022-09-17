import React, { useEffect, useState } from "react";

import {
  CustomizeMenu,
  CustomizeMenuItem,
  CustomizeSubMenu,
} from "./SideBarMenu.styled";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { autoSelectMenuItem } from "../../../auxiliary functions/AutoSelectMenuItem";
import { menuRoutes } from "../../../routes/menuRoutes";

// This solution works only then we have one or two level menu

const SideBarMenu = () => {
  const { currentPage } = useSelector((state) => state);
  const { role } = useSelector((state) => state.auth.user);
  const [selectedMenuItem, setSelected] = useState("0");

  useEffect(() => {
    const selectedItem = autoSelectMenuItem(currentPage).toString();
    setSelected(selectedItem);
  }, [currentPage]);

  return (
    <CustomizeMenu
      theme="light"
      mode="inline"
      selectedKeys={[selectedMenuItem]}
    >
      {role === "client" &&
        menuRoutes.map((item, index) =>
          item.children ? (
            item.children.map((subItem) => (
              <CustomizeSubMenu
                icon={item.icon}
                key={item.menuKey}
                title={item.label}
              >
                <CustomizeMenuItem key={subItem.menuKey} icon={subItem.icon}>
                  <Link to={subItem.to}>{subItem.label}</Link>
                </CustomizeMenuItem>
              </CustomizeSubMenu>
            ))
          ) : !item.onlyDoctor ? (
            <CustomizeMenuItem key={item.menuKey} icon={item.icon}>
              <Link to={item.to}>{item.label}</Link>
            </CustomizeMenuItem>
          ) : null
        )}

      {(role === "doctor" || role === 'admin') &&
        menuRoutes.map((item, index) =>
        item.children ? (
          item.children.map((subItem) => (
            <CustomizeSubMenu
              icon={item.icon}
              key={item.menuKey}
              title={item.label}
            >
              <CustomizeMenuItem key={subItem.menuKey} icon={subItem.icon}>
                <Link to={subItem.to}>{subItem.label}</Link>
              </CustomizeMenuItem>
            </CustomizeSubMenu>
          ))
        ) : !item.onlyClient ? (
          <CustomizeMenuItem key={item.menuKey} icon={item.icon}>
            <Link to={item.to}>{item.label}</Link>
          </CustomizeMenuItem>
        ) : null
        )}

    </CustomizeMenu>
  );
};

export default SideBarMenu;
