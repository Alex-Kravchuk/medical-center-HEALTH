import React from "react";
import { templates } from "../../../../additionalData/feedbacksTemplates";

import { NotificationContentWrap } from "../Notifications.styled";

const NotificationContent = ({ data, type, category }) => {
  const notificationTypes = templates[category];

  const currentTemplate = notificationTypes.types.find(
    (item) => item.name === type
  );
  const dataForDisplay = currentTemplate.content(data);

  return <NotificationContentWrap>{dataForDisplay}</NotificationContentWrap>;
};

export default NotificationContent;
