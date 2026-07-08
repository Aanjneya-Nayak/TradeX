import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/homeHero.png"
          alt="Hero"
          className="mb-3"
          style={{
            width: "80vw",
            maxWidth: "100%",
            margin: "0 auto",
            display: "block",
          }}
        />

        <h1 className="mt-2">Invest in everything</h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
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

export default Hero;
