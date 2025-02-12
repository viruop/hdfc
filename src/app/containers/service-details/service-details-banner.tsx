import Image from "next/image";
import React from "react";

const ServiceDetailsBanner: React.FC = () => {
  return (
    <div className="relative">
      <img
        src={"/Images/service-details/Privilege-Complimentary-Benefits.png"}
        alt="banner"
        className="z-0"
      />
      <div className="absolute left-0 top-0 z-10 w-full h-full flex justify-center items-center">
        <div>
          <p className="text-4xl text-white text-center service-banner-title">
            Privilege Complimentary Benefits
          </p>
          <p className="mt-4 text-white text-center service-banner-description">
            {" "}
            Experience the finest with personalized travel, transfers, and care
            tailored for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsBanner;
