"use client";

import Image from "next/image";
import React from "react";

export const ElevatedLivingHero: React.FC = () => {
  return (
    <section className="overflow-hidden text-center text-white bg-gray-200">
      <div className="flex relative flex-col justify-center items-center px-20 py-64 w-full min-h-[840px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <Image
          width={100}
          height={100}
          loading="lazy"
          src="/images/hero-image.png"
          alt="Luxury living background"
          className="object-cover absolute inset-0 size-full"
        />
        <section className="flex relative flex-col mb-0 max-w-full w-[901px] max-md:mb-2.5">
          <header className="w-full max-md:max-w-full">
            <h1 className="text-7xl font-medium tracking-tighter leading-[88px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
              Celebrating the Art of Elevated Living
            </h1>
            <p className="mt-6 text-2xl font-semibold tracking-tight leading-none max-md:max-w-full">
              Exclusive luxury services and experiences for you
            </p>
          </header>
          <button className="self-center mt-8 overflow-hidden gap-3 px-8 py-4 text-xl font-semibold leading-snug border-2 border-white border-solid rounded-[32px] hover:bg-white/10 transition-colors">
            Explore Premier Moments
          </button>
        </section>
      </div>
    </section>
  );
};

export default ElevatedLivingHero;
