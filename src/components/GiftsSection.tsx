"use client";

import React from "react";

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

const SectionHeader = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-end mr-9 max-w-full w-[1015px] max-md:mr-2.5">
      <h2 className="my-auto text-4xl font-semibold tracking-tighter leading-none text-center text-purple-900">
        Gifts as Unique as You
      </h2>
      <nav className="hidden lg:flex gap-4">
        <img
          loading="lazy"
          className="object-contain shrink-0 w-14 aspect-[0.87] rounded-[64px]"
          alt="Navigation button left"
          src="/Images/imperia/arrow.png"
        />

        <img
          loading="lazy"
          className="object-contain shrink-0 w-14 aspect-[0.87] rounded-[64px]"
          alt="Navigation button right"
          src="/Images/imperia/arrow2.png"
        />
      </nav>
    </header>
  );
};

const GiftsSection = () => {
  return (
    <section className="flex overflow-hidden flex-col py-20 bg-stone-200">
      <SectionHeader />
      <div className="flex flex-col px-20 mt-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
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
        <button className="overflow-hidden gap-3 self-center px-10 py-4 mt-8 text-xl font-medium leading-tight text-center text-purple-900 border-2 border-solid border-[#52286A] rounded-[32px] max-md:px-5">
          Browse the Exclusive Collection
        </button>
      </div>
    </section>
  );
};

export default GiftsSection;
