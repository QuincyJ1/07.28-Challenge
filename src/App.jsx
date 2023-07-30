import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Data from "./components/Data";

function App() {
  return (
    <>
      <div className="grid-container">
        <Header />
        <Sidebar />
        <div className="item3">
          <Data />
        </div>
        <div className="item4">Main</div>
        <div className="item5">Main</div>
      </div>
    </>
  );
}

export default App;
