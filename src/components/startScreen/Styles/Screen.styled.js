import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { deviceMaxWidth, deviceMinWidth } from "./mediaQueries";

import { LoadingOutlined } from "@ant-design/icons";

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

  @media (min-height: 600px) {
    height: ${(props) => (props.signUp ? "" : "100vh")};
  }

  @media ${deviceMinWidth.tablet} {
    margin: 20px 0;
  }

  @media ${deviceMinWidth.tablet} {
    ${(props) =>
      !props.signUp &&
      css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: auto;
      `}
  }
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  opacity: ${(props) => (props.loading === "true" ? "0.3" : "1")};
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

export const LoadingScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  opacity: ${(props) => (props.loading === "true" ? "0.3" : "1")};
`;

export const LoadingIcon = styled(LoadingOutlined)`
  font-size: 48px;
  color: green;
`;

