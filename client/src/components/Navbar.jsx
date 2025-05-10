  import React, { useEffect, useState } from "react";
  import { NavLink, useNavigate } from "react-router-dom";
  import logo from '../public/Logo.png';

  const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    
    useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    }, []);



    const handleLogout = () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("loginExpiry");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      navigate("/login");
    };

    const linkClass = ({ isActive }) =>
      isActive
        ? "bg-white text-blue hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
        : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

    return (
      <nav className="border-b border-[#090554]" style={{ backgroundColor: "#090554" }}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <NavLink className="flex items-center" to="/">
              <img className="h-20 w-auto" src={logo} alt="Global Estate" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Global Estate
              </span>
            </NavLink>

            {/* Navigation Links */}
            <div className="flex space-x-2 items-center">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/houses" className={linkClass}>
                Houses
              </NavLink>
              {isLoggedIn ? (
                <button onClick={handleLogout} className="text-white px-3 py-2 hover:bg-red-500 rounded-md">
                  Log Out
                </button>
              ) : (
                <NavLink to="/login" className={linkClass}>
                  Sign In
                </NavLink>
              )}
            </div>

          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;
