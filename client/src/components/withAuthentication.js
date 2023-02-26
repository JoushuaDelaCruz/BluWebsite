import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "./Header";

const withAuthentication = (Component) => {
  const AuthRoute = () => {
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
      axios
        .get("/authenticated")
        .then((response) => setAuthenticated(response.data))
        .catch(() => setAuthenticated(false));
    });
    if (authenticated) {
      return <Navigate to="/" />;
    } else {
      return (
        <>
          <Header />
          <Component />
        </>
      );
    }
  };
  return AuthRoute;
};

export default withAuthentication;
