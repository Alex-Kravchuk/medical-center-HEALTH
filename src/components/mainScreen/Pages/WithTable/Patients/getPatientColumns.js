import moment from "moment";
import { Button, Tag } from "antd";

import AgreeQuestion from "../AgreeQuestion/AgreeQuestion";

import { CustomTag } from "../Symptoms/SymptomTag.styled";

export const getPatientColumns = (
  isEditing,
  save,
  cancel,
  editingId,
  edit,
  filters
) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    filters: filters.nameFilters,
    onFilter: (value, record) => record.name.startsWith(value),
    filterSearch: true,
  },
  {
    title: "Surname",
    dataIndex: "surname",
    key: "surname",
    filters: filters.surnameFilters,
    onFilter: (value, record) => record.surname.startsWith(value),
    filterSearch: true,
  },
  {
    title: "Diagnosis",
    dataIndex: "diagnosis",
    key: "diagnosis",
    render: (symptom) => (
      <div>
        <CustomTag color="volcano">{symptom}</CustomTag>
      </div>
    ),
  },

  {
    title: "Date of hospitalization",
    dataIndex: "dateOfHospitalization",
    key: "dateOfHospitalization",
    sorter: (a, b) => moment(a.dateOfAdmission) - moment(b.dateOfAdmission),
  },
  {
    title: "Prescribed treatment",
    dataIndex: "prescribedTreatment",
    key: "prescribedTreatment",
    editable: true,
  },

  {
    title: "Status",
    dataIndex: "statusOfTreatment",
    key: "statusOfTreatment",
    editable: true,
    filters: [
      {
        text: "is in treatment",
        value: "is in treatment",
      },
      {
        text: "discharged",
        value: "discharged",
      },
    ],
    onFilter: (value, record) => record.status.indexOf(value) === 0,

    render: (status) => {
      let color = status === "is in treatment" ? "lightblue" : "lightgray";
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
        <AgreeQuestion save={save} cancel={cancel} record={record} />
      ) : (
        <Button
          disabled={editingId !== ""}
          size="small"
          onClick={() => edit(record)}
        >
          Edit
        </Button>
      );
    },
  },
];
