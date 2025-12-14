import React from "react";
import "../index.css";

// =======================
//     HOLIDAY PAGE
// =======================

export default function Holiday() {
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

  const grouped = holidays.reduce((acc, h) => {
    const d = new Date(h.date);
    const m = d.getMonth();
    if (!acc[m]) acc[m] = [];
    acc[m].push({ ...h, dateObj: d });
    return acc;
  }, {});

  const publicCount = holidays.filter(h => h.type === "public").length;
  const optionalCount = holidays.filter(h => h.type === "optional").length;

  return (
    <div className="holiday-wrap">

      {/* HEADER */}
      <header className="holiday-header">
        <h1>Organization Holidays</h1>
        <p>View all public and optional holidays for 2025</p>
      </header>

      {/* STATS */}
      <div className="holiday-stats">
        <div className="holiday-stat-card">
          <div className="stat-icon calendar" />
          <div>
            <div className="label">Public Holidays</div>
            <div className="value">{publicCount}</div>
          </div>
        </div>

        <div className="holiday-stat-card">
          <div className="stat-icon gift" />
          <div>
            <div className="label">Optional Holidays</div>
            <div className="value">{optionalCount}</div>
          </div>
        </div>
      </div>

      {/* PANEL */}
      <div className="holiday-panel">
        <h2>Holiday Calendar 2025</h2>

        {Object.keys(grouped).sort((a,b)=>a-b).map(month => (
          <div key={month}>
            <div className="holiday-month">📅 {monthNames[month]}</div>

            {grouped[month].map((h, i) => {
              const d = h.dateObj;
              return (
                <div className="holiday-row" key={i}>
                  <div className={`date-badge ${h.type}`}>
                    <div className="mon">{monthNames[d.getMonth()].slice(0,3)}</div>
                    <div className="day">{String(d.getDate()).padStart(2,"0")}</div>
                  </div>

                  <div className="holiday-info">
                    <div className="holiday-title">{h.title}</div>
                    <div className="holiday-desc">{h.desc}</div>
                    <div className="holiday-weekday">{weekdayNames[d.getDay()]}</div>
                  </div>

                  <div className={`tag ${h.type}`}>{h.type.toUpperCase()}</div>
                </div>
              );
            })}
          </div>
        ))}

        <div className="holiday-info-box">
          <p><strong>Public Holidays:</strong> Paid leave</p>
          <p><strong>Optional Holidays:</strong> Based on personal choice</p>
          <p><strong>Note:</strong> Weekend holidays may shift</p>
        </div>
      </div>

      <button className="holiday-fab">＋</button>
    </div>
  );
}
