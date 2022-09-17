import React from "react";

import { Button } from "antd";
import { Link } from "react-router-dom";

import { ButtonContainer } from "./Appointments.styled";

const MakeAppointmentsButton = () => {
  return (
    <ButtonContainer>
      <Link to="make-appointment">
        <Button size="large" type="primary">Make a new appointment</Button>
      </Link>
    </ButtonContainer>
  );
};

export default MakeAppointmentsButton;
