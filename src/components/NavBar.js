import React from "react";
import { Link } from "react-router-dom";

function NavBar({ loggedInUser }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/help">Help</Link>
      <Link to="/quiz">Take the job quiz!</Link>
      {loggedInUser ? (
        <Link to="/user-profile">{loggedInUser}</Link>
      ) : (
        <Link to="/signup-login">Signup/Login</Link>
      )}
    </nav>
  );
}

export default NavBar;
