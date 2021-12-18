import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

import { changePageName } from "../../../../redux/pageNameReducer/pageNameReducer";

import ProfileInfo from "./AboutUser/ProfileInfo";
import {
  AdditionallyInfo,
  MainInfo,
  Wrapper,
  AdditionallyInfoTitle,
} from "./Profile.styled";
import ProfileAvatar from "./Avatar/ProfileAvatar";
import HistoryOfAppeals from "./HistoryOfAppeals/HistoryOfAppeals";

const Profile = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    dispatch(changePageName({ pathname }));
  });
  
  return (
    <Wrapper>
      <MainInfo>
        <ProfileAvatar />
        <ProfileInfo />
      </MainInfo>
      <AdditionallyInfo>
        <AdditionallyInfoTitle>History of appeals</AdditionallyInfoTitle>
        <HistoryOfAppeals />
      </AdditionallyInfo>
    </Wrapper>
  );
};

export default Profile;
