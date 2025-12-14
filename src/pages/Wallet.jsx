import React from "react";
import { employeeData } from "../data/employeeData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Wallet() {
  // 🔹 Direct employee select (example: first employee)
  const wallet = employeeData?.EMP001?.wallet; 
  // 👆 EMP001 ko apne data ke according change kar sakte ho

  // 📊 Chart data
  const chartData = [
    { name: "Earned", amount: wallet?.totalEarned || 0 },
    { name: "Paid", amount: wallet?.totalPaid || 0 },
    { name: "Balance", amount: wallet?.balance || 0 },
  ];

  return (
    <div className="page-container p-4">
      <h2 className="mb-4 fw-bold">Wallet Overview</h2>

      {/* 💳 Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <h6>Total Earned</h6>
            <h4 className="fw-bold">₹{wallet?.totalEarned || 0}</h4>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <h6>Total Paid</h6>
            <h4 className="fw-bold">₹{wallet?.totalPaid || 0}</h4>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <h6>Balance</h6>
            <h4 className="fw-bold">₹{wallet?.balance || 0}</h4>
          </div>
        </div>
      </div>

      {/* 📊 Salary Chart */}
      <div className="card shadow-sm p-4">
        <h5 className="mb-3 fw-bold">Salary Summary</h5>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
