import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from "react-icons/fa"; 
import "./index.css";

// #27ea66


function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  console.log("Submit button clicked!");
  console.log("Sending data:", formData);

    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/", formData);
      console.log("User registered!", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
    }
  };
  return (
    <div className="container">
      <div className="SignUpForm">
        <h2>Create your account</h2>
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
        <p className="loginLink">
          Already have an account? <a href="?">Login</a>
        </p>
      </div>
    </div>
  );
  
}
export default SignUp;