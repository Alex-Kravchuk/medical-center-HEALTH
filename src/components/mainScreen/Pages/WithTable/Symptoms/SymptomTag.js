import React from "react";

import { CustomTag } from "./SymptomTag.styled";

const SymptomTag = ({ symptom }) => {
  const { name, type } = symptom;

  const color =
    type === "common" ? "gold" : type === "dangerous" ? "volcano" : "magenta";

  return <CustomTag color={color}>{name}</CustomTag>;
};

export default SymptomTag;
