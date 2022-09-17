import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  width: 60%;
`;
export const AvatarBlock = styled.div`
  display: flex;
  justify-content: center;
`;
export const InfoBlock = styled.div``;
export const NameBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;
export const SpecializationBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & h2 {
    color: #bfbfbf;
    margin: 0 0 0 10px;
  }

  & svg {
    font-size: 22px;
    color: #bfbfbf;
  }
`;

export const ContactTabItem = styled.div`
  padding: 15px;
  margin-bottom: 5px;
  border-bottom: 2px solid #b0ffee;
  & svg {
    font-size: 24px;
    margin: 0 10px 0 0;
  }

  & span {
    font-size: 20px;
  }
`;

export const InfoTabItem = styled.div`
  font-size: 20px;
`;
