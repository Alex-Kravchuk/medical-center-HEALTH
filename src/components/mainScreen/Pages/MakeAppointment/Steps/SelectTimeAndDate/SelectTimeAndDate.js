import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import moment from "moment";

import {
  Wrapper,
  Container,
  CustomDatePicker,
  CustomTimePicker,
} from "./SelectTimeAndDate.styled";
import { Title } from "../../MakeAppointment.styled";
import { SubTitle } from "../DescribeSymptoms/DescribeSympotm.styled";

const SelectTimeAndDate = ({ handler, lastPageHandler }) => {
  const { time, date } = useSelector((state) => state.makeAppointment);

  const defaultDateValue = date ? moment(date) : "";
  const defaultTimeValue = time ? moment(time) : "";

  useEffect(() => {
    lastPageHandler(false);
  }, []);

  const onDateChange = (_, dateString) => {
    // the first arguments is moment object
    handler((state) => ({ ...state, date: dateString }));
  };
  const onTimeChange = (time) => {
    const correctTime = moment(time).valueOf();
    handler((state) => ({ ...state, time: correctTime }));
  };

  return (
    <Wrapper>
      <Title>Please selecet a date and time of addmission</Title>
      <Container>
        <SubTitle>Date:</SubTitle>
        <CustomDatePicker
          onChange={onDateChange}
          defaultValue={defaultDateValue}
        />
      </Container>

      <Container>
        <SubTitle>Time:</SubTitle>
        <CustomTimePicker
          format="hh:mm a"
          onChange={onTimeChange}
          defaultValue={defaultTimeValue}
        />
      </Container>
    </Wrapper>
  );
};

export default SelectTimeAndDate;
