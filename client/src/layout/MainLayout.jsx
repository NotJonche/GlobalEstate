import React, {} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useIdleTimer } from "react-idle-timer";

const MainLayout = () => {
  const navigate = useNavigate();

  const onIdle = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      localStorage.setItem("logoutReason", "You were logged out due to inactivity.");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("loginExpiry");
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  useIdleTimer({
    timeout: 5 * 60 * 1000, // 5 min
    // timeout: 10_000, // 10 second test
    onIdle,
    debounce: 500,
  });

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
