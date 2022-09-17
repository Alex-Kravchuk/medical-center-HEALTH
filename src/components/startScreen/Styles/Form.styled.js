import styled, { css } from "styled-components";
import { Input, Button, Checkbox } from "antd";

export const PasswordLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;


export const CustomizeInput = styled(Input)`
  height: 50px;
  border-radius: 8px;
  // background: #f7f7fb;

  @media (max-height: 700px) {
    height: 40px;
  }
`;
// #e8f0fe #f7f7fb
export const CustomizePasswordInput = styled(Input.Password)`
  height: 50px;
  border-radius: 8px;
  // background: #f7f7fb;
  // input {
  //   background: #f7f7fb;
  // }

  @media (max-height: 700px) {
    height: 40px;
  }
`;

export const CustomizeButton = styled(Button)`
  width: 100%;
  border-radius: 8px;
  height: 50px;
  background: #1faa00;
  border: 1px solid #1faa00;

  &:hover {
    background: #64dd17;
    border: 1px solid #4dbd44;
  }
`;

export const CustomizeCheckbox = styled(Checkbox)`
  color: #9fa2b4;
  ${css`
    & .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #1faa00;
      border-color: #1faa00;
    }

    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: #1faa00;
    }

    &:hover {
      border-color: red;
    }
  `}

  & input:hover {
    border-color: #1faa00;
  }
`;

export const Label = styled.div`
  color: #a4a6b3;
  font-size: 12px;
  font-weight: ${(props) => (props.password ? "" : "bold")};
`;
