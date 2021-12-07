import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

import { changePageName } from "../../../../redux/pageNameReducer/pageNameReducer";

const Patients = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;
    dispatch(changePageName({ pathname }));
  });
  return <div>Patients</div>;
};

export default Patients;
