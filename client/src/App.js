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
import Write from "./components/Write";
import axios from "axios";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/authenticated");
      setAuthenticated(response.data);
    };
    fetchData();
  }, []);
  return (
    <main className="bg-indigo-400 bg-opacity-25 min-h-screen font-sans">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<HomePage authenticated={authenticated} />}
          />
          <Route path="/books" exact element={<Books />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/write" exact element={<Write />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
