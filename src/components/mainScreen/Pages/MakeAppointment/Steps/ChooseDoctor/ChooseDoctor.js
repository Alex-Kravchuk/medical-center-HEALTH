import React, { useEffect, useRef, useState } from "react";

import Carousel from "../../../Employees/Carousel/Carousel";

import { getDataFromDataBase } from "../../../../../../firebase/getDataFromDataBase";

import { Wrapper } from "./ChooseDoctor.styled";
import { Title } from "../../MakeAppointment.styled";

const ChooseDoctor = ({ lastPageHandler }) => {
  const [doctors, setDoctors] = useState({});

  const carouselRef = useRef();

  useEffect(() => {
    getDoctorsFromDB();
    lastPageHandler(false);
  }, []);

  const getDoctorsFromDB = async () => {
    const doctors = await getDataFromDataBase("users/doctors");

    if (doctors) {
      setDoctors(doctors);
    } else {
      // If there aren't any doctors we take an empty object
      setDoctors({});
    }
  };

  const handleLeftClick = () => {
    carouselRef.current.prev();
  };

  const handleRightClick = () => {
    carouselRef.current.next();
  };

  return (
    <Wrapper>
      <Title>Please select a doctor</Title>
      <Carousel
        carouselRef={carouselRef}
        doctors={doctors}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
        linksAreDisabled={true}
        canBeChosen={true}
      />
    </Wrapper>
  );
};

export default ChooseDoctor;
