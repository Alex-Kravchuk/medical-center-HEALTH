import { Button } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DoneButton = styled(Button)`
  background: #51e01d;
  color: #fff;
  margin: 30px;

  &:hover {
    background: #83eb5e;
    color: #fff;
    border-color: green;
  }
`;

export const CustomButton = styled(Button)`
  margin: 30px;
`;
