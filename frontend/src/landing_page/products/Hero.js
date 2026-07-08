import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row my-5">
        <h2 className="text-center mt-5 mb-3">Our Products</h2>
        <h4 className="text-center text-muted">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="text-center my-3">
          Check out our&nbsp;
          <a
            href="/products"
            className="text-decoration-none "
            style={{ fontWeight: "500" }}
          >
            investment offerings →
          </a>
        </p>
      </div>
      <div className="row border-top mt-5"></div>
    </div>
  );
}

export default Hero;
