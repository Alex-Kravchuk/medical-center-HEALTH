import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { changePageName } from "../../../../redux/pageNameReducer/pageNameReducer";

import ProfileInfo from "./AboutUser/ProfileInfo";
import ProfileAvatar from "./Avatar/ProfileAvatar";
import TreatmentInfo from "./AboutUser/TreatmentInfo";

import { MainInfo, Wrapper } from "./Profile.styled";

const Profile = () => {
  const {
    avatarURL,
    uid,
    role,
    name,
    surname,
    email,
    phoneNumber,
    dateOfBirth,
    sex,
    country,
    city,
    isInTreatment,
    specialization,
  } = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    dispatch(changePageName({ pathname }));
  });

  return (
    <Wrapper>
      <MainInfo>
        <ProfileAvatar avatarURL={avatarURL} role={role} uid={uid} />
        <ProfileInfo
          name={name}
          surname={surname}
          email={email}
          phoneNumber={phoneNumber}
          dateOfBirth={dateOfBirth}
          sex={sex}
          country={country}
          city={city}
          specialization={specialization}
          role={role}
        />
      </MainInfo>
      <TreatmentInfo role={role} isInTreatment={isInTreatment ?? null} />
    </Wrapper>
  );
};

export default Profile;
