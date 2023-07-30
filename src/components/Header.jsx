import React from "react";
import icon11 from "../components/Img/icon11.png";
import icon12 from "../components/Img/icon12.png";
import icon13 from "../components/Img/icon13.png";

function Header() {
  return (
    <div className="item1">
      <input
        className="input"
        type="text"
        size="36"
        value="Search anything..."
      />
      <img className="search-icon" src={icon13} alt="" />
      <img className="notification-icon" src={icon11} alt="" />
      <div className="border"></div>
      <div className="info">
        <img className="profile-pic" src={icon12} alt="Logo" />
        <p className="name">Maxie Mon Wachid</p>
        <p className="socials">@Maxie Mon Wachid</p>
        <select className="arrow" name="" id=""></select>
      </div>
      <p>Welcome back, Maxie</p>
    </div>
  );
}

export default Header;
