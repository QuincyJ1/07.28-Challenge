import Icon from "./Img/icon.png";
import Icon2 from "./Img/icon2.png";
import Icon3 from "./Img/icon3.png";
import Icon4 from "./Img/icon4.png";
import Icon5 from "./Img/icon5.png";
import Icon6 from "./Img/icon6.png";
import Icon7 from "./Img/icon7.png";
import Icon8 from "./Img/icon8.png";
import Icon9 from "./Img/icon9.png";
import Icon10 from "./Img/icon10.png";

import "../App.css";

function Sidebar() {
  return (
    <div className="item2">
      <div className="margin">
        <img src={Icon} alt="Logo" />
      </div>
      <p className="logo-text">Princie</p>
      <button className="button btn-clr">
        <img className="pic" src={Icon2} alt="Logo" />
        <span>Dashboard</span>
      </button>
      <button className="button">
        <img className="pic" src={Icon3} alt="Logo" />
        <span>Product</span>
        <span className="button2">2</span>
      </button>
      <button className="button">
        <img className="pic" src={Icon4} alt="Logo" />
        <span>Store</span>
      </button>
      <button className="button">
        <img className="pic" src={Icon5} alt="Logo" />
        <span>Visitor</span>
      </button>
      <button className="button">
        <img className="pic" src={Icon6} alt="Logo" />
        <span>Analytics</span>
      </button>
      <button className="button">
        <img className="pic" src={Icon7} alt="Logo" />
        <span>Notification</span>
        <span className="button2">11</span>
      </button>
      <div className="block">0</div>
      <button className="button">
        <img className="pic" src={Icon8} alt="Logo" />
        <span>Help Center</span>
      </button>
      <button className="button">
        <img className="pic" src={Icon9} alt="Logo" />
        <span>Settings</span>
      </button>
      <div className="text">
        <img className="pic" src={Icon10} alt="Logo" />
        <span>Dark Mode</span>
        <button className="button3">
          <span className="button4"></span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
