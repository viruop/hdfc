"use client";

import React from "react";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description }) => {
  return (
    <article className="grow shrink self-stretch my-auto min-w-60 md:w-[394px] max-md:max-w-full">
      <figure className="w-full max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-contain w-full rounded-lg aspect-[1.23] max-md:max-w-full"
        />
        <figcaption className="mt-4 text-3xl font-semibold tracking-tighter leading-10 text-zinc-800 max-md:max-w-full">
          {title}
        </figcaption>
      </figure>
      <p className="mt-3 text-lg leading-7 text-zinc-800 max-md:max-w-full">
        {description}
      </p>
    </article>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      image: "/Images/imperia/celebrate.png",
      title: "Celebrate Your Unique Beauty with Fashion tips",
      description:
        "Personalized style advice to highlight what makes you unique and enhance your individual charm.",
    },
    {
      image: "/Images/imperia/12things.png",
      title: "The 12 Things Traveling Teaches You",
      description:
        "Travel is one of life's greatest teachers. It pulls you out of your comfort zone and plunges you into the unknown.",
    },
    {
      image: "/Images/imperia/tips.png",
      title: "Tips to improve your mental health",
      description:
        "No matter your age or fitness level, you can learn to use exercise as a powerful tool to feel better",
    },
  ];

  return (
    <section className="flex flex-col items-center py-20 ">
      <header className="w-full max-w-[1015px] text-center">
        <h2 className="text-4xl font-semibold tracking-tighter leading-none text-purple-900">
          Your Exclusive Guide to Luxe Living
        </h2>
      </header>
      <div className="flex flex-col px-20 mt-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center">
          <section className="flex flex-wrap gap-6 justify-center items-center">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                image={post.image}
                title={post.title}
                description={post.description}
              />
            ))}
          </section>
        </div>
        <button className="overflow-hidden gap-3 self-center px-10 py-4 mt-8 text-xl font-medium leading-tight text-center text-purple-900 border-2 border-solid border-[#52286A] rounded-[32px] max-md:px-5">
          Uncover more stories
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
