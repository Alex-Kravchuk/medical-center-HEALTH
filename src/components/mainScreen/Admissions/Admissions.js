import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Table,
  Tag,
  Popconfirm,
  Form,
  Select,
  Button,
  DatePicker,
  TimePicker,
} from "antd";

import moment from "moment";
import { mutateDate } from "./mutateData";
import { getDataFromDataBase } from "../../../firebase/getDataFromDataBase";
import { setDataToDataBase } from "../../../firebase/setDataToDataBase";
// import { useForm } from "antd/lib/form/Form";

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
          <Select.Option value="admitted">admitted</Select.Option>
          <Select.Option value="waiting">waiting</Select.Option>
        </Select>
      );
    } else if (inputType === "dateOfAdmission") {
      return <DatePicker format="YYYY-MM-DD" />;
    } else {
      return <TimePicker format="hh:mm a" />;
    }
  };

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `
          Please fill in the field`,
            },
          ]}
          style={{ margin: 0 }}
        >
          {setTypeOfInput(dataIndex)}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Admissions = () => {
  const { admissionsData } = useSelector((state) => state);
  const [form] = Form.useForm();
  const [insideData, setData] = useState(mutateDate(admissionsData));
  const [editingKey, setEditingKey] = useState("");
  const dispatch = useDispatch();

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      surname: "",
      healthComplaints: "",
      dateOfAdmission: record.dateOfAdmission,
      time: record.dateOfAdmission,
      status: record.status,
      ...record,
    });

    setEditingKey(record.key);
  };

  const cancel = () => setEditingKey("");

  const deleteRow = () => {};

  const save = async (key) => {
    try {
      const row = await form.validateFields();

      const newData = [...insideData];
      const index = newData.findIndex((item) => item.key === key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (error) {
      console.log("Validate failed", error);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Health complaints",
      dataIndex: "healthComplaints",
      key: "healthComplaints",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },

    {
      title: "Date of admission",
      dataIndex: "dateOfAdmission",
      key: "dateOfAdmission",
      editable: true,
      sorter: (a, b) => moment(a.dateOfAdmission) - moment(b.dateOfAdmission),
      render: (record) => record.format("YYYY-MM-DD"),
    },

    {
      title: "Reception time",
      dataIndex: "time",
      key: "time",
      editable: true,
      render: (time) => time.format("hh:mm a"),
      sorter: (a, b) => moment(a.time) - moment(b.time),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      editable: true,
      filters: [
        {
          text: "waiting",
          value: "waiting",
        },
        {
          text: "admitted",
          value: "admitted",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,

      render: (status) => {
        let color = status === "waiting" ? "green" : "lightgray";
        return (
          <Tag color={color} key={status}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Operations",
      dataIndex: "operations",
      key: "operations",
      render: (text, record) => {
        const editable = isEditing(record);
        return editable ? (
          <div style={{ display: "flex" }}>
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => save(record.key)}
            >
              <Button size="small" type="primary" style={{ marginRight: 8 }}>
                Оk
              </Button>
            </Popconfirm>
            <Popconfirm title="Cancel?" onConfirm={cancel}>
              <Button size="small">Cancel</Button>
            </Popconfirm>
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => deleteRow(record)}
            >
              <Button
                size="small"
                type="primary"
                style={{ marginLeft: 8, background: "#ef5350" }}
              >
                Delete
              </Button>
            </Popconfirm>
          </div>
        ) : (
          <Button
            disabled={editingKey !== ""}
            size="small"
            onClick={() => edit(record)}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  const defineInputType = (dataIndex) => {
    if (dataIndex === "dateOfAdmission") return "dateOfAdmission";
    if (dataIndex === "time") return "time";
    if (dataIndex === "status") return "status";
  };

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: defineInputType(col.dataIndex),
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} name="editable-form" component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        dataSource={insideData}
        columns={mergedColumns}
        pagination={{
          pageSize: 4,
        }}
      />
      <button
        onClick={() => {
          console.log("start getting");

          getDataFromDataBase("users2");
          console.log("end getting");
        }}
      >
        Click
      </button>
    </Form>
  );
};

export default Admissions;
