import React from "react";

import BlockOfDate from "./BlockOfData";

import { DataContainer, DataRow } from "./AboutUser.styled";

const ProfileInfo = ({
  name,
  surname,
  email,
  phoneNumber,
  dateOfBirth,
  sex,
  country,
  city,
  role,
  specialization,
}) => {
  return (
    <DataContainer>
      <DataRow>
        <BlockOfDate value={name} label="Name" />
        <BlockOfDate value={surname} label="Surname" />
      </DataRow>
      <DataRow>
        <BlockOfDate value={email} label="Email" />
        <BlockOfDate value={phoneNumber} label="Phone number" />
      </DataRow>
      <DataRow>
        <BlockOfDate value={dateOfBirth} label="Date of birth" />
        <BlockOfDate value={sex} label="Sex" />
      </DataRow>
      <DataRow>
        <BlockOfDate value={country} label="Country" />
        <BlockOfDate value={city} label="City" />
      </DataRow>

      {role === "doctor" && (
        <DataRow>
          <BlockOfDate value={specialization} label="Specialization" />
        </DataRow>
      )}
    </DataContainer>
  );
};

export default ProfileInfo;
