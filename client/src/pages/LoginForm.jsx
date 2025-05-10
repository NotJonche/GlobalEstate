import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "../signin.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const reason = localStorage.getItem("logoutReason");
    if (reason) {
      alert(reason);
      localStorage.removeItem("logoutReason");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:3000/login", formData);
      setSuccess("Redirecting you...");

      // Set session for 10 seconds (testing purpose)
      const expiryTime = new Date().getTime() + 10 * 1000;
      
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loginExpiry", expiryTime);

      if (response.data?.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      if (error.response?.data?.mssg) {
        setError(error.response.data.mssg);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <div className="SignUpForm">
        <h2>Login to your account</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="inputGr">
            <FaEnvelope className="inputIcon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputGr">
            <FaLock className="inputIcon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="registerBtn">
            Login
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}

        <p className="loginLink">
          New to this website? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
