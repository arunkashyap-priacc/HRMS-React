import React from "react";

export default function Payslips() {
  return (
    <div className="payslips-page" style={{ padding: "20px", fontFamily: "Segoe UI, sans-serif" }}>
      <h4>My Payslips</h4>
      <p className="text-muted" style={{ color: "#6c757d" }}>Download your monthly salary payslips</p>

      <div
        className="payslips-card"
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "20px",
          textAlign: "center",
          marginBottom: "30px",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/60/60761.png"
          alt="document"
          style={{ width: "80px", marginBottom: "15px" }}
        />
        <p>No payslips found for your account.</p>
        <a
          href="mailto:hr@example.com"
          style={{ color: "#0d6efd", textDecoration: "none" }}
        >
          If this seems wrong, please contact HR.
        </a>
      </div>

      <div
        className="about-payslips"
        style={{
          borderTop: "1px solid #ddd",
          paddingTop: "20px",
        }}
      >
        <h5>About Payslips</h5>
        <p>Payslips are generated every month by HR.</p>
        <p>They include salary, deductions and net pay.</p>
        <a
          href="mailto:hr@example.com"
          style={{ color: "#0d6efd", textDecoration: "none" }}
        >
          For missing payslips, please contact HR.
        </a>
      </div>
    </div>
  );
}
