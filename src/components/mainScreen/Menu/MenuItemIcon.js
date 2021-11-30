import React from "react";

const MenuItemIcon = ({ data }) => {
  return (
    <span style={{ padding: "0 20px 0 0", marginLeft: '-10px' }}>
      <img style={{ width: "40px" }} src={data} alt="something" />
    </span>
  );
};

export default MenuItemIcon;
