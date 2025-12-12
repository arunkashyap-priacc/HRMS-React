import { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaClock, FaUser, FaCheckCircle, FaCalendarAlt, FaExclamationCircle, FaRegClock, FaHourglassHalf } from "react-icons/fa";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [clockInTime, setClockInTime] = useState(null);
  const [clockOutTime, setClockOutTime] = useState(null);
  const [workedHours, setWorkedHours] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [workStatus, setWorkStatus] = useState("Not Working");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClockIn = () => {
    if (clockInTime && !clockOutTime) return;
    const now = new Date();
    setClockInTime(now);
    setClockOutTime(null);
    setWorkedHours(0);
    setStatusMessage("");
    setWorkStatus("Working");

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
    alert(You have clocked out. Status: ${status});
  };

  const formatTime = (date) =>
    date
      ? date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
      : "--:--:--";

  const formatWorkedHours = (hoursDecimal) => {
    const h = Math.floor(hoursDecimal);
    const m = Math.round((hoursDecimal % 1) * 60);
    return ${h}h ${m}m;
  };

  return (
    <Container className="py-4">
      <Row className="g-4">
        {/* Clock Card */}
        <Col md={6}>
          <Card className="text-white bg-primary h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <Card.Title>Current Time</Card.Title>
                  <div>{time.toLocaleDateString(undefined, { weekday: "long" })} | {time.toLocaleDateString()}</div>
                </div>
                <FaClock size={40} />
              </div>
              <h2 className="my-3">{formatTime(time)}</h2>
              {clockInTime && !clockOutTime && <div className="text-success mb-2">Currently Working...</div>}
              {statusMessage && <div className="text-warning mb-2">{statusMessage}</div>}
              <div className="d-flex gap-2">
                <Button 
                  variant="success" 
                  onClick={handleClockIn} 
                  disabled={clockInTime && !clockOutTime}
                >
                  Clock In
                </Button>
                <Button 
                  variant="danger" 
                  onClick={handleClockOut}
                >
                  Clock Out
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Summary and Policy */}
        <Col md={6}>
          <Row className="g-4">
            {/* Today's Summary */}
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <Card.Title className="d-flex align-items-center gap-2"><FaUser />Today's Summary</Card.Title>
                  <div className="mt-3">
                    <div className="d-flex justify-content-between">
                      <span><FaClock className="text-success" /> Clock In:</span>
                      <span className="fw-bold">{formatTime(clockInTime)}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span><FaClock className="text-danger" /> Clock Out:</span>
                      <span className="fw-bold">{formatTime(clockOutTime)}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span><FaCalendarAlt className="text-primary" /> Working Hours:</span>
                      <span className="fw-bold text-primary">{formatWorkedHours(workedHours)}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span><FaCheckCircle /> Status:</span>
                      <span className={fw-bold ${workStatus === "Absent" ? "text-danger" : workStatus === "Half Day" ? "text-warning" : "text-success"}}>
                        {workStatus}
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Working Hours Policy */}
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <Card.Title className="d-flex align-items-center gap-2"><FaExclamationCircle /> Working Hours Policy</Card.Title>
                  <div className="mt-3">
                    <div className="d-flex justify-content-between">
                      <span><FaCalendarAlt className="text-primary" /> Standard Hours:</span>
                      <span className="fw-bold">9:00 AM - 6:00 PM (9 hours)</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span><FaRegClock className="text-success" /> Grace Period:</span>
                      <span className="fw-bold">9:00 AM - 9:05 AM</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span><FaClock className="text-warning" /> Late Login:</span>
                      <span className="fw-bold">After 9:05 AM</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span><FaHourglassHalf className="text-warning" /> Early Logout:</span>
                      <span className="fw-bold">Before 6:00 PM</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Clock;
