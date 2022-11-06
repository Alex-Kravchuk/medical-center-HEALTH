import React from "react";
import { Tabs } from "antd";

import ContactTab from "./ContactTab";
import FeedbacksTab from "./FeedbacksTab/FeedbacksTab";

import { InfoTabItem } from "../EmployeePage.styled";
import { TabsWrapper, TabTitle } from "./InfoTabs.styled";

const DoctorInfoTabs = ({
  phone,
  email,
  currentDoctorUID,
  about,
  fromNotifications,
}) => {
  const tabItems = [
    {
      label: <TabTitle>Contact</TabTitle>,
      key: "1",
      children: <ContactTab email={email} phone={phone} />,
    },
    {
      label: <TabTitle>More about doctor</TabTitle>,
      key: "2",
      children: <InfoTabItem>{about}</InfoTabItem>,
    },
    {
      label: <TabTitle>Feedbacks</TabTitle>,
      key: "3",
      children: <FeedbacksTab doctorUID={currentDoctorUID} />,
    },
  ];
  return (
    <TabsWrapper>
      <Tabs
        defaultActiveKey={fromNotifications ? "3" : "2"}
        size="large"
        items={tabItems}
      />
    </TabsWrapper>
  );
};

export default DoctorInfoTabs;
