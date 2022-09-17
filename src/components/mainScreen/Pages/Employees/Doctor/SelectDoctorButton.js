import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

import { chooseDoctor } from "../../../../../redux/makeAppointmentReducer/makeAppointmentReducer";

import { SelectDoctorButtonContainer } from "./Doctor.styled";

const SelectDoctorButton = ({ uid, name, surname }) => {
  const [isSelected, setIsSelected] = useState();
  const { doctor } = useSelector((state) => state.makeAppointment);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsSelected(() => doctor.uid === uid);
  }, [doctor, uid]);

  const selectDoctor = () => {
    const doctor = { uid, name: `${name} ${surname}` };

    if (!isSelected) {
      dispatch(chooseDoctor(doctor));
    } else {
      dispatch(chooseDoctor({ name: "", uid: "" }));
    }
    setIsSelected((state) => !state);
  };

  const selectedButton = isSelected ? (
    <span>
      Selected <CheckOutlined />
    </span>
  ) : (
    <span>Select</span>
  );

  return (
    <SelectDoctorButtonContainer>
      <Button type="primary" onClick={selectDoctor}>
        {selectedButton}
      </Button>
    </SelectDoctorButtonContainer>
  );
};

export default SelectDoctorButton;
