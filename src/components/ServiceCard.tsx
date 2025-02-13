"use client";

import React from "react";
interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <article
      className="mx-auto max-w-sm  shadow-xl bg-cover bg-center min-h-[600px] transform duration-500 hover:-translate-y-2 cursor-pointer group"
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <div className="bg-black bg-opacity-20 min-h-[600px] px-5 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
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
