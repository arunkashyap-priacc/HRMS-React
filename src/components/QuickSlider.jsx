import React from 'react';

export default function QuickSlider({ open = true, onClose }){
  return (
    <div style={{width:320}}>
      <div className="card" style={{borderRadius:14, boxShadow:'0 12px 30px rgba(20,20,50,0.08)'}}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div style={{fontWeight:700}}>Quick Actions</div>
              <small className="text-muted">Shortcuts & status</small>
            </div>
            <button className="btn btn-sm btn-outline-secondary" onClick={onClose}>Close</button>
          </div>

          <div style={{marginTop:12}}>
            <button className="btn btn-primary w-100 mb-2">Clock Out</button>
            <button className="btn btn-light w-100 mb-2">Request Leave</button>

            <div style={{background:'#f8fafc', padding:12, borderRadius:8}}>
              <div style={{fontSize:12, color:'#6b7280'}}>Today</div>
              <div style={{fontWeight:600}}>09:00:53 — Present</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
