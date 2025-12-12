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
  const [toggle, setToggle] = useState(true);

  // ------------------------------
  // Add/remove body class
  // ------------------------------
  useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/") {
      document.body.classList.add("signin-active");
    } else {
      document.body.classList.remove("signin-active");
    }
  }, [location.pathname]);

  // Hide header/sidebar for signin and root path
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
