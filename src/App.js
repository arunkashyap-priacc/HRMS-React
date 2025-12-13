import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Performance from "./pages/Performance";
import Wallet from "./pages/Wallet";
import Payslips from "./pages/Payslips";
import Leave from "./pages/Leave";
import Holidays from "./pages/Holidays";
import Clock from "./pages/Clock";
import SignIn from "./pages/SignIn";

function LayoutWrapper() {
  const [userName, setUserName] = useState("");

  const location = useLocation();

  // ------------------------------
  // Set sidebar initial state based on screen width
  // ------------------------------
 const isMobile = window.innerWidth <= 768;
const [toggle, setToggle] = useState(!isMobile); // desktop open, mobile closed


  useEffect(() => {
    // Hide header/sidebar for signin and root path
    if (location.pathname === "/signin" || location.pathname === "/") {
      document.body.classList.add("signin-active");
    } else {
      document.body.classList.remove("signin-active");
    }
  }, [location.pathname]);

  // Update sidebar on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setToggle(false); // mobile → close
      } else {
        setToggle(true);  // desktop → open
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hideLayout = location.pathname === "/signin" || location.pathname === "/";

  return (
    <div className="d-flex">
      {!hideLayout && <Sidebar toggle={toggle} setToggle={setToggle} />}

      <div
        className={`main-content ${
          hideLayout ? "" : toggle ? "expanded" : "collapsed"
        }`}
      >
        {!hideLayout && <Header userName={userName} />}

        <Routes>
          <Route path="/" element={<SignIn setUserName={setUserName} />} />
          <Route path="/signin" element={<SignIn setUserName={setUserName} />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}
