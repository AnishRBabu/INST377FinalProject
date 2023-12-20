import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import JobListings from "./components/JobListings";
import AboutUs from "./components/AboutUs"; // This is your new component
import Help from "./components/Help";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<JobListings />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/quiz" element={<Quiz/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
