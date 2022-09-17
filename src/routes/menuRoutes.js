import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  News,
  About,
  Patients,
  Settings,
  Employees,
  Admissions,
  SubSettings,
} from "../fontawesome";

const ICON_SIZE = { fontSize: "18px" };

export const menuRoutes = [
  {
    label: "Admissions",
    icon: <FontAwesomeIcon icon={Admissions} style={ICON_SIZE} />,
    to: "admissions",
    menuKey: "1",
    onlyDoctor: true,
  },
  {
    label: "Appointments",
    icon: <FontAwesomeIcon icon={Admissions} style={ICON_SIZE} />,
    to: "appointments",
    menuKey: "1",
    onlyClient: true,
  },
  {
    label: "Patients",
    icon: <FontAwesomeIcon icon={Patients} style={ICON_SIZE} />,
    to: "patients",
    menuKey: "2",
    onlyDoctor: true,
  },
  {
    label: "News",
    icon: <FontAwesomeIcon icon={News} style={ICON_SIZE} />,
    to: "news",
    menuKey: "3",
  },

  {
    label: "Employees",
    icon: <FontAwesomeIcon icon={Employees} style={ICON_SIZE} />,
    to: "employees",
    menuKey: "4",
  },
  {
    label: "About center",
    icon: <FontAwesomeIcon icon={About} style={ICON_SIZE} />,
    to: "about",
    menuKey: "5",
  },
  {
    label: "Settings",
    icon: <FontAwesomeIcon icon={Settings} style={ICON_SIZE} />,
    to: "settings",
    menuKey: "sub1",
    children: [
      {
        label: "Edit profile",
        icon: <FontAwesomeIcon icon={SubSettings} style={ICON_SIZE} />,
        to: "settings/edit-profile",
        menuKey: "6",
      },
    ],
  },
];
