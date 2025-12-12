import React from 'react';

export default function Clock(){
  return (
    <div className="card p-4" style={{borderRadius:12}}>
      <h3>Clock In / Out</h3>
      <p className="text-muted">Yahan se aap apna clock in/out record kar sakte ho (demo mode)</p>

      <div style={{display:'flex', gap:12, marginTop:12}}>
        <button className="btn btn-success">Clock In</button>
        <button className="btn btn-danger">Clock Out</button>
      </div>
    </div>
  );
}
