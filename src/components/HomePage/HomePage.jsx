import React from "react";
import "./HomePage.css";
import Sidebar from "../sidebar/Sidebar";
import RightSide from "../RightSide/RightSide";
import MainDash from "../MainDash/MainDash";
const HomePage = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
};

export default HomePage;
