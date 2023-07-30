import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
function Data() {
  return (
    <div className="main-content">
      <div className="info-container">
        <div className="container-inside">
          <div className="img">
            <div className="icons-main">
              <FaDollarSign style={{ color: "white", fontSize: "1.2em" }} />
            </div>
            <span className="name">Net Profit</span>
          </div>
          <h2>302.1K</h2>
          <hr></hr>
          <span>
            <span style={{ color: "crimson" }}>2.9%</span> vs $300.3k last year
          </span>
        </div>
      </div>
      <div className="info-container">
        <div className="container-inside">
          <div className="img">
            <div className="icons-main">
              <FaStoreAlt style={{ color: "white", fontSize: "1.2em" }} />
            </div>
            <span className="name">Store</span>
          </div>
          <h2>12,900</h2>
          <hr></hr>
          <span>
            <span style={{ color: "limegreen" }}>12.9%</span> vs 1030 last year
          </span>
        </div>
      </div>
      <div className="info-container">
        <div className="container-inside">
          <div className="img">
            <div className="icons-main">
              <FaStoreAlt style={{ color: "white", fontSize: "1.2em" }} />
            </div>
            <span className="name">Product</span>
          </div>
          <h2>390,040</h2>
          <hr></hr>
          <span>
            <span style={{ color: "limegreen" }}>4.1%</span> vs 320,583 year
          </span>
        </div>
      </div>
      <div className="info-container">
        <div className="container-inside">
          <div className="img">
            <div className="icons-main">
              <FaStore style={{ color: "white", fontSize: "1.2em" }} />
            </div>
            <span className="name">Visitor</span>
          </div>
          <h2>3.1M</h2>
          <hr></hr>
          <span>
            <span style={{ color: "crimson" }}>1.7%</span> vs 3.3M last year
          </span>
        </div>
      </div>
    </div>
  );
}

export default Data;
