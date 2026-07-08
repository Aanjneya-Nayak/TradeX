import React from "react";

function Education() {
  return (
    <div className="container my-5 border-top">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media/education.svg"
            alt="Education"
            className="img-fluid float-end"
            style={{ width: "80%" }}
          ></img>
        </div>
        <div className="col-6 p-5">
          <h3 className="mb-3">Free and open market education</h3>
          <p className="mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="text-decoration-none mb-6">
            Varsity &nbsp; <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mb-4 mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="text-decoration-none">
            TradingQ&A &nbsp; <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
