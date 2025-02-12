"use client";

import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <article className="flex flex-wrap grow shrink gap-10 items-center bg-white rounded-lg border border-solid border-zinc-100 min-h-52 min-w-60 w-[491px] max-md:max-w-full">
      <img
        loading="lazy"
        src={imageUrl}
        alt={title}
        className="object-contain grow shrink self-stretch my-auto rounded-lg aspect-[1.08] w-[179px]"
      />
      <div className="flex grow shrink gap-8 items-start self-stretch my-auto min-w-60 w-[314px]">
        <div className="flex-1 shrink w-full basis-0 min-w-60">
          <h2 className="max-w-full text-3xl font-semibold tracking-tight leading-none text-zinc-800 w-[293px]">
            {title}
          </h2>
          <p className="gap-4 mt-2 w-full text-lg leading-7 text-zinc-800">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

const ConciergeServices = () => {
  const services = [
    {
      title: "Table Reservations",
      description: "We offer table reservations at exclusive restaurants",
      imageUrl: "/Images/imperia/Table-Reservation.png",
    },
    {
      title: "Effortless Home Assistance",
      description: "Streamline your life with our Home Assistance services",
      imageUrl: "/Images/imperia/effortless.png",
    },
    {
      title: "Personalised Wellness Sessions",
      description: "Transform your health with our Diet & Nutrition sessions",
      imageUrl: "/Images/imperia/personalised.png",
    },
    {
      title: "Priority Medical Assistance",
      description: "Access reliable Ambulance Services when you need them most",
      imageUrl: "/Images/imperia/priorty.png",
    },
    {
      title: "Limited Edition Gifting",
      description:
        "Explore our Limited Edition gifts for unforgettable moments",
      imageUrl: "/Images/imperia/limited-edition.png",
    },
    {
      title: "Virtual Experiences",
      description: "Immerse yourself in our unique Virtual Experiences",
      imageUrl: "/Images/imperia/vr.png",
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-16 bg-rose-900 bg-opacity-10 max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1276px] max-md:max-w-full">
        <h1 className="text-4xl font-inter font-semibold leading-[44px] tracking-[-0.05em] text-centerfont-semibold text-center text-rose-900 max-md:max-w-full">
          Your Concierge Services, Redefined
        </h1>
        <div className="flex flex-wrap gap-12 items-start self-stretch mt-14 w-full max-md:mt-10 max-md:max-w-full">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        <button className="overflow-hidden gap-3 self-center px-10 py-4 mt-8 text-xl font-medium leading-tight text-center text-rose-900 border-2 border-solid border-[#891635] rounded-[32px] max-md:px-5">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default ConciergeServices;
