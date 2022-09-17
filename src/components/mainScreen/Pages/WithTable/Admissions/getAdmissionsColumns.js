import SymptomTag from "../Symptoms/SymptomTag";
import moment from "moment";
import { defineColorOfStatus } from "../../../../../auxiliary functions/defineColorOfStatus";
import { Button, Tag } from "antd";
import AgreeQuestion from "../AgreeQuestion/AgreeQuestion";

export const getAdmissionsColumns = (
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
    title: "Health complaints",
    dataIndex: "healthComplaints",
    key: "healthComplaints",
    render: (symptoms) => (
      <div>
        {symptoms.map((symptom) => (
          <SymptomTag symptom={symptom} key={symptom.name} />
        ))}
      </div>
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
        text: "confirmed",
        value: "confirmed",
      },
      {
        text: "waiting",
        value: "waiting",
      },
      {
        text: "ended",
        value: "ended",
      },
    ],
    onFilter: (value, record) => record.status.indexOf(value) === 0,

    render: (status) => {
      let color = defineColorOfStatus(status);
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
