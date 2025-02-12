"use client";

import React from "react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <article className="self-stretch my-auto min-w-60 w-[512px] max-md:max-w-full">
      <div className="flex relative flex-col w-full rounded-lg min-h-[628px] max-md:max-w-full">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative px-8 pb-8 rounded-lg pt-[524px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <h2 className="text-3xl font-semibold tracking-tight leading-none text-white max-md:max-w-full">
              {title}
            </h2>
            <p className="mt-1 text-lg leading-loose text-white max-md:max-w-full">
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

const UniquePrivileges = () => {
  const services = [
    {
      imageSrc: "/Images/imperia/fitness-session.png",
      title: "Fitness Sessions & Access to Gym",
      description: "Personalized fitness and premium gym access",
    },
    {
      imageSrc: "/Images/imperia/image-112.png",
      title: "Chauffeur On-Demand",
      description: "Professional drivers for stress-free travel",
    },
  ];
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-16 bg-rose-900 bg-opacity-10 max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1276px] max-md:max-w-full">
        <h1 className="text-4xl font-inter font-semibold leading-[44px] tracking-[-0.05em] text-centerfont-semibold text-center text-rose-900 max-md:max-w-full">
          Unveiling Your Unique Privileges
        </h1>
        <section className="flex flex-wrap gap-4 items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </section>

        <button className="overflow-hidden gap-3 self-center px-10 py-4 mt-8 text-xl font-medium leading-tight text-center text-rose-900 border-2 border-solid border-[#891635] rounded-[32px] max-md:px-5">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default UniquePrivileges;
