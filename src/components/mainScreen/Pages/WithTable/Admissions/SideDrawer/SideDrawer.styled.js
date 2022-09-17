import styled from "styled-components";
import { css } from "styled-components";

import { Form } from "antd";

export const DrawerContainer = styled.div``;

export const ContentTitle = styled.div`
  font-size: 20px;
  flex: ${({ isName }) => (isName ? "0 0 auto" : "0 0 200px")};
`;
export const Content = styled.div``;

export const ContentBlock = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  margin: 25px 0;

  ${({ forName }) =>
    forName &&
    css`
      div {
        font-weight: bold;
        font-size: 24px;
        margin: 5px 10px;
      }
    `}

  ${({ forDetails }) =>
    forDetails &&
    css`
      & :nth-child(2) {
        font-style: italic;
        font-weight: bold;
        font-size: 20px;
        width: 80%;
        text-align: justify;
      }
    `}
`;

export const FormItem = styled(Form.Item)`
  label {
    font-size: 20px;
  }
`;

export const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ErrorWithDuplicate = styled.div`
  font-size: 25px;
  color: red;
  font-weight: bold;
  text-align: center;
`;
