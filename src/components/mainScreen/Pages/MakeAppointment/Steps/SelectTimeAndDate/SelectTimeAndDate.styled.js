import { DatePicker, TimePicker } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SubTitle = styled.div`
  font-size: 18px;
`;

export const CustomDatePicker = styled(DatePicker)`
  width: 15vw;
  height: 7vh;
  font-size: 20px;

  input {
    font-size: 20px;
  }
`;

export const CustomTimePicker = styled(TimePicker)`
  width: 15vw;
  height: 7vh;
  font-size: 20px;

  input {
    font-size: 20px;
  }
`;
