"use client";

import React from "react";
import { ServiceCard } from "./ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

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
  const isMobile = window.innerWidth <= 768; // Check if it's a mobile screen

  return (
    <section className={`${sectionClassName} ${backgroundColor}`}>
      <div className="flex flex-col items-center w-full max-w-[1276px] max-md:max-w-full">
        <h1 className={`${headerClassName} ${textColor}`}>{title}</h1>

        {isMobile ? (
          // Use Swiper for mobile view
          <div className="w-full mt-8">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="w-full"
            >
              {services.map((service, index) => (
                <SwiperSlide
                  className={index === 0 ? "md:ml-24" : ""}
                  key={index}
                >
                  <ServiceCard
                    imageSrc={service.imageSrc}
                    title={service.title}
                    description={service.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          // Regular layout for larger screens
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
        )}

        <button className={buttonClassName}>{buttonText}</button>
      </div>
    </section>
  );
};

export default UniquePrivileges;
