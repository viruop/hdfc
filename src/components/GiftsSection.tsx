"use client";

import React from "react";
import { Header } from "./ui/Header";

interface GiftCardProps {
  logo: string;
  backgroundImage: string;
  title: string;
}

const GiftCard: React.FC<GiftCardProps> = ({
  logo,
  backgroundImage,
  title,
}) => {
  return (
    <article className="w-[33%] max-md:ml-0 max-md:w-full">
      <div className="grow text-4xl font-semibold leading-tight text-white max-md:mt-4 max-md:max-w-full">
        <div className="flex relative flex-col items-start pt-4 pr-20 pb-12 pl-4 w-full rounded-lg min-h-[628px] max-md:pr-5 max-md:max-w-full">
          <img
            loading="lazy"
            src={backgroundImage}
            className="object-cover absolute inset-0 size-full"
            alt="Gift card background"
          />
          <img
            loading="lazy"
            src={logo}
            className="object-contain max-w-full aspect-[1.88] w-[141px] relative"
            alt="Brand logo"
          />
          <h3 className="relative mt-96 ml-4 max-md:mt-10 max-md:ml-2.5">
            {title}
          </h3>
        </div>
      </div>
    </article>
  );
};

const GiftsSection = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-16 bg-stone-200  max-md:px-5">
      <Header text="Gifts as Unique as You" textColor="text-purple-900" />
      <div className="max-md:max-w-full">
        <div className="flex pt-4 gap-5 max-md:flex-col">
          <GiftCard
            logo="/Images/imperia/bvlgari.png"
            backgroundImage="/Images/imperia/watch.png"
            title="BvlgariSerpenti Spiga"
          />
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/Images/imperia/wach2.png"
              className="object-contain grow w-full rounded-lg aspect-[0.81] max-md:mt-4 max-md:max-w-full"
              alt="Gift item"
            />
          </div>
          <GiftCard
            logo="/Images/imperia/amiri.png"
            backgroundImage="/Images/imperia/shoes.png"
            title="AMIRI-Leather MA-1 Sneakers"
          />
        </div>
      </div>
      <button className="overflow-hidden gap-3 text-purple-900 self-center px-10 py-4 mt-8 text-xl font-medium leading-tight text-center  border-2 border-purple-900 border-solid rounded-[32px] max-md:px-5">
        Discover More
      </button>
    </section>
  );
};

export default GiftsSection;
