import React from "react";

import { Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";

import { CustomAvatar } from "../Header/Header.styled";

const NotificationsCount = ({ notifications }) => {
  const thereAreNoNotifications =
    notifications === undefined || notifications.length === 0;

  const countNotifications = thereAreNoNotifications ? 0 : notifications.length;

  return (
    <Badge count={countNotifications}>
      <CustomAvatar icon={<BellOutlined />} />
    </Badge>
  );
};

export default NotificationsCount;
