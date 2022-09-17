import { Card, Image } from "antd";
import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomDoctorCard = styled(Card)`
  width: 35vw;
`;

export const DoctorImg = styled(Image)`
  height: 70vh;
`;

export const SelectDoctorButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
