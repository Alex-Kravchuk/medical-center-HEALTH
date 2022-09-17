import React from "react";
import { SymptomWrapper } from "../DescribeSymptoms/DescribeSympotm.styled";

const SymptomToDisplay = ({ symptom }) => {
  return (
    <SymptomWrapper type={symptom.type} onlyRead={true}>
      {symptom.name}
    </SymptomWrapper>
  );
};

export default SymptomToDisplay;
