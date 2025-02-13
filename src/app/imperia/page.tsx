import BlogSection from "@/components/BlogSection";
import ConciergeServices from "@/components/ConciergeServices";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import HeroSection from "@/components/ExclusiveServices";
import ExclusiveServices from "@/components/ExclusiveServices";
import GiftsSection from "@/components/GiftsSection";
import Prefences from "@/components/Prefences";
import UniquePrivileges from "@/components/UniquePrivileges";

export default function Page() {
  const services = [
    {
      imageSrc: "/Images/imperia/fitness-session.png",
      title: "Fitness Sessions & Access to Gym",
      description: "Personalized fitness and premium gym access",
    },
    {
      imageSrc: "/Images/imperia/image-112.png",
      title: "Chauffeur On-Demand",
      description: "Professional drivers for stress-free travel",
    },
  ];

  const prefServices = [
    {
      imageSrc: "/Images/imperia/fitness-session.png",
      title: "Fitness Sessions & Access to Gym",
      description: "Personalized fitness and premium gym access",
    },
    {
      imageSrc: "/Images/imperia/image-112.png",
      title: "Chauffeur On-Demand",
      description: "Professional drivers for stress-free travel",
    },
  ];

  const conservices = [
    {
      title: "Table Reservations",
      description: "We offer table reservations at exclusive restaurants",
      imageUrl: "/Images/imperia/Table-Reservation.png",
    },
    {
      title: "Effortless Home Assistance",
      description: "Streamline your life with our Home Assistance services",
      imageUrl: "/Images/imperia/effortless.png",
    },
    {
      title: "Personalised Wellness Sessions",
      description: "Transform your health with our Diet & Nutrition sessions",
      imageUrl: "/Images/imperia/personalised.png",
    },
    {
      title: "Priority Medical Assistance",
      description: "Access reliable Ambulance Services when you need them most",
      imageUrl: "/Images/imperia/priorty.png",
    },
    {
      title: "Limited Edition Gifting",
      description:
        "Explore our Limited Edition gifts for unforgettable moments",
      imageUrl: "/Images/imperia/limited-edition.png",
    },
    {
      title: "Virtual Experiences",
      description: "Immerse yourself in our unique Virtual Experiences",
      imageUrl: "/Images/imperia/vr.png",
    },
  ];

  const exclusiveservices = [
    {
      imageSrc: "/Images/imperia/fitness-session.png",
      title: "Fitness Sessions & Access to Gym",
      description: "Personalized fitness and premium gym access",
    },
    {
      imageSrc: "/Images/imperia/image-112.png",
      title: "Chauffeur On-Demand",
      description: "Professional drivers for stress-free travel",
    },
  ];

  return (
    <div className="overflow-hidden">
      <HeroSection
        title="Exclusive services for a select few"
        backgroundImage="/Images/imperia/hero-image.png"
      />
      <UniquePrivileges
        title="Unveiling Your Unique Privileges"
        services={services}
        backgroundColor="bg-rose-900 bg-opacity-10"
        textColor="text-rose-900"
        buttonText="Discover More"
      />
      <Prefences
        services={prefServices}
        headerText="Inspired by Your Preferences"
        buttonText="Explore All Tailored Services"
        backgroundColor="bg-rose-900"
        headerTextColor="text-white"
      />
      <ConciergeServices
        services={conservices}
        title="Your Concierge Services, Redefined"
        backgroundColor="bg-rose-900 bg-opacity-10"
        titleColor="text-rose-900"
        buttonText="Discover More"
      />
      <ExclusiveOffers
        services={exclusiveservices}
        headerText="Exclusive Offers Just For You"
        // Optional props
        buttonText="Discover More"
        backgroundColor="bg-rose-900"
        headerTextColor="text-white"
      />
      <GiftsSection />
      <BlogSection />
    </div>
  );
}
