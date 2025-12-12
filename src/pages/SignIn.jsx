import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SignIn({ setUserName }) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");   // now empty by default
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      // Extract name from email before @
      const namePart = email.split("@")[0]; 
      // Capitalize first letter of each word
      const formattedName = namePart
        .split(/[._]/) // split by dot or underscore
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      
      setUserName(formattedName); // set name in parent/App
      navigate("/dashboard");
    } else {
      setError("Please enter email and password");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card shadow-lg">

        <div className="theme-icon">🌙</div>
        <img src="/logo512.png" className="signin-logo" alt="logo" />
        <h2 className="signin-title">TeamHub</h2>
        <p className="signin-subtitle">Where your workday begins & ends</p>

        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control signin-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="form-label mt-3">Password</label>
        <div className="password-wrapper">
          <input
            type={show ? "text" : "password"}
            className="form-control signin-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye-icon" onClick={() => setShow(!show)}>
            {show ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {error && <p className="text-danger mt-2">{error}</p>}

        <button
          className="btn btn-primary signin-btn mt-4"
          onClick={handleLogin}
        >
          <i className="fa fa-arrow-right me-2"></i> Sign In
        </button>

        <p className="forgot-link">Forgot Password?</p>
      </div>
    </div>
  );
}
