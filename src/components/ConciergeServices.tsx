"use client";

import React from "react";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

interface ConciergeServicesProps {
  title?: string;
  services: Service[];
  backgroundColor?: string;
  titleColor?: string;
  buttonText?: string;
  buttonClassName?: string;
  cardClassName?: string;
  titleClassName?: string;
}

const ConciergeServices: React.FC<ConciergeServicesProps> = ({
  title = "Your Concierge Services, Redefined",
  services,
  backgroundColor = "bg-rose-900 bg-opacity-10",
  titleColor = "text-rose-900",
  buttonText = "Discover More",
  buttonClassName = "overflow-hidden gap-3 self-center px-10 py-4 mt-8 text-xl font-medium leading-tight text-center text-rose-900 border-2 border-solid border-[#891635] rounded-[32px] max-md:px-5",
  cardClassName = "flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300",
  titleClassName = "text-4xl font-inter font-semibold leading-[44px] tracking-[-0.05em] text-centerfont-semibold text-center max-md:max-w-full",
}) => {
  return (
    <section
      className={`flex overflow-hidden flex-col justify-center items-center px-20 py-16 ${backgroundColor} max-md:px-5`}
    >
      <div className="flex flex-col items-center w-full max-w-[1276px] max-md:max-w-full">
        <h1 className={`${titleClassName} ${titleColor}`}>{title}</h1>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <article key={index} className={cardClassName}>
                <div className="relative w-1/2 h-auto">
                  <div className="aspect-[4/3]">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 20vw"
                    />
                  </div>
                </div>
                <div className="w-2/3 p-4 md:p-6 flex flex-col justify-center">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button className={buttonClassName}>{buttonText}</button>
      </div>
    </section>
  );
};

export default ConciergeServices;
