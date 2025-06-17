"use client";

import FeaturesSection from "@/components/landing/FeaturesSection";
import FooterSection from "@/components/landing/FooterSection";
import HeroSection from "@/components/landing/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="mt-20">
        <FeaturesSection />
      </div>
      <div className="mt-20">
        <FooterSection />
      </div>
    </>
  );
}
