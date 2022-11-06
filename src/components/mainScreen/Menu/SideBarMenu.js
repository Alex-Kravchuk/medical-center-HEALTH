import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { autoSelectMenuItem } from "../../../auxiliary functions/AutoSelectMenuItem";

import { clientMenuItems, doctorMenuItems } from "./MenuItem/menuItems";

import { CustomizeMenu } from "./SideBarMenu.styled";

const SideBarMenu = () => {
  const { currentPage } = useSelector((state) => state);
  const { role } = useSelector((state) => state.auth.user);
  const [selectedMenuItem, setSelected] = useState("0");

  useEffect(() => {
    const selectedItem = autoSelectMenuItem(currentPage, role).toString();
    setSelected(selectedItem);
  }, [currentPage, role]);

  return (
    <>
      {role === "doctor" ? (
        <CustomizeMenu
          theme="light"
          mode="inline"
          selectedKeys={[selectedMenuItem]}
          items={doctorMenuItems}
        />
      ) : (
        <CustomizeMenu
          theme="light"
          mode="inline"
          selectedKeys={[selectedMenuItem]}
          items={clientMenuItems}
        />
      )}
    </>
  );
};

export default SideBarMenu;
