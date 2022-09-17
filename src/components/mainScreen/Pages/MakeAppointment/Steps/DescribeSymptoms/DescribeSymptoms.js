import React, { useEffect } from "react";

import { Input } from "antd";

import Symptom from "./Symptom";

import { symptoms } from "../../../../../../additionalData/symptoms";

import { SubTitle, Wrapper } from "./DescribeSympotm.styled";

const DescribeSymptoms = ({ handler, describeSymptoms, lastPageHandler }) => {
  const onChangeDetails = ({ target }) => {
    handler((state) => ({ ...state, symptomDetails: target.value }));
  };

  useEffect(() => {
    lastPageHandler(false);
  }, []);

  return (
    <Wrapper>
      <SubTitle>Please choose from the general symptoms you have</SubTitle>
      {symptoms.map((symptom, index) => (
        <Symptom
          key={index}
          symptom={symptom}
          addSymptom={handler}
          selectedSymptoms={describeSymptoms.generalSymptoms}
        />
      ))}
      <SubTitle>Please describe your symptoms in more detail</SubTitle>
      <Input.TextArea
        placeholder="Write here..."
        onChange={onChangeDetails}
        value={describeSymptoms.symptomDetails}
      />
    </Wrapper>
  );
};

export default DescribeSymptoms;
