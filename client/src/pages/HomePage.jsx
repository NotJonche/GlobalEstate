import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import HouseListing from "../components/HouseListing";
import "../index.css";
import ViewAllHouses from "../components/ViewAllHouses";
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <HouseListing isHome = {true} />
      <ViewAllHouses />
    </>
  );
};

export default HomePage;
