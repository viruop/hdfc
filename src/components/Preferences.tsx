"use client";
import React, { useRef } from "react";
import { ServiceCard } from "./ServiceCard";
import { Header } from "./ui/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

interface Service {
  badge?: string;
  imageSrc: string;
  title: string;
  description: string;
}

interface PreferencesProps {
  services: Service[];
  headerText: string;
  buttonText?: string;
  backgroundColor?: string;
  headerTextColor?: string;
  buttonClassName?: string;
  buttonTextColor?: string;
  sectionClassName?: string;
}

function Preferences({
  services,
  headerText,
  buttonText = "Explore All Tailored Services",
  backgroundColor = "bg-rose-900",
  headerTextColor = "text-white",
  buttonClassName = `overflow-hidden gap-3 self-center px-10 py-4 mt-8 text-xl font-medium leading-tight text-center text-${backgroundColor} border-2 border-${backgroundColor} border-solid rounded-[32px] max-md:px-5`,
  sectionClassName = "flex overflow-hidden flex-col justify-center items-center py-16 max-md:px-5",
}: PreferencesProps) {
  const swiperRef = useRef<SwiperType>(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className={`${sectionClassName} ${backgroundColor}`}>
      <Header
        onFirstButtonClick={handlePrevClick}
        onSecondButtonClick={handleNextClick}
        showButtons
        text={headerText}
        textColor={headerTextColor}
      />
      <div className="w-full mt-8">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
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
            <SwiperSlide className={index === 0 ? "md:ml-24" : ""} key={index}>
              <ServiceCard
                imageSrc={service.imageSrc}
                title={service.title}
                description={service.description}
                badge={service?.badge}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        className={`overflow-hidden gap-3 self-center px-10 py-4 mt-8 text-xl font-medium leading-tight text-center text-${backgroundColor} border-2 border-${backgroundColor} border-solid rounded-[32px] max-md:px-5`}
      >
        {buttonText}
      </button>
    </section>
  );
}

export default Preferences;
