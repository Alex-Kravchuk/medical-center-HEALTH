import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import moment from "moment";

import SymptomToDisplay from "./SymptomToDisplay";

import {
  CheckingData,
  Label,
  RowData,
  SymptomsContainer,
  Wrapper,
} from "./Checking.styled";
import { Title } from "../../MakeAppointment.styled";

const Checking = ({ lastPageHandler }) => {
  const { date, time, doctor, generalSymptoms, symptomDetails } = useSelector(
    (state) => state.makeAppointment
  );

  const correctViewOfTime = moment(time).format("hh:mm a");

  useEffect(() => {
    lastPageHandler(true);
  }, []);

  return (
    <Wrapper>
      <Title>Please check that everything is correct</Title>
      <RowData>
        <Label>Your doctor's appointment is scheduled for: </Label>
        <CheckingData>
          {date} {correctViewOfTime}
        </CheckingData>
      </RowData>
      <RowData>
        <Label> The doctor who sees you: </Label>
        <CheckingData>{doctor.name}</CheckingData>
      </RowData>
      <SymptomsContainer>
        <Label> You are complaining about: </Label>
        <CheckingData>
          {generalSymptoms.map((symptom, index) => (
            <SymptomToDisplay key={index} symptom={symptom} />
          ))}
        </CheckingData>
      </SymptomsContainer>
      <SymptomsContainer>
        <Label> More details about your complaining: </Label>
        <CheckingData>
          {symptomDetails || "You did not describe your complaints in detail"}
        </CheckingData>
      </SymptomsContainer>
    </Wrapper>
  );
};

export default Checking;
