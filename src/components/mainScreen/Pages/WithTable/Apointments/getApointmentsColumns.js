import { Button, Tag } from "antd";
import moment from "moment";
import { defineColorOfStatus } from "../../../../../auxiliary functions/defineColorOfStatus";
import AgreeQuestion from "../AgreeQuestion/AgreeQuestion";
import SymptomTag from "../Symptoms/SymptomTag";

export const getApointmentsColumns = (
  isEditing,
  isDisabledEdit,
  editingId,
  save,
  cancel,
  edit,
  filters
) => [
  {
    title: "Doctor",
    dataIndex: "doctor",
    key: "doctor",
    filters: filters,
    onFilter: (value, record) => record.doctor.startsWith(value),
    filterSearch: true,
  },
  {
    title: "Health complaints",
    dataIndex: "healthComplaints",
    key: "healthComplaints",
    render: (symptoms) => {
      return (
        <>
          {symptoms.map((symptom) => (
            <SymptomTag symptom={symptom} key={symptom.name} />
          ))}
        </>
      );
    },
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
      const disabledEdit = isDisabledEdit(record);
      return editable ? (
        <AgreeQuestion save={save} cancel={cancel} record={record} />
      ) : (
        <Button
          disabled={editingId !== "" || disabledEdit}
          size="small"
          onClick={() => edit(record)}
        >
          Edit
        </Button>
      );
    },
  },
];
