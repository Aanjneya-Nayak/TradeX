import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 border-top mt-5">
        <h1 className="fs-2 text-center">People</h1>
      </div>
      <div className="row p-5" style={{ width: "80vw" }}>
        <div className="col-6 text-center">
          <img
            src="media/professional-photo.jpeg"
            alt="Professional Photo"
            style={{ width: "60%", borderRadius: "100%" }}
          />
          <h5 className="text-muted">Aanjneya Nayak</h5>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>
        <div className="col-6">
          <p>
            Aanjneya is the founder and CEO of TradeX. He started the company in
            2026 with the vision of breaking all barriers that traders and
            investors face in India in terms of cost, support, and technology.
            Under his leadership, TradeX has become the biggest stock broker in
            India, serving over 1.6+ crore clients and contributing over 15% of
            all Indian retail trading volumes.
          </p>
          <p>
            Aanjneya is passionate about empowering retail traders and investors
            through technology and education. He is also the founder of Nestora.
          </p>
          <p>Playing Table-Tennis is his zen.</p>
          <p>
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/nayakaanjneya2007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
