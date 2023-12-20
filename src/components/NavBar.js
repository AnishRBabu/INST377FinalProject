import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/help">Help</Link>
      <Link to="/quiz">Take the job quiz!</Link>
    </nav>
  );
}

export default NavBar;
