import React from "react";

import { SymptomWrapper } from "./DescribeSympotm.styled";

const Symptom = ({ symptom, addSymptom, selectedSymptoms }) => {
  const isSelected = selectedSymptoms.includes(symptom);

  const handlerAddSymptom = () => {
    if (isSelected) {
      const copy = Object.assign([], selectedSymptoms);
      const index = selectedSymptoms.indexOf(symptom);
      copy.splice(index, 1);
      addSymptom((state) => ({ ...state, generalSymptoms: copy }));
    } else {
      addSymptom((state) => ({
        ...state,
        generalSymptoms: [...state.generalSymptoms, symptom],
      }));
    }
  };
  return (
    <SymptomWrapper
      onClick={handlerAddSymptom}
      type={symptom.type}
      selected={isSelected}
      onlyRead={false}
    >
      {symptom.name}
    </SymptomWrapper>
  );
};

export default Symptom;
