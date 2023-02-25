import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

const withAuthentication = (component) => {
  const AuthRoute = () => {
    const authenticated = axios.get("/authenticated");
    if (!authenticated) {
      return <component />;
    } else {
      return <Navigate to="/" />;
    }
  };
  return AuthRoute;
};

export default withAuthentication;
