import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Card } from "@mui/material";

const ServiceDetailsListing: React.FC = () => {
  const data = [
    {
      title: "",
      description: "",
      image: "",
    },
    {
      title: "",
      description: "",
      image: "",
    },
  ];
  return (
    <div>
      <div className="flex justify-center py-10">
        <div className=" flex justify-center items-center service-listing">
          <CheckCircleIcon className="service-check-icon" />
          <p className="text-xl font-1000">Complimentary Benefit Remaining</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-3/4 grid grid-cols-3 gap-4">
          <Card>
            <img src="/DefaultImage.png"></img>
          </Card>
          <Card>
            <img src="/DefaultImage.png"></img>
          </Card>
          <Card>
            <img src="/DefaultImage.png"></img>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsListing;
