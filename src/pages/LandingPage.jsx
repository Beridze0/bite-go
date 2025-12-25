import React from "react";

import Navbar from "../ui/Navbar";

import FeaturesSection from "../components/landing/FeaturesSection";
import TopRestaurants from "../components/landing/TopRestaurants";
import HeroSection from "../components/landing/HeroSection";
import Wave from "../ui/Wave";

export default function LandingPage() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <HeroSection />
      <Wave />
      <TopRestaurants />
      <FeaturesSection />
    </div>
  );
}
