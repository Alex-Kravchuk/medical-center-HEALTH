import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CustomizeMenu, CustomizeMenuItem } from "./SideBarMenu.styled";
import {
  About,
  Admissions,
  Employees,
  News,
  Patien,
  Settings,
} from "../../../fontawesome";

const SideBarMenu = () => {
  const iconSize = { fontSize: "18px" };
  return (
    <CustomizeMenu theme="light" mode="inline">
      <CustomizeMenuItem
        key="1"
        icon={<FontAwesomeIcon icon={Admissions} style={iconSize} />}
      >
        Addmissions
      </CustomizeMenuItem>
      <CustomizeMenuItem
        key="2"
        icon={<FontAwesomeIcon icon={Patien} style={iconSize} />}
      >
        Patients
      </CustomizeMenuItem>
      <CustomizeMenuItem
        key="3"
        icon={<FontAwesomeIcon icon={News} style={iconSize} />}
      >
        News
      </CustomizeMenuItem>
      <CustomizeMenuItem
        key="4"
        icon={<FontAwesomeIcon icon={Employees} style={iconSize} />}
      >
        Employees
      </CustomizeMenuItem>
      <CustomizeMenuItem
        key="5"
        icon={
          <FontAwesomeIcon icon={About} style={iconSize} style={iconSize} />
        }
      >
        About center
      </CustomizeMenuItem>
      <CustomizeMenuItem
        key="6"
        icon={<FontAwesomeIcon icon={Settings} style={iconSize} />}
      >
        Settings
      </CustomizeMenuItem>
    </CustomizeMenu>
  );
};

export default SideBarMenu;
