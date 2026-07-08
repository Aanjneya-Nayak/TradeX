import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <div className="col-8">
          <a href="/brokerage-calculator" className="text-decoration-none">
            {" "}
            <h5 style={{ textAlign: "left" }}>Brokerage Calculator</h5>
          </a>
          <ul
            className="text-muted fs-6 p-4"
            style={{ textAlign: "left", lineHeight: "2" }}
          >
            <li>Zero brokerage on equity trades</li>
            <li>Flat Rs. 20 per order on intraday F&O trades</li>
            <li>Rs. 20 per order on options trading</li>
            <li>Free real-time market data and advanced charts</li>
            <li>Direct market access with ultra-low latency</li>
          </ul>
        </div>
        <div className="col-4">
          <a href="/brokerage-calculator" className="text-decoration-none">
            {" "}
            <h5 style={{ textAlign: "left" }}>List of charges</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
