import styled from "styled-components";

import { Image, Upload } from "antd";

export const CustomeImage = styled(Image)`
  width: 300px;
  height: 400px;
  border-radius: 16px;
  padding: ${(props) => {
    return props.notfound === "true" ? "100px 50px" : "";
  }};
`;

export const PlaceholderWrapper = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CustomizeUpload = styled(Upload)`
  width: 100%;

  button {
    width: 100%;
  }
`;

export const AvatarInfoBlock = styled.div`
  text-align: center;
`;
