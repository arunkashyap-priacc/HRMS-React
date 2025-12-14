import React from "react";
import { FaStar, FaBullseye, FaAward } from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Performance() {
  // Daily Performance Line Chart
  const dailyData = {
    labels: [
      "Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5",
      "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10",
      "Mar 11", "Mar 12", "Mar 13", "Mar 14", "Mar 15"
    ],
    datasets: [
      {
        label: "Rating",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "#4e73df",
        backgroundColor: "#4e73df",
        tension: 0.3,
      },
      {
        label: "Tasks",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "#1cc88a",
        backgroundColor: "#1cc88a",
        tension: 0.3,
      },
    ],
  };

  const dailyOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "Daily Performance Trend" },
    },
    scales: {
      y: { beginAtZero: true, max: 4},
    },
  };

  // Weekly Performance Bar Chart
  const weeklyData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Tasks Completed",
        data: [5, 7, 3, 8],
        backgroundColor: "#4e73df",
      },
      {
        label: "Average Rating",
        data: [7, 6, 8, 7],
        backgroundColor: "#1cc88a",
      },
    ],
  };

  const weeklyOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Weekly Performance" },
    },
  };

  return (
    <div className="p-4">
      {/* Page Title */}
      <h3 className="fw-bold">My Performance</h3>
      <p className="text-muted">
        Track your performance across daily, weekly, and monthly periods
      </p>

      {/* Period Card */}
      <div className="card p-4 mb-4 border-0 shadow-sm">
        <div className="d-flex align-items-start gap-3">
          <div className="bg-primary bg-opacity-10 p-3 rounded">📅</div>
          <div>
            <h6 className="fw-bold mb-1">Current Performance Period</h6>
            <p className="mb-1">
              <strong>Period:</strong> 24th Feb to 23rd Mar (28 days)
            </p>
            <p className="text-primary mb-0">
              Your performance is tracked from the 24th of last month to the 23rd of the current month
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="d-flex gap-3 mb-4">
        <button className="btn btn-primary px-4">Daily Performance</button>
        <button className="btn btn-light px-4">Last 8 Weeks</button>
        <button className="btn btn-light px-4">Monthly</button>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="stat-card d-flex justify-content-between align-items-center">
            <div>
              <div className="text-muted">Average Rating</div>
              <h4 className="fw-bold mb-0">0<span className="fs-6">/10</span></h4>
            </div>
            <FaStar size={28} className="text-primary" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card d-flex justify-content-between align-items-center">
            <div>
              <div className="text-muted">Task Completion</div>
              <h4 className="fw-bold mb-0">0%</h4>
            </div>
            <FaBullseye size={28} className="text-success" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="stat-card d-flex justify-content-between align-items-center">
            <div>
              <div className="text-muted">Behavior Score</div>
              <h4 className="fw-bold mb-0">0<span className="fs-6">/100</span></h4>
            </div>
            <FaAward size={28} className="text-danger" />
          </div>
        </div>
      </div>

      {/* Daily Performance Chart */}
      <div className="card p-4 mb-4 border-0 shadow-sm">
        <Line data={dailyData} options={dailyOptions} height={260} />
      </div>

      {/* Weekly Performance Chart */}
      <div className="card p-4 mb-4 border-0 shadow-sm">
        <Bar data={weeklyData} options={weeklyOptions} height={260} />
      </div>

      {/* Recent Performance */}
      <div className="card p-4 border-0 shadow-sm">
        <h5 className="fw-bold mb-3">Recent Daily Performance</h5>

        {["Mar 15", "Mar 14", "Mar 13", "Mar 12"].map((day) => (
          <div
            key={day}
            className="d-flex justify-content-between align-items-center py-3 border-bottom"
          >
            <div>
              <div className="fw-semibold">{day}</div>
              <div className="text-muted">0 tasks completed</div>
            </div>

            <div className="d-flex gap-4 text-end">
              <div>
                <div className="text-muted small">Rating</div>
                <div className="text-primary fw-bold">0/10</div>
              </div>
              <div>
                <div className="text-muted small">Attendance</div>
                <div className="text-success fw-bold">0%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
