import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from "react-icons/fa"; 
import "../signin.css";

// #27ea66


function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  }); 
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");    // clear previous error
    setSuccess("");  // clear previous success
  
    console.log("Submit button clicked!");
    console.log("Sending data:", formData);
  
    try {
      const response = await axios.post("http://localhost:3000/api/signup", formData);
      console.log("User registered!", response.data);
      setSuccess("User registered successfully!");
      setTimeout(() => {
       window.location.reload();
    }, 1000); 

    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
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
        <h2>Create your account</h2>
          <br />  
          <form onSubmit={handleSubmit}>
            <div className="inputGr">
              <FaUser className="inputIcon" />
              <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
            </div>
            <div className="inputGr">
            <FaEnvelope className="inputIcon" />
              <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
            </div>
          <div className="inputGr">
            <FaLock className="inputIcon" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
          </div>
          <div className="inputGr">
            <FaPhoneAlt className="inputIcon" />
            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange}/>
          </div>
          <button type="submit" className="registerBtn">
            Register
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}

        <p className="loginLink">
          Already have an account? <a href="http://localhost:3001/Login">Login</a>
        </p>
      </div>
    </div>
  );
  
}
export default SignUp;