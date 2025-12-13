import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

import ThemeProvider from "./context/ThemeProvider";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <ThemeProvider>
      <Router>
        <div className="d-flex">
          <Sidebar toggle={toggle} setToggle={setToggle} />

          <div className={`main-content ${toggle ? "expanded" : "collapsed"}`}>
            <Header />

            <Routes>
              <Route path="/" element={<Dashboard />} />
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
      </Router>
    </ThemeProvider>
  );
}

export default App;
