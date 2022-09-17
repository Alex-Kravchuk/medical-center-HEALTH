import React from "react";

import { Button, Popconfirm } from "antd";

import { AgreeQuestionContainer } from "./AgreeQuestion.styled";

const AgreeQuestion = ({ save, record, cancel }) => {
  return (
    <AgreeQuestionContainer>
      <Popconfirm
        title="Are you sure?"
        onConfirm={() => {
          save(record);
        }}
      >
        <Button size="small" type="primary" style={{ marginRight: 8 }}>
          Оk
        </Button>
      </Popconfirm>
      <Popconfirm title="Cancel?" onConfirm={cancel}>
        <Button size="small">Cancel</Button>
      </Popconfirm>
    </AgreeQuestionContainer>
  );
};

export default AgreeQuestion;
