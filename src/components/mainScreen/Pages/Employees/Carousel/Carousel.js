import React from "react";

import Doctor from "../Doctor/Doctor";
import CarouselArrow from "./CarouselArrow";
import ThereAreNoDoctors from "./ThereAreNoDoctors";

import { CarouselWrapper } from "./Carousel.styled";
import { CustomCarousel } from "../Employees.styled";

const Carousel = ({
  carouselRef,
  doctors,
  handleLeftClick,
  handleRightClick,
  linksAreDisabled,
  canBeChosen,
}) => {
  const thereAreNoDoctors = Object.keys(doctors).length === 0;
  const keys = Object.keys(doctors);
  return (
    <>
      {thereAreNoDoctors ? (
        <ThereAreNoDoctors />
      ) : (
        <CarouselWrapper>
          <CustomCarousel dots={false} ref={carouselRef}>
            {keys.map((key) => {
              const doctorData = doctors[key];
              return (
                <Doctor
                  doctorData={doctorData}
                  key={key}
                  uid={key}
                  linksAreDisabled={linksAreDisabled}
                  canBeChosen={canBeChosen}
                />
              );
            })}
          </CustomCarousel>
          <CarouselArrow position="left" changeFunction={handleLeftClick} />
          <CarouselArrow position="right" changeFunction={handleRightClick} />
        </CarouselWrapper>
      )}
    </>
  );
};

export default Carousel;

