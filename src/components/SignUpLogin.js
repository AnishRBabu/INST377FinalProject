import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";
import "./SignUpLogin.css";

const SignUpLogin = ({ setLoggedInUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    // Check if the username already exists
    const { data: existingUsers, error: existingUsersError } = await supabase
      .from("User")
      .select("username")
      .eq("username", username);

    if (existingUsersError) {
      console.error("Error checking for existing user", existingUsersError);
      return;
    }

    if (existingUsers.length > 0) {
      alert("User already exists");
      return;
    }

    // If the username doesn't exist, proceed with the insert
    const { error } = await supabase.from("User").insert([
      {
        first_name: firstName,
        last_name: lastName,
        username: username,
        password: password, // Reminder: in a real app, hash the password before storing it
      },
    ]);

    if (error) {
      console.error("Signup error", error);
    } else {
      setLoggedInUser(firstName); // Update the logged-in user's first name
      navigate("/"); // Redirect to the homepage
    }
  };

  const handleLogin = async () => {
    const { data, error } = await supabase
      .from("User")
      .select()
      .eq("username", username)
      .eq("password", password); // Note: Password should be hashed and compared securely

    if (error) {
      console.error("Login error", error);
      alert("Wrong username/password");
    } else if (data && data.length > 0) {
      setLoggedInUser(data[0].first_name); // Assuming first_name is the column in your User table
      navigate("/");
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="signup-login-container">
      <div className="tab-container">
        <button
          className={`tab ${!isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
        <button
          className={`tab ${isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          Log In
        </button>
      </div>

      <div className="form-container">
        {isLogin ? (
          // Login form
          <div>
            <h2>Log In</h2>
            <input
              className="input-field"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit-button" onClick={handleLogin}>
              Log In
            </button>
          </div>
        ) : (
          // Sign up form
          <div>
            <h2>Sign Up for Free</h2>
            <input
              className="input-field"
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit-button" onClick={handleSignUp}>
              Get Started
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpLogin;
