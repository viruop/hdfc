import React from "react";
import { ServiceCard } from "./ServiceCard";
import { Header } from "./ui/Header";

interface Service {
  imageSrc: string;
  title: string;
  description: string;
}

interface ExclusiveOffersProps {
  services: Service[];
  headerText: string;
  buttonText?: string;
  backgroundColor?: string;
  headerTextColor?: string;
  buttonClassName?: string;
  buttonTextColor?: string;
  sectionClassName?: string;
}

function ExclusiveOffers({
  services,
  headerText,
  buttonText = "Discover More",
  backgroundColor = "bg-rose-900",
  headerTextColor = "text-white",
  buttonClassName = "overflow-hidden gap-3 self-center px-10 py-4 mt-8 text-xl font-medium leading-tight text-center text-white border-2 border-white border-solid rounded-[32px] max-md:px-5",
  sectionClassName = "flex overflow-hidden flex-col justify-center items-center px-20 py-16 max-md:px-5",
}: ExclusiveOffersProps) {
  return (
    <section className={`${sectionClassName} ${backgroundColor}`}>
      <Header text={headerText} textColor={headerTextColor} />
      <div className="flex flex-wrap gap-4 mt-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <button className={buttonClassName}>{buttonText}</button>
    </section>
  );
}

export default ExclusiveOffers;
