import React from "react";

import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Surname",
    dataIndex: "surname",
  },
  {
    title: "healthComplaints",
    dataIndex: "healthComplaints",
  },

  {
    title: "dateOfAdmission",
    dataIndex: "dateOfAdmission",
  },

  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Operations",
    dataIndex: "operations",
    editable: true,
  },
];

const Admissions = () => {
  return <div></div>;
};

export default Admissions;
