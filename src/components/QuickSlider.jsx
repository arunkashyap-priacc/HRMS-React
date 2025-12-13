import React from "react";
import { FaTimes } from "react-icons/fa";

export default function QuickSlider({ open = false, onClose }) {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`quickslider-overlay ${open ? "show" : ""}`}
        onClick={onClose}
      ></div>

      <div
        className="quickslider-card"
        style={{
          right: open ? 20 : -360,
          top: 80,
          position: "fixed",
          width: 320,
          zIndex: 1050,
          transition: "0.3s ease",
        }}
      >
        <div
          className="card p-3"
          style={{
            borderRadius: 14,
            boxShadow: "0 12px 30px rgba(20,20,50,0.08)",
            background: "var(--card-bg, #fff)",
            color: "var(--card-color, #222)",
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <div style={{ fontWeight: 700 }}>Quick Actions</div>
              <small className="text-muted">Shortcuts & status</small>
            </div>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={onClose}
            >
              <FaTimes />
            </button>
          </div>

          <div className="d-flex flex-column gap-2">
            <button className="btn btn-primary w-100">Clock Out</button>
            <button className="btn btn-light w-100">Request Leave</button>

            <div
              style={{
                background: "#f8fafc",
                padding: 12,
                borderRadius: 8,
                marginTop: 8,
              }}
            >
              <div style={{ fontSize: 12, color: "#6b7280" }}>Today</div>
              <div style={{ fontWeight: 600 }}>09:00:53 — Present</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
