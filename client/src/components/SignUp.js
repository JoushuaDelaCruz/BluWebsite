import React, { useState, useEffect } from "react";

const SignUp = ({ onAdd }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const invalidInput = (idTag) => {
    document.getElementById(idTag).classList.remove("border-white");
    document.querySelector(`#${idTag}`).classList.add("invalid-input");
  };
  const addUser = (e) => {
    e.preventDefault();
    let missingInput = false;

    if (email === "") {
      invalidInput("email");
      missingInput = true;
    }
    if (username === "") {
      invalidInput("username");
      missingInput = true;
    }
    if (password === "") {
      invalidInput("password");
      missingInput = true;
    }
    if (confirmPassword === "") {
      invalidInput("confirmPassword");
      missingInput = true;
    }

    if (missingInput) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    onAdd({ email: email, username: username, password: password });
    setEmail("");
    setPassword("");
    setUsername("");
    setConfirmPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        className="flex flex-col justify-center items-center bg-slate-50 py-8 px-4 rounded-lg text-center min-w-3/4 md:min-w-1/4 shadow-lg"
        onSubmit={addUser}
      >
        <h1 className="text-4xl font-bold mb-6">Sign Up</h1>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full outline-none py-2.5 px-6 mb-3 border-solid border-1 border-white rounded-full bg-gray-200 focus:border-blue-500"
          id="email"
        />
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border w-full outline-none py-2.5 px-6 mb-3 border-solid border-1 border-white rounded-full bg-gray-200 focus:border-blue-500"
          id="username"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full outline-none py-2.5 px-6 mb-3 border-solid border-1 border-white rounded-full bg-gray-200 border focus:border-blue-500"
          id="password"
        />
        <input
          type="password"
          placeholder="Re-Enter Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full outline-none py-2.5 px-6 mb-3 border-solid border-1 border-white rounded-full bg-gray-200 border focus:border-blue-500"
          id="confirmPassword"
        />
        <input
          className="text-lg mt-5 mb-2 rounded-full py-2 px-0 border-none outline-none w-1/2 cursor-pointer bg-blue-700 text-white hover:bg-cyan-600 transition duration-500 ease-out"
          type="submit"
          value="Sign Up"
        />
        <div>
          <p>
            Already have an account? <span> Add Login button here! </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
