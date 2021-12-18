import React, { useState } from "react";

import { useSelector } from "react-redux";

import { DataContainer, DataRow } from "./AboutUser.styled";

import BlockOfDate from "./BlockOfData";

const ProfileInfo = () => {
  const {
    name,
    surname,
    email,
    phoneNumber,
    dateOfBirth,
    sex,
    country,
    city,
    therapist,
    role,
  } = useSelector((state) => state.auth.user);

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
      {role === "client" && (
        <DataRow>
          <BlockOfDate value={<a>{therapist}</a>} label="Therapist" />
        </DataRow>
      )}
    </DataContainer>
  );
};

export default ProfileInfo;
