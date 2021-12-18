import React from "react";

import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    date: "2020-11-08",
    complaints: "headache, nuease",
    doctor: "Joseph Allen",
    diagnose: "Covid-19",
  },
  {
    key: "2",
    date: "2021-11-08",
    complaints: "headache, nuease",
    doctor: "Joseph Allen",
    diagnose: "Covid-19",
  },
  {
    key: "3",
    date: "2020-11-08",
    complaints: "headache, nuease",
    doctor: "Joseph Allen",
    diagnose: "Covid-19",
  },
  {
    key: "4",
    date: "2021-11-08",
    complaints: "headache, nuease",
    doctor: "Joseph Allen",
    diagnose: "Covid-19",
  },
  {
    key: "5",
    date: "2020-11-08",
    complaints: "headache, nuease",
    doctor: "Joseph Allen",
    diagnose: "Covid-19",
  },
  {
    key: "6",
    date: "2021-11-08",
    complaints: "headache, nuease",
    doctor: "Joseph Allen",
    diagnose: "Covid-19",
  },
];

const HistoryOfAppeals = () => {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Complaints",
      dataIndex: "complaints",
      key: "complaints",
    },
    {
      title: "Receiving doctor",
      dataIndex: "doctor",
      key: "doctor",
    },

    {
      title: "Diagnose",
      dataIndex: "diagnose",
      key: "diagnose",
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
};

export default HistoryOfAppeals;
