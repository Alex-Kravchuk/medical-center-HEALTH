import styled from "styled-components";
import { Link } from "react-router-dom";
import { deviceMinWidth, deviceMaxWidth } from "./mediaQueries";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 30vw;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px #fff;
  border: 1px solid #bfbfbf;

  @media ${deviceMaxWidth.desktopL} {
    width: 40vw;
  }

  @media ${deviceMaxWidth.laptopL} {
    width: 50vw;
  }

  @media ${deviceMaxWidth.tablet} {
    width: 80vw;
  }

  @media ${deviceMaxWidth.mobileL} {
    width: 100vw;
  }
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  // @media (max-width: 544px) and ${deviceMinWidth.mobileM} {
  //   width: 90%;
  // }

  // @media ${deviceMaxWidth.mobileM} {
  //   width: 90%;
  // }
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
