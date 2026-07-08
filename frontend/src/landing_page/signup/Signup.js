import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

const Signup = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        await axios.get(`${API_URL}/auth/me`, {
          withCredentials: true,
        });
        window.location.href = FRONTEND_URL;
      } catch (sessionError) {
        // Stay on the auth screen when the user is not signed in.
      }
    };

    checkSession();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!isLoginPage && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setIsSubmitting(true);

      const endpoint = isLoginPage ? "/auth/login" : "/auth/signup";
      const payload = isLoginPage
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          };

      await axios.post(`${API_URL}${endpoint}`, payload, {
        withCredentials: true,
      });

      window.location.href = FRONTEND_URL;
    } catch (requestError) {
      setError(
        requestError.response?.data?.error ||
          "Unable to complete the request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-shell">
        <div className="auth-hero">
          <p className="auth-kicker">TradeX Account Access</p>
          <h1>{isLoginPage ? "Welcome back" : "Create your account"}</h1>
          <p>
            Get secure access to your holdings, positions, and order flow with a
            JWT-backed session shared across the website.
          </p>

          <div className="auth-points">
            <div>
              <span>1</span>
              <p>Protected API calls with HTTP-only cookie authentication.</p>
            </div>
            <div>
              <span>2</span>
              <p>One login works across the landing site and dashboard app.</p>
            </div>
            <div>
              <span>3</span>
              <p>Fast onboarding with a clean, mobile-friendly signup flow.</p>
            </div>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-card-header">
            <p className="auth-label">{isLoginPage ? "Login" : "Signup"}</p>
            <h2>
              {isLoginPage ? "Sign in to continue" : "Open your TradeX account"}
            </h2>
            <p>
              {isLoginPage
                ? "Use your email and password to continue to the dashboard."
                : "Create a new account to access the dashboard and trading tools."}
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLoginPage && (
              <label>
                Full name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </label>
            )}

            <label>
              Email address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </label>

            {!isLoginPage && (
              <label>
                Confirm password
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat your password"
                  required
                />
              </label>
            )}

            {error && <div className="auth-error">{error}</div>}

            <button
              type="submit"
              className="auth-submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Please wait..."
                : isLoginPage
                  ? "Login"
                  : "Create account"}
            </button>
          </form>

          <div className="auth-switch">
            <span>
              {isLoginPage ? "New here?" : "Already have an account?"}
            </span>
            <Link to={isLoginPage ? "/signup" : "/login"}>
              {isLoginPage ? "Create an account" : "Login instead"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
