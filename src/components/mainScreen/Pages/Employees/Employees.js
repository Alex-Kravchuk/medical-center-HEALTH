import React, { useEffect, useRef, useState } from "react";

import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { Spin } from "antd";

import { changePageName } from "../../../../redux/pageNameReducer/pageNameReducer";
import { getDataFromDataBase } from "../../../../firebase/getDataFromDataBase";

import Carousel from "./Carousel/Carousel";
import AddDoctor from "./AddDoctorForm/AddDoctor";
import { EmployeesWrapper, LoadingScreen } from "./Employees.styled";

const Employees = () => {
  const [doctors, setDoctors] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const carouselRef = useRef();

  const { role } = useSelector((state) => state.auth.user);

  useEffect(() => {
    getDoctorsFromDB();
    const { pathname } = location;
    dispatch(changePageName({ pathname }));
  }, []);

  const getDoctorsFromDB = async () => {
    setLoading(true);
    const doctors = await getDataFromDataBase("users/doctors");

    if (doctors) {
      setDoctors(doctors);
      setLoading(false);
    } else {
      // If there aren't any doctors we take an empty object
      setDoctors({});
      setLoading(false);
    }
  };

  const handleLeftClick = () => {
    carouselRef.current.prev();
  };

  const handleRightClick = () => {
    carouselRef.current.next();
  };

  return (
    <EmployeesWrapper>
      {loading ? (
        <LoadingScreen>
          <Spin size="large" tip="Loading..." />
        </LoadingScreen>
      ) : (
        <>
          <Carousel
            carouselRef={carouselRef}
            doctors={doctors}
            handleLeftClick={handleLeftClick}
            handleRightClick={handleRightClick}
          />

          {role === "admin" && <AddDoctor />}
        </>
      )}
    </EmployeesWrapper>
  );
};

export default Employees;
