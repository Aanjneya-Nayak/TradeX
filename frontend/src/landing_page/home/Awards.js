import React from "react";

function Awards() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 text-center p-5">
          <img
            src="media/largestBroker.svg"
            alt="Awards"
            style={{ width: "85%", maxWidth: "100%" }}
          />
        </div>
        <div className="col-6 p-5">
          <h1 className="mb-3">Largest stock broker in India</h1>
          <p className="mb-5">
            With over 5 million clients, we contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row" style={{ lineHeight: "26px" }}>
            <div className="row mb-4">
              <div className="col-6">
                <ul>
                  <li>Futures and Options</li>
                  <li>Equity Shares</li>
                  <li>Mutual Funds</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>Stocks & IPOs</li>
                  <li>Commodity derivatives</li>
                  <li>Bonds and Government Securities</li>
                </ul>
              </div>
            </div>
            <img src="media/pressLogos.png" style={{ width: "90%" }}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
