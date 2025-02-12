"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import LandingPageHero from "./containers/landing-page/ladning-page-hero";
import LandingComplimentary from "./containers/landing-page/landing-complimentary";
import LandingPagePlanListing from "./containers/landing-page/landing-page-plan-listing";

export default function Home() {
  return (
    <div className="">
      <LandingPageHero />
      <LandingComplimentary />
      <LandingPagePlanListing />
    </div>
  );
}
