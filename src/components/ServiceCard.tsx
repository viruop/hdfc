"use client";

import React from "react";
interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  badge?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  badge,
}) => {
  return (
    <article
      className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-[550px] transform duration-500 hover:-translate-y-2 cursor-pointer group flex flex-col justify-end relative rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <div className="absolute inset-0 bg-black/5 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-300"></div>

      {badge && (
        <div
          style={{
            background: "#00000026",
            backdropFilter: "blur(80px)",
          }}
          className="absolute top-3 left-3 text-white text-sm font-bold px-3 py-1 rounded-[32px] z-10 shadow-md"
        >
          {badge}
        </div>
      )}

      <div className="relative z-10 px-5 py-6 w-full">
        <h1 className="text-white text-3xl mb-4 transform translate-y-20 group-hover:translate-y-0 duration-300">
          {title}
        </h1>
        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
          {description}
        </p>
      </div>
    </article>
  );
};
