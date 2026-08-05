import React from "react";

function Stats() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-5" style={{ padding: "3rem" }}>
          <h2 className="mb-5">Trust with confidence</h2>

          <h4 className="text-muted">Customer-first always</h4>
          <p className="text-muted mb-3">
            That's why 1.6+ crore customers trust TradeX with ~ ₹6 lakh crores
            of equity investments, making us India's largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h4 className="text-muted">No spam or gimmicks</h4>
          <p className="text-muted mb-3">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
          </p>
          <h4 className="text-muted">The TradeX universe</h4>
          <p className="text-muted mb-3">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your
            needs.{" "}
          </p>
          <h4 className="text-muted">Do better with money</h4>
          <p className="text-muted mb-3">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.{" "}
          </p>
        </div>
        <div className="col-7">
          <img src="media/ecosystem.png" style={{ width: "95%" }}></img>
          <div className="text-center">
            <a href="#" className="mx-5 text-decoration-none">
              Explore our products &nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" className="text-decoration-none">
              Try Kite demo &nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
