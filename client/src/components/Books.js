import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { TfiWrite } from "react-icons/tfi";
import { Link, Navigate } from "react-router-dom";

const Books = () => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const getStatus = async () => {
      const res = await axios.get("/admin");
      setIsAdmin(res.data);
    };
    getStatus();
  }, []);

  return (
    <div>
      {" "}
      <Header />
      <div>
        <div>
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/wallpaper.jpg"}
            className="w-screen h-52 md:h-72"
          />{" "}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-10 px-8">
        {isAdmin ? (
          <Link
            to="/write"
            className="flex flex-col justify-center items-center gap-3 bg-slate-400 opacity-70 w-5/6 py-6 rounded-lg shadow-md"
          >
            <TfiWrite className="" size="2rem" />
            Write a Book{" "}
          </Link>
        ) : (
          <div className="invisible"> </div>
        )}
      </div>
    </div>
  );
};

export default Books;
