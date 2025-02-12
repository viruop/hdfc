import ServiceDetailsBanner from "@/app/containers/service-details/service-details-banner";
import ServiceDetailsListing from "@/app/containers/service-details/service-details-lising";
import Image from "next/image";
import React from "react";

const servicePage = async ({
  params,
}: {
  params: { service_slug: string };
}) => {
  const slug = (await params).service_slug;

  return (
    <div>
      <ServiceDetailsBanner />
      <ServiceDetailsListing />
    </div>
  );
};

export default servicePage;
