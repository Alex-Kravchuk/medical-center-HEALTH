import { DatePicker, Input, Select } from "antd";

export const formItems = [
  {
    label: "Name",
    name: "name",
    input: <Input />,
  },
  {
    label: "Surname",
    name: "surname",
    input: <Input />,
  },
  {
    label: "Email",
    name: "email",
    input: <Input />,
  },
  {
    label: "Phone number",
    name: "phoneNumber",
    input: <Input />,
  },
  {
    label: "Date of birth",
    name: "dateOfBirth",
    input: <DatePicker />,
  },
  {
    label: "Sex",
    name: "sex",
    input: (
      <Select>
        <Select.Option key="Male">Male</Select.Option>
        <Select.Option key="Female">Female</Select.Option>
      </Select>
    ),
  },
  {
    label: "Country",
    name: "country",
    input: <Input />,
  },
  {
    label: "City",
    name: "city",
    input: <Input />,
  },
  
];
