import React from "react";

import BlockOfDate from "./BlockOfData";

import { DataRow, TreatmentInfoContainer } from "./AboutUser.styled";

const TreatmentInfo = ({ role, isInTreatment }) => {
  let therapist;
  let prescribedTreatment;

  if (isInTreatment) {
    therapist = isInTreatment.therapist;
    prescribedTreatment = isInTreatment.prescribedTreatment;
  }

  const ruleForDisplay = role === "client" && isInTreatment;

  return (
    <>
      {ruleForDisplay && (
        <TreatmentInfoContainer>
          <DataRow>
            <BlockOfDate value={therapist} label="Therapist" />
          </DataRow>
          <DataRow>
            <BlockOfDate
              value={prescribedTreatment}
              label="Prescribed treatment"
            />
          </DataRow>
        </TreatmentInfoContainer>
      )}
    </>
  );
};

export default TreatmentInfo;
