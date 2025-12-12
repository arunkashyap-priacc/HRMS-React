import React from "react";
import "../App.css";


// =======================
//     HOLIDAY JSX
// =======================

export default function App() {
  const holidays = [
    { date: "2025-01-01", title: "New Year's Day", desc: "Public Holiday", type: "public" },
    { date: "2025-01-26", title: "Republic Day", desc: "National Holiday", type: "public" },

    { date: "2025-03-14", title: "Holi", desc: "Festival of Colors", type: "public" },

    { date: "2025-04-10", title: "Mahavir Jayanti", desc: "Religious Holiday", type: "optional" },
    { date: "2025-04-18", title: "Good Friday", desc: "Christian Holiday", type: "public" },

    { date: "2025-05-01", title: "Labor Day", desc: "International Workers Day", type: "public" },

    { date: "2025-08-15", title: "Independence Day", desc: "National Holiday", type: "public" },
    { date: "2025-08-16", title: "Raksha Bandhan", desc: "Festival celebrating sibling bond", type: "optional" },

    { date: "2025-10-02", title: "Gandhi Jayanti", desc: "Birthday of Mahatma Gandhi", type: "public" },
    { date: "2025-10-22", title: "Dussehra", desc: "Victory of good over evil", type: "public" },

    { date: "2025-11-12", title: "Diwali", desc: "Festival of Lights", type: "public" },

    { date: "2025-12-25", title: "Christmas", desc: "Christian Holiday", type: "public" },
  ];

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const weekdayNames = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
  ];

  // Group holidays by month (0-11)
  const grouped = holidays.reduce((acc, holiday) => {
    const d = new Date(holiday.date);
    const month = d.getMonth();
    if (!acc[month]) acc[month] = [];
    acc[month].push({ ...holiday, dateObj: d });
    return acc;
  }, {});

  const publicCount = holidays.filter(h => h.type === "public").length;
  const optionalCount = holidays.filter(h => h.type === "optional").length;

  return (
    <div className="wrap">
      <header className="header">
        <h1>Organization Holidays</h1>
        <p>View all public and optional holidays for 2025</p>
      </header>

      {/* Stats */}
      <div className="stats">
        <div className="stat-card">
          <div className="stat-icon calendar" />
          <div>
            <div className="label">Public Holidays</div>
            <div className="value">{publicCount}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon gift" />
          <div>
            <div className="label">Optional Holidays</div>
            <div className="value">{optionalCount}</div>
          </div>
        </div>
      </div>

      {/* Holiday Panel */}
      <div className="panel">
        <h2>Holiday Calendar 2025</h2>

        {Object.keys(grouped)
          .sort((a, b) => a - b)
          .map((month) => (
            <div key={month}>
              <div className="month">📅 {monthNames[month]}</div>

              {grouped[month].map((h, idx) => {
                const d = h.dateObj;
                const mon = monthNames[d.getMonth()].slice(0, 3);
                const day = String(d.getDate()).padStart(2, "0");
                const weekday = weekdayNames[d.getDay()];

                return (
                  <div className="holiday-row" key={idx}>
                    <div className={`date-badge ${h.type}`}>
                      <div className="mon">{mon}</div>
                      <div className="day">{day}</div>
                    </div>

                    <div className="holiday-info">
                      <div className="holiday-title">{h.title}</div>
                      <div className="holiday-desc">{h.desc}</div>
                      <div className="holiday-weekday">{weekday}</div>
                    </div>

                    <div className={`tag ${h.type}`}>{h.type.toUpperCase()}</div>
                  </div>
                );
              })}
            </div>
          ))}

        <div className="info-box">
          <p><strong>Public Holidays:</strong> Employees get full paid leave.</p>
          <p><strong>Optional Holidays:</strong> Based on personal or religious choice.</p>
          <p><strong>Note:</strong> If a holiday falls on a weekend, it may shift to Monday.</p>
        </div>
      </div>

      <button className="fab">＋</button>
    </div>
  );
}
