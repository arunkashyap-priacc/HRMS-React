import React from "react";
import styled from "styled-components";

// =======================
//   STYLED COMPONENTS
// =======================

const Wrap = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 30px;
  font-family: "Inter", sans-serif;
  background: #f6f8fb;
`;

const Header = styled.header`
  h1 {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
  }
  p {
    color: gray;
    margin-top: 6px;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 20px;
  margin: 25px 0;
`;

const StatCard = styled.div`
  background: white;
  padding: 18px 22px;
  border-radius: 14px;
  box-shadow: 0 8px 30px rgba(19, 24, 31, 0.06);
  display: flex;
  gap: 16px;
  flex: 1;
`;

const StatIcon = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 12px;
  background: ${(p) =>
    p.type === "calendar"
      ? "linear-gradient(135deg,#2aa8ff,#3ed7ff)"
      : "linear-gradient(135deg,#ff9a3c,#ffb86b)"};
`;

const Panel = styled.div`
  background: white;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(19, 24, 31, 0.04);
`;

const Month = styled.div`
  margin-top: 25px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HolidayRow = styled.div`
  display: flex;
  background: #f8fafb;
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  margin: 12px 0;
`;

const DateBadge = styled.div`
  width: 60px;
  height: 60px;
  color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(p) =>
    p.type === "optional"
      ? "linear-gradient(135deg,#ff9a3c,#ffb86b)"
      : "linear-gradient(135deg,#22b7ff,#5ad0ff)"};
`;

const Tag = styled.div`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  background: ${(p) =>
    p.type === "optional" ? "#ffe3c2" : "#d9eaff"};
  color: ${(p) =>
    p.type === "optional" ? "#cc7a13" : "#2e6ea8"};
`;

const InfoBox = styled.div`
  margin-top: 25px;
  padding: 15px;
  background: #eef3ff;
  border-radius: 10px;
  border-left: 4px solid #7aa5ff;

  p {
    margin: 8px 0;
  }
`;

const Fab = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg,#2aa8ff,#3ed7ff);
  border: none;
  border-radius: 50%;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

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

  // Group holidays by month
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
    <Wrap>
      <Header>
        <h1>Organization Holidays</h1>
        <p>View all public and optional holidays for 2025</p>
      </Header>

      {/* Stats */}
      <Stats>
        <StatCard>
          <StatIcon type="calendar" />
          <div>
            <div className="label">Public Holidays</div>
            <div className="value">{publicCount}</div>
          </div>
        </StatCard>

        <StatCard>
          <StatIcon type="gift" />
          <div>
            <div className="label">Optional Holidays</div>
            <div className="value">{optionalCount}</div>
          </div>
        </StatCard>
      </Stats>

      {/* Holiday Panel */}
      <Panel>
        <h2>Holiday Calendar 2025</h2>

        {Object.keys(grouped)
          .sort((a, b) => a - b)
          .map((month) => (
            <div key={month}>
              <Month>📅 {monthNames[month]}</Month>

              {grouped[month].map((h, idx) => {
                const d = h.dateObj;
                const mon = monthNames[d.getMonth()].slice(0, 3);
                const day = String(d.getDate()).padStart(2, "0");
                const weekday = weekdayNames[d.getDay()];

                return (
                  <HolidayRow key={idx}>
                    <DateBadge type={h.type}>
                      <div className="mon">{mon}</div>
                      <div className="day">{day}</div>
                    </DateBadge>

                    <div style={{ flex: 1, marginLeft: "15px" }}>
                      <div className="holiday-title" style={{ fontSize: 18, fontWeight: 700 }}>
                        {h.title}
                      </div>
                      <div style={{ color: "gray", fontSize: 14 }}>{h.desc}</div>
                      <div style={{ color: "gray", fontSize: 13 }}>{weekday}</div>
                    </div>

                    <Tag type={h.type}>{h.type.toUpperCase()}</Tag>
                  </HolidayRow>
                );
              })}
            </div>
          ))}

        <InfoBox>
          <p><strong>Public Holidays:</strong> Employees get full paid leave.</p>
          <p><strong>Optional Holidays:</strong> Based on personal or religious choice.</p>
          <p><strong>Note:</strong> If a holiday falls on a weekend, it may shift to Monday.</p>
        </InfoBox>
      </Panel>

      <Fab>＋</Fab>
    </Wrap>
  );
}
