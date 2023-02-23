import React, { useEffect } from "react";
// import Books from "./components/Books";
// import About from "./components/About";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";

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

  return (
    <main className="bg-indigo-400 bg-opacity-25 min-h-screen font-sans">
      <SignUp onAdd={addUser} />
      {/* <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/books" exact element={<Books />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router> */}
    </main>
  );
};

export default App;
