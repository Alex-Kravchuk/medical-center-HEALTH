import moment from "moment";
import { getDataFromDataBase } from "../firebase/getDataFromDataBase";
import { setDataToDataBase } from "../firebase/setDataToDataBase";
import { defineUserRole } from "./defineUserRole";

export const createAndSendingNotification = async (userID, data) => {
  if (data === null) return;

  const { type, contentData, category } = data;

  const userRole = defineUserRole(category);

  const path = `users/${userRole}/${userID}/notifications`;

  const notificationsFromDB = await getDataFromDataBase(path);

  const numberOfNotifications =
    notificationsFromDB !== undefined ? notificationsFromDB.length : "0";

  const notification = {
    id: numberOfNotifications,
    type,
    category,
    notificationTime: moment().format("hh:mm a"),
    notificationDate: moment().format("YYYY-MM-DD"),
    contentData,
  };

  const pathForSending = path + `/${numberOfNotifications}`;

  setDataToDataBase(pathForSending, notification);
};
