import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 30vw;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 0 15px #fff;
  border: 1px solid #bfbfbf;
`;

export const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DontHaveAccount = styled.p`
  color: #9fa2b4;
  font-size: 16px;
`;

export const CustomizeLink = styled(Link)`
  color: #1faa00;
  font-weight: bold;
  transition: 0.2s all ease;

  &:hover {
    color: #64dd17;
  }
`;
