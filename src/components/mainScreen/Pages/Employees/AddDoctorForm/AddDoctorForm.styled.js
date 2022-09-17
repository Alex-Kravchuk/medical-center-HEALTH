import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 1vw;
`;

export const Container = styled.div`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px 15px #f0f2f5;

  svg {
    transition: 0.2s all ease;
  }

  &:hover {
    svg {
      color: #29bbff;
    }
  }
`;

export const IconContainer = styled.div``;
