import React from "react";

import {
  DataContainer,
  DataRow,
  DataItem,
  Label,
  Data,
} from "./Profile.styled";

const ProfileInfo = () => {
  const userRole = "client";
  return (
    <DataContainer>
      <DataRow>
        <DataItem>
          <Label>Name:</Label>
          <Data>Alex</Data>
        </DataItem>
        <DataItem>
          <Label>Surname:</Label>
          <Data>Kravchuk</Data>
        </DataItem>
      </DataRow>
      <DataRow>
        <DataItem>
          <Label>Email:</Label>
          <Data>sodasaod450@gmail.com</Data>
        </DataItem>
        <DataItem>
          <Label>Phone number:</Label>
          <Data>+380987465380</Data>
        </DataItem>
      </DataRow>
      <DataRow>
        <DataItem>
          <Label>Date of birth:</Label>
          <Data>1997-10-11</Data>
        </DataItem>
        <DataItem>
          <Label>Sex:</Label>
          <Data>male</Data>
        </DataItem>
      </DataRow>
      <DataRow>
        <DataItem>
          <Label>Country:</Label>
          <Data>Ukraine</Data>
        </DataItem>
        <DataItem>
          <Label>City:</Label>
          <Data>Lviv</Data>
        </DataItem>
      </DataRow>
      {userRole === "client" && (
        <DataRow>
          <DataItem>
            <Label>Therapist:</Label>
            <Data></Data>
          </DataItem>
          <DataItem>
            <Label></Label>
            <Data>
              <a>Elena Gonsalez</a>
            </Data>
          </DataItem>
        </DataRow>
      )}
    </DataContainer>
  );
};

export default ProfileInfo;
