import React from "react";
import "../App.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <span>Dashboard</span>
        </li>
        <li>
          <span>Product</span>
          <div className="notification">2</div>
        </li>
        <li>
          <span>Store</span>
        </li>
        <li>
          <span>Visitor</span>
        </li>
        <li>
          <span>Analytics</span>
        </li>
        <li>
          <span>Notification</span>
          <div className="notification">11</div>
        </li>
        <li>
          <span className="help-center">Help Center</span>
        </li>
        <li>
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
