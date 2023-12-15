import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import JobListings from "./components/JobListings";
import AboutUs from "./components/AboutUs"; // This is your new component
import Help from "./components/Help";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
