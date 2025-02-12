import { Card } from "@mui/material";
import React from "react";

const LandingComplimentary: React.FC = () => {
  const data = [
    {
      title: "Elite Access",
      description: "Be first in line for premium dining",
      image: "images/landing-complimentary/elite-access.png",
    },
    {
      title: "Bespoke Services",
      description: "Every detail crafted for your lifestyle",
      image: "images/landing-complimentary/bespoke-services.png",
    },
    {
      title: "Trusted Privacy",
      description: "Discretion you trust, privacy you deserve",
      image: "images/landing-complimentary/trusted-privacy.png",
    },
  ];
  return (
    <section className="p-12">
      <div>
        <p className=" landing-complimentary-header text-center">
          Where Exclusivity Redefines Every Moment
        </p>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Card className="relative landing-complimentary-card" key={index}>
            <img src={item.image} className="z-0"></img>
            <div className="gradient-overlay"></div>
            <div className="card-content">
              <span className="card-title">{item.title}</span>
              <p className="card-description">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LandingComplimentary;
