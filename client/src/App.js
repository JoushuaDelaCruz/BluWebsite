import React, { useEffect } from "react";
import Books from "./components/Books";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {
  function handleCallbackResponse(response) {
    console.log(response.credential);
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "616141306078-pl6mggut4lul7liot0ql6jjomof1k8kk.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outlie",
      size: "large",
    });
  }, []);

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
