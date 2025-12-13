import React from "react";
import StatCard from "../components/StatCard";
import { FiCheckCircle, FiCalendar, FiStar } from "react-icons/fi";
import { AiOutlineWallet } from "react-icons/ai";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", value: 3 },
  { name: "Tue", value: 4 },
  { name: "Wed", value: 2 },
  { name: "Thu", value: 5 },
  { name: "Fri", value: 4 },
  { name: "Sat", value: 4 },
  { name: "Sun", value: 5 },
];

export default function Dashboard() {
  return (
    <div>
      <div className="status-card mb-4">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 style={{ color: "rgba(255,255,255,0.95)", margin: 0 }}>
              Today's Status
            </h5>
            <div style={{ color: "rgba(255,255,255,0.9)" }}>
              Thursday, December 11, 2025
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.2)",
              width: 48,
              height: 48,
              borderRadius: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ⏱
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <div
              style={{
                background: "rgba(255,255,255,0.12)",
                padding: 18,
                borderRadius: 10,
              }}
            >
              <div style={{ fontSize: 13 }}>Login Time</div>
              <div style={{ fontSize: 24, fontWeight: 700 }}>09:00:53</div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div
              style={{
                background: "rgba(255,255,255,0.12)",
                padding: 18,
                borderRadius: 10,
              }}
            >
              <div style={{ fontSize: 13 }}>Logout Time</div>
              <div style={{ fontSize: 24, fontWeight: 700 }}>--:--</div>
            </div>
          </div>

          <div className="col-12">
            <div
              style={{
                background: "rgba(255,255,255,0.12)",
                padding: 18,
                marginTop: 6,
                borderRadius: 10,
              }}
            >
              <div style={{ fontSize: 13 }}>Status</div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>Present</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)" }}>
                Login Recorded
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <StatCard title="Present Days" value="10">
            <FiCheckCircle />
          </StatCard>
        </div>
        <div className="col-md-3">
          <StatCard title="Absent Days" value="0">
            <FiCalendar />
          </StatCard>
        </div>
        <div className="col-md-3">
          <StatCard title="Performance Score" value="0/5">
            <FiStar />
          </StatCard>
        </div>
        <div className="col-md-3">
          <StatCard title="Month Earnings" value="₹5,000">
            <AiOutlineWallet />
          </StatCard>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-lg-8">
          <div className="card p-3" style={{ borderRadius: 12 }}>
            <h6>Monthly Attendance</h6>
            <div style={{ width: "100%", height: 220 }}>
              <ResponsiveContainer>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card p-3" style={{ borderRadius: 12 }}>
            <h6>Weekly Performance Trend</h6>
            <small className="text-muted">
              Quick summary of tasks completed this week
            </small>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <strong>Task A</strong> — Completed <br />
                <small className="text-muted">2h ago</small>
              </li>
              <li className="mb-2">
                <strong>Task B</strong> — In Progress <br />
                <small className="text-muted">Today</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
