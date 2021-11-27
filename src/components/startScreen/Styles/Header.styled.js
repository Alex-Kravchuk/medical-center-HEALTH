import styled from "styled-components";
import { deviceMaxWidth, deviceMinWidth } from "./mediaQueries";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Icon = styled.img`
  width: 15%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    padding: 0;
    margin: 0;
    font-size: 32px;
    color: #1faa00;
    font-weight: bold;
  }

  p:nth-child(1) {
    padding: 0;
    margin: 10px;
    color: #a4a6b3;
    font-size: 22px;
  }

  @media ${deviceMaxWidth.mobileM} {
    p:nth-child(1) {
      margin: 0;
      font-size: 20px;
    }

    p {
      font-size: 28px;
    }
  }

  @media (max-width: 330px) {
    p:nth-child(1) {
      font-size: 18px;
    }

    p {
      font-size: 24px;
    }
  }

  @media (min-height: 900px) {
    p:nth-child(1) {
      font-size: 28px;
    }

    p {
      font-size: 36px;
    }
  }

  @media (max-height: 900px) {
    p:nth-child(1) {
      font-size: 22px;
      margin: 0;
    }

    p {
      font-size: 30px;
    }
  }
  }

  @media (max-height: 650px) {
    p:nth-child(1) {
      font-size: 16px;
      margin: 0;
    }

    p {
      font-size: 20px;
    }
  }
  }
`;

export const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    padding: 0;
    margin: 0;
    color: #a4a6b3;
    font-size: 16px;
  }

  p:nth-child(1) {
    padding: 10px;
    margin-top: 0;
    font-size: 30px;
    color: #000;
    font-weight: bold;
  }

  @media (max-width: 544px) and ${deviceMinWidth.mobileM} {
    p:nth-child(1) {
      font-size: 26px;
    }
  }

  @media ${deviceMaxWidth.mobileM} {
    p:nth-child(1) {
      font-size: 24px;
      padding: 0;
    }
  }

  @media (max-width: 330px) {
    p {
      font-size: 14px;
    }

    p:nth-child(1) {
      padding: 0;
      font-size: 18px;
    }
  }

  @media (min-height: 900px) {
    p {
      font-size: 26px;
    }

    p:nth-child(1) {
      padding: 25px 0 0 0;
      font-size: 32px;
    }
  }

  @media (max-height: 900px) {
    p {
      font-size: 20px;
      padding: 0;
    }

    p:nth-child(1) {
      padding: 0;
      font-size: 26px;
    }
  }

  @media (max-height: 650px) {
    p {
      font-size: 14px;
      padding: 0;
    }

    p:nth-child(1) {
      padding: 0;
      font-size: 20px;
    }
  }
`;
