import React from 'react';

export default function Attendance(){
  return (
    <div>
      <h3>My Attendance</h3>
      <p className="text-muted">Monthly attendance table / calendar yahan dalein.</p>
      <div className="card p-3" style={{borderRadius:12}}>
        <table className="table">
          <thead>
            <tr><th>Date</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>2025-12-01</td><td>Present</td></tr>
            <tr><td>2025-12-02</td><td>Absent</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
