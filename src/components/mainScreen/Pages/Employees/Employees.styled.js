import styled from "styled-components";

import { Carousel } from "antd";

export const EmployeesWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 120px);
`;

export const CustomCarousel = styled(Carousel)`
  .slick-dots > li {
    background: green;
    opacity: 0.8;
  }

  .slick-dots li.slick-active button {
    background: #1aff00;
  }
`;

export const LoadingScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
