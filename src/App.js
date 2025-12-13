import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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

import ThemeProvider from "./context/ThemeProvider";

/* ------------------------------------
   Layout Wrapper (INSIDE Router)
------------------------------------ */
function LayoutWrapper() {
  const location = useLocation();
  const [userName, setUserName] = useState("");

  const isMobile = window.innerWidth <= 768;
  const [toggle, setToggle] = useState(!isMobile);

  const hideLayout =
    location.pathname === "/" || location.pathname === "/signin";

  /* Hide sidebar/header on signin */
  useEffect(() => {
    if (hideLayout) {
      document.body.classList.add("signin-active");
    } else {
      document.body.classList.remove("signin-active");
    }
  }, [hideLayout]);

  /* Sidebar responsive control */
  useEffect(() => {
    const handleResize = () => {
      setToggle(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <Route
            path="/signin"
            element={<SignIn setUserName={setUserName} />}
          />

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

/* ------------------------------------
   App Root
------------------------------------ */
export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <LayoutWrapper />
      </Router>
    </ThemeProvider>
  );
}
