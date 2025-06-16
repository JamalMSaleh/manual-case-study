"use client";

import Image from "next/image";
import { Button } from "@mui/material";

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden bg-[url('/images/hero-bg.jpg')] bg-no-repeat bg-left-top bg-cover">
      <div className="container mx-auto px-6 pt-16">
        <div className="mb-16">
          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src="/images/hero-logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="space-y-8">
            <div className="pb-4 whitespace-nowrap">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Be good
              </h1>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                to yourself
              </h1>
            </div>
            <div className="pb-4 max-w-md">
              <p className="text-body text-secondary">
                We’re working around the clock to bring you a holistic approach
                to your wellness. From top to bottom, inside and out.
              </p>
            </div>
            <Button
              className="
            !bg-button-primary 
            !text-white 
            hover:!bg-button-hover 
            active:!bg-button-active 
            !text-xs 
            !px-7 
            !py-4 
            rounded-md 
            font-medium 
            normal-case
          "
            >
              Take the Quiz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
