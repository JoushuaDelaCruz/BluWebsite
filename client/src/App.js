import React, { useEffect, useState } from "react";
import Books from "./components/Books";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import axios from "axios";

const App = () => {
  const addUser = async (user) => {
    const res = await fetch("/userSignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  const logIn = async (user) => {
    await axios.post("/userLogIn", user).then((res) => {
      <Navigate to="/" />;
    });
  };

  const inputIsInvalid = (idTag) => {
    document.getElementById(idTag).classList.remove("valid-input");
    document.querySelector(`#${idTag}`).classList.add("invalid-input");
  };
  const inputIsValid = (idTag) => {
    document.getElementById(idTag).classList.remove("invalid-input");
    document.querySelector(`#${idTag}`).classList.add("valid-input");
  };

  return (
    <main className="bg-indigo-400 bg-opacity-25 min-h-screen font-sans">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/books" exact element={<Books />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/login" exact element={<Login logInUser={logIn} />} />
          <Route
            path="/signup"
            exact
            element={
              <SignUp
                onAdd={addUser}
                validInput={inputIsValid}
                invalidInput={inputIsInvalid}
              />
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
