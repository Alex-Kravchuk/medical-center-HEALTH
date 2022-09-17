import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LeftArrow, RightArrow } from "../../../../../fontawesome";
import { CarouselArrowContainer } from "./Carousel.styled";

const CarouselArrow = ({ position, changeFunction }) => {
  return (
    <CarouselArrowContainer position={position}>
      {position === "left" ? (
        <FontAwesomeIcon icon={LeftArrow} onClick={changeFunction} />
      ) : (
        <FontAwesomeIcon icon={RightArrow} onClick={changeFunction} />
      )}
    </CarouselArrowContainer>
  );
};

export default CarouselArrow;
