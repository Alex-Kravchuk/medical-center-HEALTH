import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background: #b0ffee;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: ${(props) => (props.collapse ? "center" : "space-between")};
  align-items: center;
  span {
    transition: 0.5s all ease;
    font-size: 28px;
    font-weight: bold;
    color: #1faa00;
    ${(props) =>
      props.collapse &&
      css`
        opacity: 0;
        margin-left: -100px;
      `}
  }
`;

export const Icon = styled.img`
  transition: 0.5s all ease;
  width: 50px;
`;
