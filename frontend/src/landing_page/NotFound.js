import React from "react";

function NotFound() {
  return (
    <div className="container p-5 mb-5 border-top">
      <div className="row text-center">
        <h2 className="mt-2">Page Not Found</h2>
        <p className="fs-5">
          The page you are looking for does not exist. Please check the URL and
          try again.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
