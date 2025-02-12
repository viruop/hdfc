"use client";

import React from "react";

export const ServicesRecommendation: React.FC = () => {
  return (
    <section className="flex flex-col justify-end py-20 pl-20 bg-purple-900 max-md:pl-5">
      <header className="flex flex-wrap gap-5 justify-between self-end mr-9 max-w-full w-[1070px] max-md:mr-2.5">
        <h2 className="my-auto text-4xl font-semibold tracking-tighter leading-none text-center text-white max-md:max-w-full">
          Inspired by Your Preferences
        </h2>
        <div className="flex gap-4">
          <button
            className="object-contain shrink-0 w-14 aspect-[0.87] rounded-[64px]"
            aria-label="Previous"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/a81804d2a1984285a5bfdfde53f00cf8/e42234e64036e5e71ff0708f8268ef434e5066ff875b8fbb261999c1a941e016?placeholderIfAbsent=true"
              alt=""
            />
          </button>
          <button
            className="object-contain shrink-0 w-14 aspect-[0.87] rounded-[64px]"
            aria-label="Next"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/a81804d2a1984285a5bfdfde53f00cf8/49d97c76014af4ca402ee3b98b620eb419df42f0f030679928566e5753dd88ad?placeholderIfAbsent=true"
              alt=""
            />
          </button>
        </div>
      </header>

      <div className="flex flex-wrap gap-4 mt-8">
        {[
          {
            image:
              "https://cdn.builder.io/api/v1/image/assets/a81804d2a1984285a5bfdfde53f00cf8/24b6e2dfa0ffd68d504c9d1be6c4b4ab4064a4631c92f1993ef16794a3e4e238?placeholderIfAbsent=true",
            label: "You booked this 7 days ago",
            title: "Premier Tee Times",
            description: "Priority access to the most exclusive courses",
          },
          {
            image:
              "https://cdn.builder.io/api/v1/image/assets/a81804d2a1984285a5bfdfde53f00cf8/24b6e2dfa0ffd68d504c9d1be6c4b4ab4064a4631c92f1993ef16794a3e4e238?placeholderIfAbsent=true",
            label: "You booked this 7 days ago",
            title: "Premier Tee Times",
            description: "Priority access to the most exclusive courses",
          },
          {
            image:
              "https://cdn.builder.io/api/v1/image/assets/a81804d2a1984285a5bfdfde53f00cf8/24b6e2dfa0ffd68d504c9d1be6c4b4ab4064a4631c92f1993ef16794a3e4e238?placeholderIfAbsent=true",
            label: "You booked this 7 days ago",
            title: "Premier Tee Times",
            description: "Priority access to the most exclusive courses",
          },
          {
            image:
              "https://cdn.builder.io/api/v1/image/assets/a81804d2a1984285a5bfdfde53f00cf8/24b6e2dfa0ffd68d504c9d1be6c4b4ab4064a4631c92f1993ef16794a3e4e238?placeholderIfAbsent=true",
            label: "You booked this 7 days ago",
            title: "Premier Tee Times",
            description: "Priority access to the most exclusive courses",
          },
        ].map((service, index) => (
          <article
            key={index}
            className="flex relative flex-col rounded-lg min-h-[628px]"
          >
            <img
              loading="lazy"
              src={service.image}
              className="object-cover  object-center absolute inset-0 size-full"
              alt=""
            />
            <div className="relative z-10 flex flex-col items-start pt-4 pr-8 pb-8 pl-4 w-full rounded-lg min-h-[628px] max-md:pr-5 max-md:max-w-full">
              <span className="relative gap-2.5 self-stretch px-4 py-3 text-lg font-semibold leading-tight text-center text-white bg-black bg-opacity-10 rounded-[32px]">
                {service.label}
              </span>
              <div className="relative ml-4 mt-[462px] max-md:mt-10 max-md:max-w-full">
                <h3 className="text-3xl font-semibold tracking-tight leading-none text-white max-md:max-w-full">
                  {service.title}
                </h3>
                <p className="mt-1 text-lg leading-loose text-white max-md:max-w-full">
                  {service.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button className="overflow-hidden gap-3 self-center px-10 py-4 mt-8 text-xl font-medium leading-tight text-center text-white border-2 border-white border-solid rounded-[32px] max-md:px-5">
        Explore All Tailored Services
      </button>
    </section>
  );
};

export default ServicesRecommendation;
