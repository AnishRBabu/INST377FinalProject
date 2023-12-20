import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/help">Help</Link>
      <Link to="/quiz">Quiz</Link>
    </nav>
  );
}

export default NavBar;
