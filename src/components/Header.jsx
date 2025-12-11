import React, { useContext } from "react";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`header shadow-sm px-4 py-3 d-flex justify-content-between align-items-center 
      ${theme === "light" ? "bg-white" : "bg-dark text-white"}`}
      style={{ transition: "0.3s" }}
    >
      <h4 className="fw-bold m-0">
        Welcome back, Arun Kashyap!
      </h4>

      <div className="d-flex align-items-center gap-4">

        {/* 🔔 Bell Icon */}
        <div className="position-relative">
          <FaBell size={22} color={theme === "dark" ? "white" : "black"} />
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-circle">
            5
          </span>
        </div>

        {/* 🌙 DARK / ☀️ LIGHT BUTTON */}
        <button
          onClick={toggleTheme}
          className={`btn border-0 p-2 rounded-circle 
            ${theme === "light" ? "btn-light" : "btn-secondary"}`}
          style={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {theme === "light" ? (
            <FaMoon size={18} />
          ) : (
            <FaSun size={18} color="orange" />
          )}
        </button>

        {/* 👤 Profile */}
        <div className="d-flex align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="profile"
            style={{ width: 40, borderRadius: "50%" }}
          />
          <div className="ms-2">
            <p className="fw-bold m-0">Arun Kashyap</p>
            <small className={`${theme === "dark" ? "text-light" : "text-muted"}`}>
              Employee
            </small>
          </div>
        </div>

        {/* 🔴 Logout */}
        <button className="btn btn-danger">Logout</button>
      </div>
    </div>
  );
}

export default Header;
