import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Clock from './pages/Clock';
import Attendance from './pages/Attendance';
import Performance from './pages/Performance';
import Wallet from './pages/Wallet';
import Payslips from './pages/Payslips';
import Leave from './pages/Leave';
import Holidays from './pages/Holidays';

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clock" element={<Clock />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/performance" element={<Performance />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/payslips" element={<Payslips />} />
      <Route path="/leave" element={<Leave />} />
      <Route path="/holidays" element={<Holidays />} />
    </Routes>
  );
}
