import React from "react";
import "../Styles/MiddleSection.css";
import Goals from "./Goals";

function MiddleSection() {
  return (
    <div className="container">
      {/* <h1>Dashboard</h1> */}
      <div className="ReceivingDetails">
        <div className="ReceivingCard">
          <h2>7,222</h2>
          <h3>Today's Receiving</h3>
          <p>+8% from yesterday</p>
        </div>
        <div className="ReceivingCard" id="secondary-card">
          <h2>7,222</h2>
          <h3>Last Week’s Receiving</h3>
          <p>+8% from yesterday</p>
        </div>
        <div className="ReceivingCard" id="third-card">
          <h2>7,222</h2>
          <h3>Last Month’s Receiving</h3>
          <p>+8% from yesterday</p>
        </div>
      </div>
      <div className="mapSection">
        <img src="/Images/Basemap.png" alt="map" />
      </div>

      <div>
        <Goals />
      </div>
    </div>
  );
}

export default MiddleSection;
