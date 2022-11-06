import React from "react";

import { Card } from "antd";
import { Link } from "react-router-dom";

import photoNotFound from "../../../../../images/photo-not-found.png";

import SelectDoctorButton from "./SelectDoctorButton";
import Placeholder from "../../Profile/Avatar/Placeholder";

import { CardWrapper, CustomDoctorCard, DoctorImg } from "./Doctor.styled";
import { defineCorrectRouteName } from "../../../../../auxiliary functions/defineCorrectRouteName";

const { Meta } = Card;

const Doctor = ({ doctorData, uid, linksAreDisabled, canBeChosen }) => {
  const { name, surname, avatarURL, specialization } = doctorData;

  const routeName = defineCorrectRouteName(`${name} ${surname}`, linksAreDisabled);

  const dataForRedirect = { ...doctorData, uid };
  return (
    <CardWrapper>
      <Link to={routeName} state={dataForRedirect}>
        <CustomDoctorCard
          hoverable
          cover={
            <DoctorImg
              src={avatarURL ?? photoNotFound}
              preview={false}
              placeholder={<Placeholder />}
            />
          }
        >
          <Meta title={`${name} ${surname}`} description={specialization} />
          {canBeChosen && (
            <SelectDoctorButton uid={uid} name={name} surname={surname} />
          )}
        </CustomDoctorCard>
      </Link>
    </CardWrapper>
  );
};

export default Doctor;
