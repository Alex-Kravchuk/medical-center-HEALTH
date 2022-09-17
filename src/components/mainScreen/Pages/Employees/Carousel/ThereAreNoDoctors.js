import React from "react";
import { CarouselWrapper, WarningMessage } from "./Carousel.styled";

const ThereAreNoDoctors = () => {
  return (
    <CarouselWrapper>
      <WarningMessage>
        Sorry, but there are no doctors in our clinic right now
      </WarningMessage>
    </CarouselWrapper>
  );
};

export default ThereAreNoDoctors;
