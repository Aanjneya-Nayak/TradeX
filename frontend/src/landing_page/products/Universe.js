import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row p-3">
        <h2 className="text-center mt-5 mb-3">The TradeX Universe</h2>
        <h5 className="text-center text-muted">
          Extend your trading and investment experience even further with our
          partner platforms.
        </h5>
        <div className="col-md-4 text-center p-3 mt-4">
          <img
            src="media/streakLogo.png"
            alt="Streak"
            className="img-fluid mb-3"
            style={{ width: "100px" }}
          />

          <p>
            India's first no-code algo trading platform. Build, backtest, and
            deploy your trading strategies in minutes.
          </p>
        </div>
        <div className="col-md-4 text-center mt-4">
          <img
            src="media/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid mb-3"
            style={{ width: "100px" }}
          />

          <p>
            India's largest options trading platform. Get option strategies,
            real-time data, and trade directly from the platform.
          </p>
        </div>
        <div className="col-md-4 text-center mt-4">
          <img
            src="media/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid mb-3"
            style={{ width: "100px" }}
          />

          <p>
            Invest in ready-made portfolios of stocks and ETFs, based on a
            theme, strategy, or objective.
          </p>
        </div>
        <div className="col-md-4 text-center mt-4">
          <img
            src="media/zerodhaFundhouse.png"
            alt="Streak"
            className="img-fluid mb-3"
            style={{ width: "100px" }}
          />

          <p>
            India's first no-code algo trading platform. Build, backtest, and
            deploy your trading strategies in minutes.
          </p>
        </div>
        <div className="col-md-4 text-center mt-4">
          <img
            src="media/goldenpiLogo.png"
            alt="Sensibull"
            className="img-fluid mb-3"
            style={{ width: "100px" }}
          />

          <p>
            India's largest options trading platform. Get option strategies,
            real-time data, and trade directly from the platform.
          </p>
        </div>
        <div className="col-md-4 text-center mt-4">
          <img
            src="media/dittoLogo.png"
            alt="Smallcase"
            className="img-fluid mb-3"
            style={{ width: "100px" }}
          />

          <p>
            Invest in ready-made portfolios of stocks and ETFs, based on a
            theme, strategy, or objective.
          </p>
        </div>
        <a
          href="/signup"
          className="btn btn-primary mt-3 p-2"
          style={{ width: "25%", display: "block", margin: "1rem auto 0" }}
        >
          Sign Now
        </a>
      </div>
    </div>
  );
}

export default Universe;
