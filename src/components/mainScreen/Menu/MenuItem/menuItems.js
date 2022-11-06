import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  About,
  Admissions,
  Employees,
  News,
  Patients,
  Settings,
  SubSettings,
} from "../../../../fontawesome";
import MenuItem from "./MenuItem";

const ICON_SIZE = { fontSize: "18px" };

export const doctorMenuItems = [
  {
    label: <MenuItem name="Admissions" path="admissions" />,
    icon: <FontAwesomeIcon icon={Admissions} style={ICON_SIZE} />,
    key: "1",
  },
  {
    label: <MenuItem name="Patients" path="patients" />,
    icon: <FontAwesomeIcon icon={Patients} style={ICON_SIZE} />,
    key: "2",
  },
  {
    label: <MenuItem name="News" path="news" />,
    icon: <FontAwesomeIcon icon={News} style={ICON_SIZE} />,
    key: "3",
  },
  {
    label: <MenuItem name="Employees" path="employees" />,
    icon: <FontAwesomeIcon icon={Employees} style={ICON_SIZE} />,
    key: "4",
  },
  {
    label: <MenuItem name="About center" path="about" />,
    icon: <FontAwesomeIcon icon={About} style={ICON_SIZE} />,
    key: "5",
  },
  {
    label: <MenuItem name="Settings" path="settings" />,
    icon: <FontAwesomeIcon icon={Settings} style={ICON_SIZE} />,
    key: "6",
    children: [
      {
        label: <MenuItem name="Edit profile" path="settings/edit-profile" />,
        icon: <FontAwesomeIcon icon={SubSettings} style={ICON_SIZE} />,
        key: "sub-1",
      },
    ],
  },
];

export const clientMenuItems = [
  {
    label: <MenuItem name="Appointments" path="appointments" />,
    icon: <FontAwesomeIcon icon={Admissions} style={ICON_SIZE} />,
    key: "1",
  },

  {
    label: <MenuItem name="News" path="news" />,
    icon: <FontAwesomeIcon icon={News} style={ICON_SIZE} />,
    key: "2",
  },
  {
    label: <MenuItem name="Employees" path="employees" />,
    icon: <FontAwesomeIcon icon={Employees} style={ICON_SIZE} />,
    key: "3",
  },
  {
    label: <MenuItem name="About center" path="about" />,
    icon: <FontAwesomeIcon icon={About} style={ICON_SIZE} />,
    key: "4",
  },
  {
    label: <MenuItem name="Settings" path="settings" />,
    icon: <FontAwesomeIcon icon={Settings} style={ICON_SIZE} />,
    key: "5",
    children: [
      {
        label: <MenuItem name="Edit profile" path="settings/edit-profile" />,
        icon: <FontAwesomeIcon icon={SubSettings} style={ICON_SIZE} />,
        key: "sub-1",
      },
    ],
  },
];


