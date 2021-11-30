import { useSelector } from "react-redux";
import React from "react";

import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const auth = user !== null;

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
