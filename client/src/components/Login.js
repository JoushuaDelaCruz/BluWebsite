import React, { useState } from "react";
import { Link } from "react-router-dom";
import withAuthentication from "./withAuthentication";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkUserLogin = async (user) => {
    await axios.post("/userLogIn", user).then((res) => {
      <Navigate to="/" />;
    });
  };

  const invalidInput = (idTag) => {
    document.getElementById(idTag).classList.remove("valid-input");
    document.querySelector(`[id="${idTag}"]`).classList.add("invalid-input");
  };

  const validInput = (idTag) => {
    document.getElementById(idTag).classList.remove("invalid-input");
    document.querySelector(`[id="${idTag}"]`).classList.add("valid-input");
  };

  const userLogin = async (e) => {
    e.preventDefault();
    let missingInputs = false;

    if (email === "") {
      missingInputs = true;
      invalidInput("email");
    } else {
      validInput("email");
    }
    if (password === "") {
      missingInputs = true;
      invalidInput("password");
    } else {
      validInput("password");
    }
    if (missingInputs) {
      return;
    }
    const success = await checkUserLogin({ email: email, password: password });
    setEmail("");
    setPassword("");

    if (success) {
      <Navigate to="/homepage" />;
    } else {
      return;
    }
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
