import React from "react";

import FeaturesSection from "../components/landing/FeaturesSection";
import HeroSection from "../components/landing/HeroSection";
import TopRestaurants from "../components/landing/TopRestaurants";
import Wave from "../ui/Wave";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Wave />
      <TopRestaurants />
      <FeaturesSection />
    </div>
  );
}
