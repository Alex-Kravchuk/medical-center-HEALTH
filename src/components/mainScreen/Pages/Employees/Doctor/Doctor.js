import React from "react";

import { Card } from "antd";
import { Link } from "react-router-dom";

import photoNotFound from "../../../../../images/photo-not-found.png";

import SelectDoctorButton from "./SelectDoctorButton";
import Placeholder from "../../Profile/Avatar/Placeholder";

import { CardWrapper, CustomDoctorCard, DoctorImg } from "./Doctor.styled";

const { Meta } = Card;

const Doctor = ({ doctorData, uid, linksAreDisabled, canBeChosen }) => {
  const { name, surname, avatarURL, specialization } = doctorData;

  const defineCorrectRouteName = () => {
    if (linksAreDisabled) return "#";
    const nameArray = name.split(" ");

    if (nameArray.length === 1) {
      return `${name}-${surname}`;
    }

    if (nameArray.length > 1) {
      const newName = nameArray.join("-");
      return `${newName}-${surname}`;
    }
  };

  const dataForRedirect = { ...doctorData, uid };
  return (
    <CardWrapper>
      <Link to={defineCorrectRouteName()} state={dataForRedirect}>
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
