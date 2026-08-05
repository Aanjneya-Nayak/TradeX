import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL ||
  (typeof window !== "undefined"
    ? window.location.origin + "/dashboard"
    : "/dashboard");

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/auth/me");
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      setIsAuthenticated(false);
      window.location.href = "/";
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg border-bottom bg-body-tertiary sticky-top landing-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="media/TradeX.png"
              alt="TradeX"
              style={{ width: "150px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 mb-2 mb-lg-0 justify-content-end gap-3">
              {!isAuthenticated && (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
              {isAuthenticated && (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href={DASHBOARD_URL}
                      target="_self"
                      rel="noopener noreferrer"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#logout"
                      className="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogout();
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/support">
                  Support
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search"></form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
