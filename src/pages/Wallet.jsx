import React from "react";
import {
  FaWallet,
  FaArrowDown,
  FaCalendarAlt,
  FaChartLine,
} from "react-icons/fa";


export default function Wallet() {
  const summary = {
    workingDays: 15,
    presentDays: 12,
    attendance: 80,
    monthlySalary: 15000,
    dailyRate: 500,
    earnings: 6000,
    deductions: 0,
  };

  return (
    <div className="wallet-page">
      {/* Header */}
      <h2 className="page-title">My Wallet</h2>
      <p className="page-subtitle">
        Track your salary and monthly earnings
      </p>

      {/* Top Cards (like attendance cards) */}
      <div className="wallet-cards">
        <StatCard
          icon={<FaCalendarAlt />}
          title="Working Days"
          value={summary.workingDays}
        />
        <StatCard
          icon={<FaChartLine />}
          title="Present Days"
          value={summary.presentDays}
        />
        <StatCard
          icon={<FaWallet />}
          title="Attendance %"
          value={`${summary.attendance}%`}
        />
      </div>

      {/* Earnings Card */}
      <div className="wallet-main green">
        <div className="wallet-head">
          <div>
            <h4>Current Month Earnings</h4>
            <p>24th of last month to 23rd of current month</p>
          </div>
          <FaWallet className="wallet-icon" />
        </div>

        <h1>₹{summary.earnings}</h1>
        <p>Based on {summary.presentDays} working days recorded</p>

        <div className="wallet-divider" />

        <div className="wallet-bottom">
          <div>
            <span>Daily Rate</span>
            <strong>₹{summary.dailyRate}</strong>
          </div>
          <div>
            <span>Monthly Salary</span>
            <strong>₹{summary.monthlySalary}</strong>
          </div>
        </div>
      </div>

      {/* Deduction Card */}
      <div className="wallet-main orange">
        <div className="wallet-head">
          <div>
            <h4>Promise to Pay (Deductions)</h4>
            <p>Total deducted amount</p>
          </div>
          <FaArrowDown className="wallet-icon" />
        </div>

        <h1>₹{summary.deductions}</h1>
        <p>Amount to be credited back</p>

        <div className="wallet-note">
          Deducted amount will be credited once performance improves
          and project is allocated.
        </div>
      </div>

      {/* Salary Calculation */}
      <div className="wallet-details">
        <h4>Salary Calculation Details</h4>

        <Row label="Monthly Salary" value={`₹${summary.monthlySalary}`} />
        <Row
          label="Daily Rate (Monthly ÷ 30)"
          value={`₹${summary.dailyRate}`}
        />
        <Row
          label="Present Days × Daily Rate"
          value={`${summary.presentDays} × ₹${summary.dailyRate}`}
        />

        <div className="wallet-highlight">
          <span>Provisional Earnings</span>
          <strong>₹{summary.earnings}</strong>
        </div>

        <div className="wallet-info">
          <strong>Salary Period: 24th to 23rd</strong>
          <p>
            Salary is calculated from 24th of previous month to 23rd
            of current month. Payment is processed on 30th.
          </p>
        </div>

        <div className="wallet-warning">
          If you take leave on Friday or Monday, weekend will also be
          counted as leave.
        </div>
      </div>
    </div>
  );
}

/* Reusable Components */
function StatCard({ icon, title, value }) {
  return (
    <div className="wallet-card">
      <div className="wallet-card-icon">{icon}</div>
      <div>
        <span>{title}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="wallet-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
