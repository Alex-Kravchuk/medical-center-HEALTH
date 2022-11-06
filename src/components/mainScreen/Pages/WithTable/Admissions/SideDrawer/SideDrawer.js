import React from "react";

import { Image, Drawer } from "antd";

import HospitalizeForm from "./HospitalizeForm";
import SymptomTag from "../../Symptoms/SymptomTag";
import Placeholder from "../../../Profile/Avatar/Placeholder";

import {
  ContentBlock,
  ContentTitle,
  Content,
  DrawerContainer,
} from "./SideDrawer.styled";

const SideDrawer = ({ onClose, visible, admission }) => {
  const { avatarURL, name, surname, symptomDetails, healthComplaints } =
    admission;
  console.log("avatar", admission);

  const thereAreSymptoms = healthComplaints !== undefined;
  const thereAreDetails = symptomDetails
    ? symptomDetails
    : "The client did not describe his symptoms";

  return (
    <Drawer
      onClose={onClose}
      open={visible}
      placement="right"
      size="large"
      title="Details of visit"
    >
      <DrawerContainer>
        <ContentBlock justify="center">
          <Image
            src={avatarURL}
            width={300}
            preview={false}
            placeholder={<Placeholder />}
          />
        </ContentBlock>
        <ContentBlock justify="center" forName="true">
          <ContentTitle isName="true">{name}</ContentTitle>
          <Content>{surname}</Content>
        </ContentBlock>
        <ContentBlock justify="space-between">
          <ContentTitle>Health complaints:</ContentTitle>
          <Content>
            {thereAreSymptoms &&
              healthComplaints.map((symptom) => (
                <SymptomTag symptom={symptom} key={symptom.name} />
              ))}
          </Content>
        </ContentBlock>
        <ContentBlock justify="space-between" forDetails="true">
          <ContentTitle>Details:</ContentTitle>
          <Content>{thereAreDetails}</Content>
        </ContentBlock>
        <HospitalizeForm admission={admission} onClose={onClose} />
      </DrawerContainer>
    </Drawer>
  );
};

export default SideDrawer;
