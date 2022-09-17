import React from "react";
import { Tabs } from "antd";

import ContactTab from "./ContactTab";
import FeedbacksTab from "./FeedbacksTab/FeedbacksTab";

import { InfoTabItem } from "../EmployeePage.styled";
import { TabsWrapper, TabTitle } from "./InfoTabs.styled";

const { TabPane } = Tabs;

const DoctorInfoTabs = ({ phone, email, currentDoctorUID, about }) => {
  return (
    <TabsWrapper>
      <Tabs defaultActiveKey="2" size="large">
        <TabPane tab={<TabTitle>Contact</TabTitle>} key="1">
          <ContactTab email={email} phone={phone} />
        </TabPane>
        <TabPane tab={<TabTitle>More about doctor</TabTitle>} key="2">
          <InfoTabItem>{about}</InfoTabItem>
        </TabPane>
        <TabPane tab={<TabTitle>Feedbacks</TabTitle>} key="3">
          <FeedbacksTab doctorUID={currentDoctorUID} />
        </TabPane>
      </Tabs>
    </TabsWrapper>
  );
};

export default DoctorInfoTabs;
