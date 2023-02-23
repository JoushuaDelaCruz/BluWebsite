import React, { useEffect } from "react";
import Books from "./components/Books";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <>
      <div id="signInDiv"></div>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/books" exact element={<Books />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
