"use client";

import React from "react";
import { ChatButton } from "./ChatButton";
// import { ChatButton } from "./ChatButton";

export default function ExclusiveServices() {
  return (
    <section className="overflow-hidden text-white bg-gray-200">
      <div className="flex relative flex-col pt-56 pr-8 pb-8 pl-20 w-full min-h-[700px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="/Images/imperia/hero-image.png"
          className="object-cover absolute inset-0 size-full"
          alt="Exclusive services background"
        />
        <h1 className="landing-hero-title text-white relative self-center text-7xl font-medium tracking-tighter text-center leading-[79px] w-[691px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
          Exclusive services for a select few
        </h1>
        <ChatButton />
      </div>
    </section>
  );
}
