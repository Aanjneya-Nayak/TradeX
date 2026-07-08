import React from "react";

function Hero() {
  return (
    <div className="container ">
      <div className="row p-5 mt-5 text-center">
        <h2>Pricing</h2>
        <p className="text-muted">
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
      </div>
      <div className="row p-5 mt-5 border-bottom text-center">
        <div className="col-md-4">
          <img
            src="media/pricingEquity.svg"
            alt="Equity Pricing"
            style={{ width: "60%" }}
          />
          <h3>Free Equity Delivery</h3>
          <p className="text-muted fs-6">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-md-4">
          <img src="media/intradayTrades.svg" alt="Intraday Pricing" style={{ width: "60%" }} />
          <h3>Intraday and F&O Trades</h3>
          <p className="text-muted fs-6">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-md-4">
          <img src="media/pricing0.svg" alt="Commodities Pricing" style={{ width: "60%" }}   />
          <h3>Free direct MF</h3>
          <p className="text-muted fs-6">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Hero;
