import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormOutlined } from "@ant-design/icons";

import {
  CustomizeMenu,
  CustomizeMenuItem,
  CustomizeSubMenu,
} from "./SideBarMenu.styled";

import {
  About,
  Admissions,
  Employees,
  News,
  Patien,
  Settings,
  SubSettings,
} from "../../../fontawesome";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { autoSelectMenuItem } from "./AutoSelectMenuItem";

const SideBarMenu = () => {
  const { currentPage } = useSelector((state) => state);
  const [selectedMenuItem, setSelected] = useState("1");

  useEffect(() => {
    const selectedItem = autoSelectMenuItem(currentPage).toString();
    setSelected(selectedItem);
  }, [currentPage]);

  const iconSize = { fontSize: "18px" };
  return (
    <CustomizeMenu
      theme="light"
      mode="inline"
      selectedKeys={[selectedMenuItem]}
    >
      <CustomizeMenuItem
        key="1"
        icon={<FontAwesomeIcon icon={Admissions} style={iconSize} />}
      >
        <Link to="admissions">Addmissions</Link>
      </CustomizeMenuItem>

      <CustomizeMenuItem
        key="2"
        icon={<FontAwesomeIcon icon={Patien} style={iconSize} />}
      >
        <Link to="patients"> Patients</Link>
      </CustomizeMenuItem>
      <CustomizeMenuItem
        key="3"
        icon={<FontAwesomeIcon icon={News} style={iconSize} />}
      >
        <Link to="news">News</Link>
      </CustomizeMenuItem>
      <CustomizeMenuItem
        key="4"
        icon={<FontAwesomeIcon icon={Employees} style={iconSize} />}
      >
        <Link to="employees">Employees</Link>
      </CustomizeMenuItem>
      <CustomizeMenuItem
        key="5"
        icon={
          <FontAwesomeIcon icon={About} style={iconSize} style={iconSize} />
        }
      >
        <Link to="about">About center</Link>
      </CustomizeMenuItem>
      <CustomizeSubMenu
        key="sub1"
        icon={<FontAwesomeIcon icon={Settings} style={iconSize} />}
        title="Settings"
      >
        <CustomizeMenuItem
          key="6"
          icon={<FontAwesomeIcon icon={SubSettings} style={iconSize} />}
        >
          <Link to="settings/edit-profile"> Edit profile</Link>
        </CustomizeMenuItem>
      </CustomizeSubMenu>
    </CustomizeMenu>
  );
};

export default SideBarMenu;
