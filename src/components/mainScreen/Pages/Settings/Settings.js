import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

import { changePageName } from "../../../../redux/pageNameReducer/pageNameReducer";

const Settings = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    dispatch(changePageName({ pathname }));
  });
  
  return <div>Settings</div>;
};

export default Settings;
