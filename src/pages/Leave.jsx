import React, { useState } from "react";
import { FaCalendarAlt, FaPlusCircle } from "react-icons/fa";

function Leave() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [leaveList, setLeaveList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fromDate || !toDate || !reason) {
      alert("Please fill all fields!");
      return;
    }

    const newLeave = {
      id: Date.now(),
      fromDate,
      toDate,
      reason,
      status: "Pending"
    };

    setLeaveList([...leaveList, newLeave]);

    setFromDate("");
    setToDate("");
    setReason("");
  };

  return (
    <div className="container-fluid px-4 py-3">
      {/* Page Heading */}
      <h2 className="fw-bold">Request Leaves</h2>
      <p className="text-muted">Submit your leave requests and track their status</p>

      {/* Leave Form Card */}
      <div className="card border-0 shadow-sm mt-3" style={{ borderRadius: "15px" }}>
        <div className="card-body p-4">

          <div className="d-flex align-items-center mb-3">
            <div className="p-3 rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
              style={{ width: 50, height: 50 }}>
              <FaCalendarAlt size={24} />
            </div>
            <h4 className="ms-3 fw-bold">Submit Leave Request</h4>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="fw-bold">From Date *</label>
                <input
                  type="date"
                  className="form-control p-3"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="fw-bold">To Date *</label>
                <input
                  type="date"
                  className="form-control p-3"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="fw-bold">Reason *</label>
              <textarea
                rows="3"
                className="form-control p-3"
                placeholder="Enter reason for leave request"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              ></textarea>
            </div>

            <button className="btn btn-primary w-100 py-3 fw-bold">
              <FaPlusCircle className="me-2" />
              Submit Leave Request
            </button>
          </form>
        </div>
      </div>

      {/* Leave List */}
      <div className="card border-0 shadow-sm mt-4" style={{ borderRadius: "15px" }}>
        <div className="card-body p-4">
          <h4 className="fw-bold">My Leave Requests</h4>

          {leaveList.length === 0 ? (
            <p className="text-muted mt-2">No leave requests yet.</p>
          ) : (
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {leaveList.map((leave) => (
                  <tr key={leave.id}>
                    <td>{leave.fromDate}</td>
                    <td>{leave.toDate}</td>
                    <td>{leave.reason}</td>
                    <td>
                      <span className="badge bg-warning">{leave.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Leave;
