import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null); // Clear the logged-in user state
    navigate("/"); // Navigate to the homepage
  };

  return (
    <div>
      <h1>Welcome, {loggedInUser}</h1>
      <button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
