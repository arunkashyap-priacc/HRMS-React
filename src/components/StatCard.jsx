import React from 'react';

export default function StatCard({ title, value, children }){
  return (
    <div className="stat-card d-flex justify-content-between align-items-center">
      <div>
        <div style={{fontSize:13, color:'#6b7280'}}>{title}</div>
        <div style={{fontWeight:700, fontSize:20}}>{value}</div>
      </div>
      <div style={{fontSize:24}}>{children}</div>
    </div>
  );
}
