import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
FaBars,
FaHome,
FaUserClock,
FaChartLine,
FaWallet,
FaFileInvoice,
FaClipboardList,
FaCalendar,
} from "react-icons/fa";


function Sidebar({ toggle, setToggle }) {
const route = useLocation().pathname;


const menu = [
{ to: "/", icon: <FaHome />, label: "Dashboard" },
{ to: "/clock", icon: <FaUserClock />, label: "Clock" },
{ to: "/attendance", icon: <FaUserClock />, label: "Attendance" },
{ to: "/performance", icon: <FaChartLine />, label: "Performance" },
{ to: "/wallet", icon: <FaWallet />, label: "Wallet" },
{ to: "/payslips", icon: <FaFileInvoice />, label: "Payslips" },
{ to: "/leave", icon: <FaClipboardList />, label: "Leave" },
{ to: "/holidays", icon: <FaCalendar />, label: "Holidays" },
];


return (
<div className={`sidebar bg-white shadow ${toggle ? "open" : "close"}`}>
<div className="toggle-btn" onClick={() => setToggle(!toggle)}>
<FaBars size={22} />
</div>


<ul className="menu-list">
{menu.map((item) => (
<li key={item.to} className={route === item.to ? "active-link" : ""}>
<Link to={item.to}>
{item.icon} <span>{item.label}</span>
</Link>
</li>
))}
</ul>
</div>
);
}
export default Sidebar;