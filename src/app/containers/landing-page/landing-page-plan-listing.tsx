"use client";
import { Card, Tab, Tabs } from "@mui/material";
import React from "react";
import SwiperCore from "swiper";
import { Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const LandingPagePlanListing = () => {
  const SwiperConfig = {
    loop: true,
    grabCursor: true,
    speed: 5000,
    spaceBetween: 20,
    // cssMode: true,
    pagination: true,
  };
  SwiperCore.use([Autoplay, Parallax]);
  const data = [
    {
      title: "Premier Tee Times",
      description: "Priority access to the most exclusive courses",
      image: "Images/landing-plan-listing/premier-tee-times.png",
    },
    {
      title: "Signature Dining",
      description: "Priority access to the finest tables",
      image: "Images/landing-plan-listing/signature-dining.png",
    },
    {
      title: "Privileged Air Travel",
      description: "Unmatched comfort, ease, and exclusivity",
      image: "Images/landing-plan-listing/privileged-air-travel.png",
    },
    {
      title: "Global Travel Experiences",
      description: "Personalised travel with exclusive stays",
      image: "Images/landing-plan-listing/premier-tee-times.png",
    },
    {
      title: "Money Can’t Buy",
      description: "Exclusive experiences and personalized luxury",
      image: "Images/landing-plan-listing/signature-dining.png",
    },
    {
      title: "Exclusive Dining Access",
      description: "Seamless airport journey",
      image: "Images/landing-plan-listing/privileged-air-travel.png",
    },
  ];

  return (
    <section className="py-8">
      <div className="w-full  landing-page-plan-listing">
        <div className="flex justify-center">
          {/* <Tabs>
            <Tab label="Item One" />
            <Tab label="Item Two" />
          </Tabs> */}
        </div>
        <p className="header py-4 text-center">
          Unlock a world of limitless exclusivity
        </p>
      </div>
      <div className="ms-6 me-6">
        <Swiper
          className=""
          slidesPerView={3}
          centeredSlides={true}
          initialSlide={2}
          spaceBetween={25}
          loop={true}
        >
          {data.map((item, index) => (
            <SwiperSlide className="" key={index}>
              <Card key={index} className="landing-plan-list-card">
                <img className="" src={item.image}></img>
                <div className="card-content">
                  <span className="card-title">{item.title}</span>
                  <p className="card-description">{item.description}</p>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LandingPagePlanListing;
