"use client";

import React from "react";
import { ServiceCard } from "./ServiceCard";

interface Service {
  imageSrc: string;
  title: string;
  description: string;
}

interface UniquePrivilegesProps {
  title: string;
  services: Service[];
  backgroundColor?: string;
  textColor?: string;
  buttonText?: string;
  buttonClassName?: string;
  headerClassName?: string;
  sectionClassName?: string;
}

const UniquePrivileges: React.FC<UniquePrivilegesProps> = ({
  title,
  services,
  backgroundColor = "bg-rose-900 bg-opacity-10",
  textColor = "text-rose-900",
  buttonText = "Discover More",
  buttonClassName = "overflow-hidden gap-3 self-center px-10 py-4 mt-8 text-xl font-medium leading-tight text-center text-rose-900 border-2 border-solid border-[#891635] rounded-[32px] max-md:px-5",
  headerClassName = "text-4xl mb-4 font-inter font-semibold leading-[44px] tracking-[-0.05em] text-center font-semibold",
  sectionClassName = "flex overflow-hidden flex-col justify-center items-center px-20 py-16 max-md:px-5",
}) => {
  return (
    <section className={`${sectionClassName} ${backgroundColor}`}>
      <div className="flex flex-col items-center w-full max-w-[1276px] max-md:max-w-full">
        <h1 className={`${headerClassName} ${textColor}`}>{title}</h1>
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

        <button className={buttonClassName}>{buttonText}</button>
      </div>
    </section>
  );
};

export default UniquePrivileges;
