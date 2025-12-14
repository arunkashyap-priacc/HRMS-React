import { useState, useEffect } from "react";
import {
  FaClock,
  FaUser,
  FaCheckCircle,
  FaCalendarAlt,
  FaExclamationCircle,
  FaRegClock,
  FaHourglassHalf,
} from "react-icons/fa";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [clockInTime, setClockInTime] = useState(null);
  const [clockOutTime, setClockOutTime] = useState(null);
  const [workedHours, setWorkedHours] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [workStatus, setWorkStatus] = useState("Not Working");

  // ⏰ current time clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // ✅ RESTORE CLOCK-IN / CLOCK-OUT FROM LOCALSTORAGE
  useEffect(() => {
  const savedLogin = localStorage.getItem("loginTime");
  const savedLogout = localStorage.getItem("logoutTime");

  if (savedLogin) {
    const loginDate = new Date(savedLogin);
    setClockInTime(loginDate);
    setWorkStatus("Working");

    if (!savedLogout) {
      const interval = setInterval(() => {
        const diffMs = new Date() - loginDate;
        setWorkedHours(diffMs / (1000 * 60 * 60));
      }, 1000);

      setTimerInterval(interval);
    }
  }

  if (savedLogout) {
    const logoutDate = new Date(savedLogout);
    setClockOutTime(logoutDate);
  }
}, []);


  const handleClockIn = () => {
    if (clockInTime && !clockOutTime) return;

    const now = new Date();
    setClockInTime(now);
    setClockOutTime(null);
    setWorkedHours(0);
    setStatusMessage("");
    setWorkStatus("Working");

    localStorage.setItem("loginTime", now.toISOString());
    localStorage.removeItem("logoutTime");

    if (timerInterval) clearInterval(timerInterval);
    const interval = setInterval(() => {
      const diffMs = new Date() - now;
      setWorkedHours(diffMs / (1000 * 60 * 60));
    }, 1000);

    setTimerInterval(interval);
  };

  const handleClockOut = () => {
    if (!clockInTime) return;

    const now = new Date();
    setClockOutTime(now);
    localStorage.setItem("logoutTime", now.toISOString());

    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }

    const worked = (now - clockInTime) / (1000 * 60 * 60);
    setWorkedHours(worked);

    let status = "";
    if (worked < 5) status = "Absent";
    else if (worked >= 5 && worked < 9) status = "Half Day";
    else status = "Full Day Present";

    setWorkStatus(status);
    setStatusMessage("You have clocked out");
    alert(`You have clocked out. Status: ${status}`);
  };

  const formatTime = (date) =>
    date
      ? date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      : "--:--:--";

  const formatWorkedHours = (hoursDecimal) => {
    const h = Math.floor(hoursDecimal);
    const m = Math.round((hoursDecimal % 1) * 60);
    return `${h}h ${m}m`;
  };

  return (
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card text-white bg-primary vh-100">
            <div className="card-body ">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h5 className="card-title">Current Time</h5>
                  <div>
                    {time.toLocaleDateString(undefined, { weekday: "long" })} |{" "}
                    {time.toLocaleDateString()}
                  </div>
                </div>
                <FaClock size={40} />
              </div>

              <div className="card-body d-flex flex-column justify-content-center align-items-center h-50">
                <h1
                  className="my-2"
                  style={{ fontSize: "60px", fontWeight: "bold" }}
                >
                  {formatTime(time)}
                </h1>

                {clockInTime && !clockOutTime && (
                  <div className="text-success mb-2">
                    Currently Working...
                  </div>
                )}
                {statusMessage && (
                  <div className="text-warning mb-2">{statusMessage}</div>
                )}

                <div className="d-flex gap-2 mt-3">
                  <button
                    className="btn btn-success"
                    onClick={handleClockIn}
                    disabled={clockInTime && !clockOutTime}
                    style={{ fontSize: "30px", fontWeight: "bold" }}
                  >
                    Clock In
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={handleClockOut}
                    style={{ fontSize: "30px", fontWeight: "bold" }}
                  >
                    Clock Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 d-flex flex-column gap-3">
          <div className="card border shadow-sm w-100 flex-grow-1">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center gap-2">
                <FaUser /> Today's Summary
              </h5>

              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <span>
                    <FaClock className="text-success" /> Clock In:
                  </span>
                  <span className="fw-bold">
                    {formatTime(clockInTime)}
                  </span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>
                    <FaClock className="text-danger" /> Clock Out:
                  </span>
                  <span className="fw-bold">
                    {formatTime(clockOutTime)}
                  </span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>
                    <FaCalendarAlt className="text-primary" /> Working Hours:
                  </span>
                  <span className="fw-bold text-primary">
                    {formatWorkedHours(workedHours)}
                  </span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>
                    <FaCheckCircle /> Status:
                  </span>
                  <span className="fw-bold">{workStatus}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card border shadow-sm w-100 flex-grow-1">
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center gap-2">
                <FaExclamationCircle /> Working Hours Policy
              </h5>

              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <span>
                    <FaCalendarAlt /> Standard Hours:
                  </span>
                  <span className="fw-bold">9:00 AM - 6:00 PM</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>
                    <FaRegClock /> Grace Period:
                  </span>
                  <span className="fw-bold">9:00 - 9:05 AM</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>
                    <FaHourglassHalf /> Early Logout:
                  </span>
                  <span className="fw-bold">Before 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
