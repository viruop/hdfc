import React from "react";

const LandingPageHero: React.FC = () => {
  return (
    <section className="relative">
      <div className="h-full w-full z-0">
        <video src="videos/hero-section/banner-video.mp4" autoPlay loop muted />
      </div>
      <div className="h-full w-full absolute left-0 top-0 landing-slider-content-main">
        <div className=" z-10 h-full flex items-center justify-center">
          <div className="landing-hero-content">
            <p className="landing-hero-title text-white">
              Celebrating the Art of Elevated Living
            </p>
            <p className="text-white landing-hero-description">
              Exclusive luxury services and experiences for you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageHero;
