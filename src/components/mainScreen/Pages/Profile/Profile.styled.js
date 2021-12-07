import { Upload } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MainInfo = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 40px;
`;
export const AdditionallyInfo = styled.div``;
export const AdditionallyInfoTitle = styled.h2`
  text-align: center;
`;

export const Img = styled.img`
  width: 500px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const DataContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DataItem = styled.div`
  border-bottom: 4px solid #dedede;
  border-radius: 5px;
  width: 50%;
//   padding: 20px 20px 0 20px;
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

export const CustomizeUpload = styled(Upload)`
  width: 100%;

  button {
    width: 100%;
  }
`;
