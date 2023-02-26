import React, { useState } from "react";
import { Link } from "react-router-dom";
import withAuthentication from "./withAuthentication";
import { Navigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const addUserToDatabase = async (user) => {
    await axios.post("/userSignUp", user).then((response) => {
      if (response) {
        <Navigate to="/login" />;
      } else {
        alert("Email is not valid");
      }
    });
    const res = await fetch("/userSignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  const addUser = async (e) => {
    e.preventDefault();
    let missingInput = false;

    const invalidInput = (idTag) => {
      document.getElementById(idTag).classList.remove("valid-input");
      document.querySelector(`[id="${idTag}"]`).classList.add("invalid-input");
    };

    const validInput = (idTag) => {
      document.getElementById(idTag).classList.remove("invalid-input");
      document.querySelector(`[id="${idTag}"]`).classList.add("valid-input");
    };

    if (email === "") {
      invalidInput("email");
      missingInput = true;
    } else {
      validInput("email");
    }
    if (username === "") {
      invalidInput("username");
      missingInput = true;
    } else {
      validInput("username");
    }
    if (password === "") {
      invalidInput("password");
      missingInput = true;
    } else {
      validInput("password");
    }
    if (confirmPassword === "") {
      invalidInput("confirmPassword");
      missingInput = true;
    } else {
      validInput("confirmPassword");
    }

    if (missingInput) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    const success = await addUserToDatabase({
      email: email,
      username: username,
      password: password,
    });
    setEmail("");
    setPassword("");
    setUsername("");
    setConfirmPassword("");
    if (success) {
      return <Navigate to="/login" />;
    } else {
      return; // Add error message here
    }
  };

  return (
    <div className="authentication-container">
      <form className="authentication-form-container" onSubmit={addUser}>
        <h1 className="authentication-header">Sign Up</h1>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="authentication-input"
          id="email"
        />
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="authentication-input"
          id="username"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="authentication-input"
          id="password"
        />
        <input
          type="password"
          placeholder="Re-Enter Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="authentication-input"
          id="confirmPassword"
        />
        <input
          className="authentication-input-submit"
          type="submit"
          value="Sign Up"
        />
        <div>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login" className="authentication-link">
                Log In
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default withAuthentication(SignUp);
