import { Button } from "antd";
import styled from "styled-components";

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
`;
export const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
`;

export const DataItem = styled.div`
  border-bottom: 4px solid #dedede;
  border-radius: 5px;
  width: 100%;
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
`;
export const Label = styled.div`
  font-size: 20px;
`;
export const Data = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const ChangeButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ChangeButtonsSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
`;

export const CustomButton = styled(Button)`
  background: ${({ saving }) => saving && "#6cff5c"};
  color: ${({ saving }) => saving && "#000"};
`;
