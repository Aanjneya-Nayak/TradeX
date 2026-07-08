import React from "react";

function RightImage({
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
      <div
        className="row my-5 align-items-center"
        style={{ width: "90vw", margin: "0 auto" }}
      >
        <div className="col-md-6 p-5" style={{ width: "35vw" }}>
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <a href={learnMore} className="btn btn-secondary">
            Learn More
          </a>
        </div>

        <div className="col-md-6">
          <img src={imageUrl} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightImage;
