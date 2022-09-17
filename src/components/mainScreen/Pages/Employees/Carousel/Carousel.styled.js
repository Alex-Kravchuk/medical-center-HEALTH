import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const WarningMessage = styled.div`
  font-size: 28px;
`;

export const CarouselArrowContainer = styled.div`
  cursor: pointer;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.position === "left" ? "10%" : "90%")};
  transform: translate(-50%, -50%);

  svg {
    font-size: 28px;
    transition: 0.2s all ease;
  }

  svg:hover {
    font-size: 32px;
  }

  svg:active {
    color: green;
  }
`;
