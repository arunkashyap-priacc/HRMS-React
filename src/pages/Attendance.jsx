import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function Attendance() {
  const summary = {
    total: 13,
    present: 12,
    late: 0,
    halfDay: 1,
    leave: 1,
    absent: 0,
    percentage: 92.3,
  };

  const history = [
    {
      date: "Thursday, November 27, 2025",
      time: "17:24:44 - 18:01:59",
      status: "HALF_DAY",
      note: "Logout: HALF_DAY",
    },
    {
      date: "Wednesday, November 26, 2025",
      time: "Leave Applied",
      status: "LEAVE",
      note: "Approved Leave",
    },
    {
      date: "Tuesday, November 25, 2025",
      time: "09:00 - 18:05",
      status: "PRESENT",
      note: "Full Day Present",
    },
    {
      date: "Saturday, November 23, 2025",
      time: "Weekend — Not Counted",
      status: "WEEKEND",
    },
  ];

  return (
    <div className="attendance-page">
      <h2 className="page-title">My Attendance</h2>
      <p className="page-subtitle">
        View your attendance history and statistics
      </p>

      {/* SUMMARY CARDS */}
      <div className="attendance-cards">
        <Card title="Total" value={summary.total} />
        <Card title="Present" value={summary.present} />
        <Card title="Late" value={summary.late} />
        <Card title="Half Day" value={summary.halfDay} />
        <Card title="Leave" value={summary.leave} />
        <Card title="Absent" value={summary.absent} />
      </div>

      {/* ATTENDANCE % */}
      <div className="attendance-progress">
        <div className="progress-header">
          <h4>Attendance Percentage</h4>
          <span>{summary.percentage}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${summary.percentage}%` }}
          />
        </div>
      </div>

      {/* HISTORY */}
      <div className="attendance-history">
        <h4>Attendance History</h4>

        {history.map((item, index) => (
          <div className="history-item" key={index}>
            {/* LEFT */}
            <div className="history-left">
              <span
                className={`status-dot ${item.status.toLowerCase()}`}
              ></span>

              <div>
                <strong>{item.date}</strong>
                <p>{item.time}</p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="history-right">
              <span
                className={`badge ${item.status.toLowerCase()}`}
              >
                {item.status.replace("_", " ")}
              </span>

              {item.note && <p>{item.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* SUMMARY CARD */
function Card({ title, value }) {
  return (
    <div className="attendance-card">
      <div className="card-icon">
        <FaCalendarAlt />
      </div>

      <div className="card-text">
        <span className="card-title">{title}</span>
        <strong className="card-value">{value}</strong>
      </div>
    </div>
  );
}

