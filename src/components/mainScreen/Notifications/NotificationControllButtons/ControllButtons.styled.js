import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  visibility: ${({ isVisble }) => (isVisble === "true" ? "visible" : "hidden")};

  svg {
    font-size: 20px;
    color: rgb(24, 49, 83);
    margin: 10px 5px 10px 0;
    cursor: pointer;
  }

  svg:hover {
    color: #3269a8;
     transition: 0.3s all ease;
  }
`;

export const HideIconContainer = styled.div``;
export const RedicrectIconContainer = styled.div``;
