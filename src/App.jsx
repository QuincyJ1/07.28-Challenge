import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
function App() {
  return (
    <>
      <div className="grid-container">
        <Header />
        <Sidebar />
        <div className="item3">Menu2</div>
        <div className="item4">Main</div>
        <div className="item5">Right</div>
      </div>
    </>
  );
}

export default App;
