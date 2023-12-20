import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import JobListings from "./components/JobListings";
import AboutUs from "./components/AboutUs"; // This is your new component
import Help from "./components/Help";
import "./App.css";
import SignUpLogin from "./components/SignUpLogin";
import UserProfile from "./components/UserProfile";
import Quiz from "./components/Quiz";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <NavBar loggedInUser={loggedInUser} />
        <Routes>
          <Route path="/" element={<JobListings />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/help" element={<Help />} />
          <Route
            path="/signup-login"
            element={<SignUpLogin setLoggedInUser={setLoggedInUser} />}
          />
          <Route
            path="/user-profile"
            element={
              <UserProfile
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
              />
            }
          />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
