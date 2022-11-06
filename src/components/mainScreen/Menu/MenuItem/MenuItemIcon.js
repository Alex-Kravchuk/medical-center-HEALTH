import React from "react";
import styled from "styled-components";

const IconWrapper = styled.span`
  padding: 0 20px 0 0;
  margin-left: -10px;
`;

const Img = styled.img`
  width: 40px;
`;

const MenuItemIcon = ({ data }) => {
  return (
    <IconWrapper>
      <Img  src={data} alt="icon" />
    </IconWrapper>
  );
};

export default MenuItemIcon;
