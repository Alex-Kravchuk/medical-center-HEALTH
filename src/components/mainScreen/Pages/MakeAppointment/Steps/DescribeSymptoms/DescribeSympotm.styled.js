import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

export const SubTitle = styled.div`
  margin: 50px 0 25px 0;
  text-align: center;
  font-size: 22px;
`;

export const SymptomWrapper = styled.div`
  display: inline-block;
  padding: 5px;
  margin: 10px 10px;
  font-size: 18px;
  transition: 0.2s all ease;

  ${({ onlyRead }) =>
    !onlyRead &&
    css`
      cursor: pointer;
      &:hover {
        color: rgb(0, 204, 255);
        border: 1px solid rgb(0, 204, 255);
        background: rgba(0, 204, 255, 0.15);
      }

      &:active {
        position: relative;
        left: 0;
        top: 1px;
      }
    `}

  ${({ type }) => {
    switch (type) {
      case "common":
        return css`
          border: 1px solid #ffe58f;
          color: #d48806;
          background: #fffbe6;
        `;
      case "dangerous":
        return css`
          border: 1px solid #ffbb96;
          color: #d4380d;
          background: #fff2e8;
        `;
      case "critical":
        return css`
          border: 1px solid #ffadd2;
          color: #c41d7f;
          background: #fff0f6;
        `;
      default:
        return "inherit";
    }
  }};

  ${({ selected }) =>
    selected &&
    css`
      color: rgb(0, 204, 255);
      border: 1px solid rgb(0, 204, 255);
      background: rgba(0, 204, 255, 0.15);
    `}
`;
