import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuItemWrapper = styled.div``;

const MenuItem = ({ name, path }) => {
  return (
    <MenuItemWrapper>
      <Link to={path}>{name}</Link>
    </MenuItemWrapper>
  );
};

export default MenuItem;
