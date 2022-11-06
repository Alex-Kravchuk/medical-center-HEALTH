import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { database } from "../../../firebase";
import { onValue, ref } from "firebase/database";
import { Button, Drawer, Empty, Space, Tooltip } from "antd";

import NotificationsCount from "./NotificationsCount";
import Notification from "./Notification/Notification";

import { setDataToDataBase } from "../../../firebase/setDataToDataBase";
import { defineUserRole } from "../../../auxiliary functions/defineUserRole";

import { HeaderNotification } from "../Header/Header.styled";
import {
  DrawerTitle,
  NotificationsList,
  Wrapper,
} from "./Notifications.styled";

const Notifications = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const { role, uid } = useSelector((state) => state.auth.user);

  const userRole = defineUserRole(role);

  useEffect(() => {
    let isMounted = true;
    const dbRef = ref(database, `users/${userRole}/` + uid);

    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const { notifications } = data;
        setData(notifications);
      }
    });

    return () => (isMounted = false);
  }, []);

  const showNotifications = () => setOpen(true);
  const hideNotifications = () => setOpen(false);

  const clearNotificationsList = () => {
    setData([]);
    setDataToDataBase(`users/${userRole}/${uid}/notifications`, null);
  };

  const updateListOfNotifications = (id) => {
    const copyNotifications = data.map((item) => Object.assign({}, item));
    const notificationsWithoutDeleted = copyNotifications.filter(
      (item) => item.id !== id
    );

    const toDoCorrectIDs = notificationsWithoutDeleted.map(
      (element, index) => ({ ...element, id: index })
    );

    const pathForUpdating = `users/${userRole}/${uid}/notifications`;
    setDataToDataBase(pathForUpdating, toDoCorrectIDs);
  };

  const notificationListIsEmpty = data === undefined || data.length === 0;

  return (
    <Wrapper>
      <HeaderNotification onClick={showNotifications}>
        <Tooltip placement="left" title="Notifications">
          <NotificationsCount notifications={data} />
        </Tooltip>
      </HeaderNotification>
      <Drawer
        title={<DrawerTitle>Notifications</DrawerTitle>}
        placement="right"
        size="large"
        width={500}
        onClose={hideNotifications}
        open={open}
        extra={
          <Space>
            <Button onClick={clearNotificationsList}>
              Clear the notification list
            </Button>
          </Space>
        }
      >
        <NotificationsList>
          {notificationListIsEmpty ? (
            <Empty description="There are no notifications" />
          ) : (
            data.map((notif) => (
              <Notification
                data={notif}
                key={notif.id}
                updateListFunc={updateListOfNotifications}
                onClose={hideNotifications}
              />
            ))
          )}
        </NotificationsList>
      </Drawer>
    </Wrapper>
  );
};

export default Notifications;
