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
        title="Welcome to a world of infinite privileges"
        backgroundImage="/Images/infiniti/hero-image.png"
      />
      <UniquePrivileges
        title="Unveiling Your Unique Privileges"
        services={services}
        backgroundColor="bg-[#52286A] bg-opacity-10"
        textColor="text-[#52286A]"
        buttonText="Discover More"
        buttonClassName="overflow-hidden gap-3 self-center px-10 py-4 mt-8 text-xl font-medium leading-tight text-center text-[#52286A] border-2 border-solid border-[#52286A] rounded-[32px] max-md:px-5"
      />
      <Prefences
        services={prefServices}
        headerText="Inspired by Your Preferences"
        buttonText="Explore All Tailored Services"
        backgroundColor="bg-[#52286A]"
        headerTextColor="text-white"
      />
      <ConciergeServices
        services={conservices}
        title="Your Concierge Services, Redefined"
        backgroundColor="bg-[#52286A] bg-opacity-10"
        titleColor="text-[#52286A]"
        buttonText="Discover More"
      />
      <ExclusiveOffers
        services={exclusiveservices}
        headerText="Exclusive Offers Just For You"
        // Optional props
        buttonText="Discover More"
        backgroundColor="bg-[#52286A]"
        headerTextColor="text-white"
      />
      <GiftsSection />
      <BlogSection />
    </div>
  );
}
