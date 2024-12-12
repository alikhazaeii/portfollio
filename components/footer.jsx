"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { FloatingDockDemo } from "@/components/ui/navbarDemo"
export function Footer() {
  return (
    (<div id="contact"
      className="h-[30rem] w-full rounded-md dark:bg-[#000319] bg-[#dee4e7] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 absolute top-2">
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-orange-400  text-center font-sans font-bold  ">
          Contact
        </h1>
        <p
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm md:text-xl text-center relative z-10 ">
          Thank you for checking out my website!
        </p>
    
      </div>
      <div className="relative z-20">
      <FloatingDockDemo />

      </div>
      <BackgroundBeams />
    </div>)
  );
}
