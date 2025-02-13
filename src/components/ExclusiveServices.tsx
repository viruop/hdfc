"use client";

import React, { JSX } from "react";
import { ChatButton } from "./ChatButton";

interface HeroSectionProps {
  title: string;
  backgroundImage: string;
  minHeight?: string;
  textColor?: string;
  backgroundColor?: string;
}

export default function HeroSection({
  title,
  backgroundImage,
  minHeight = "700px",
  textColor = "white",
  backgroundColor = "bg-gray-200",
}: HeroSectionProps): JSX.Element {
  return (
    <section className={`overflow-hidden text-${textColor} ${backgroundColor}`}>
      <div
        className="flex justify-center relative flex-col pt-56 pr-8 pb-8 pl-20 w-full min-h-[700px] max-md:px-5 max-md:pt-24 max-md:max-w-full"
        style={{ minHeight }}
      >
        <img
          loading="lazy"
          src={backgroundImage}
          className="object-cover absolute inset-0 size-full"
          alt={title}
        />
        <h1 className="relative self-center text-7xl font-medium tracking-tighter text-center leading-[79px] w-[691px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
