import { DatePicker, Select, TimePicker, Form, Input } from "antd";

const RULES = [
  {
    required: true,
    message: "Please fill in the field",
  },
];

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const setTypeOfInput = (inputType) => {
    if (inputType === "status") {
      return (
        <Select>
          <Select.Option value="ended">ended</Select.Option>
          <Select.Option value="waiting">waiting</Select.Option>
          <Select.Option value="confirmed">confirmed</Select.Option>
        </Select>
      );
    } else if (inputType === "statusOfTreatment") {
      return (
        <Select>
          <Select.Option value="is in treatment">is in treatment</Select.Option>
          <Select.Option value="discharged">discharged</Select.Option>
        </Select>
      );
    } else if (inputType === "dateOfAdmission") {
      return <DatePicker format="YYYY-MM-DD" />;
    } else if (inputType === "prescribedTreatment") {
      return <Input.TextArea value={record.prescribedTreatment} />;
    } else {
      return <TimePicker format="hh:mm a" />;
    }
  };

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item name={dataIndex} rules={RULES} style={{ margin: 0 }}>
          {setTypeOfInput(dataIndex)}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;
