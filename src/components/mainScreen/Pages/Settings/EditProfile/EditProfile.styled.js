import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const LoadingScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(229, 224, 224, 0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 20px;
`;

export const sendingMessageConfig = (message) => ({
  content: message,
  duration: 1,
  style: {
    marginLeft: "85vw",
    marginTop: "10vh",
  },
});
