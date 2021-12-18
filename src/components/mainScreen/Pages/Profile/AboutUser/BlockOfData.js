import React from "react";

import { Data, DataItem, Label } from "./AboutUser.styled";


const BlockOfDate = ({ value, label }) => {
  return (
    <DataItem>
      <Label>{label}:</Label>
      <Data>{value}</Data>
    </DataItem>
  );
};

export default BlockOfDate;
