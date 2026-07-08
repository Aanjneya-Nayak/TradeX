import React from "react";

function LeftImage({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row my-5" style={{ width: "90vw", margin: "0 auto" }}>
        <div className="col-md-6">
          <img src={imageUrl} alt={productName} />
        </div>
        <div className="col-md-6 mt-5" style={{ width: "35vw" }}>
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <a href={tryDemo} className="btn btn-primary me-2">
            Try Demo
          </a>
          <a href={learnMore} className="btn btn-secondary">
            Learn More
          </a>
          <div className="mt-3">
            <a href={googlePlay} className="me-2">
              <img
                src="media/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/appStoreBadge.svg"
                alt="App Store"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
