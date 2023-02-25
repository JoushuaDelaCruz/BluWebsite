import React, { useState } from "react";
import { Link } from "react-router-dom";
import withAuthentication from "./withAuthentication";

const Login = ({ logInUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return;
    }
    logInUser({ email: email, password: password });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="authentication-container">
      <form className="authentication-form-container" onSubmit={userLogin}>
        <h1 className="authentication-header">Login</h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="authentication-input"
          id="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
          className="authentication-input"
          id="password"
        />
        <input
          type="submit"
          value="Log In"
          className="authentication-input-submit"
        />
        <p>
          Don't have an account yet?{" "}
          <span>
            <Link to="/signUp" className="authentication-link">
              Sign Up
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default withAuthentication(Login);
