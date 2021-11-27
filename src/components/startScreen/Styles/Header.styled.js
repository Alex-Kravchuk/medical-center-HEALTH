import styled from "styled-components";

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
  }

  p:nth-child(1) {
    padding: 0;
    margin: 10px;
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
  }

  p:nth-child(1) {
    padding: 10px;
    margin-top: 0;
  }
`;
