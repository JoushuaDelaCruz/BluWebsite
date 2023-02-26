import React from "react";
import { Link } from "react-router-dom";
/* This contains all elements in the header */
const Header = ({ authenticated }) => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <Link to="/" className="uppercase cursor-pointer stroke-current">
          {" "}
          Blu{" "}
        </Link>
        <Link to="/books" className="cursor-pointer">
          {" "}
          Books{" "}
        </Link>
        {authenticated ? (
          <Link to="/profile" className="cursor-pointer">
            {" "}
            Log Out{" "}
          </Link>
        ) : (
          <Link to="/login" className="cursor-pointer">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
