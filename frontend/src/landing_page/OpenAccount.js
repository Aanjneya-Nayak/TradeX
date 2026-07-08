import React from "react";
import { Link } from "react-router-dom";

function OpenAccout() {
  return (
    <div className="container p-5 mb-5 border-top">
      <div className="row text-center">
        <h2 className="mt-2">Open a Zerodha account</h2>
        <p className="fs-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link
          to="/signup"
          className="btn btn-primary mt-3 p-2"
          style={{ width: "25%", display: "block", margin: "1rem auto 0" }}
        >
          Sign Now
        </Link>
      </div>
    </div>
  );
}

export default OpenAccout;
