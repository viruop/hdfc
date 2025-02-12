import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="overflow-hidden px-20 py-9 bg-zinc-100 max-md:px-5">
      <div className="flex flex-wrap gap-5 justify-between items-end w-full max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/a81804d2a1984285a5bfdfde53f00cf8/9b05c4acd5f6db34c79ef46835f041e0e47e06c3bff8ba2676bd333917ea51d3?placeholderIfAbsent=true"
          alt="Company Logo"
          className="object-contain shrink-0 self-stretch max-w-full aspect-[2.73] w-[246px]"
        />
        <nav className="flex flex-wrap gap-10 items-center mt-14 max-md:mt-10 max-md:max-w-full">
          <a
            href="#"
            className="self-stretch my-auto text-sm font-semibold tracking-tight leading-6 uppercase text-zinc-800"
          >
            Blog
          </a>
          <a
            href="#"
            className="self-stretch my-auto text-sm font-semibold tracking-tight leading-6 uppercase text-zinc-800"
          >
            Blog
          </a>
          <a
            href="#"
            className="self-stretch my-auto text-sm font-semibold tracking-tight leading-6 uppercase text-zinc-800"
          >
            Blog
          </a>
          <a
            href="#"
            className="self-stretch my-auto text-sm font-semibold tracking-tight leading-6 uppercase text-zinc-800"
          >
            Blog
          </a>
        </nav>

        {/* <SocialMediaLinks /> */}
      </div>
      <p className="mt-1.5 w-60 text-xs leading-5 text-zinc-800">
        ©All Copies and Logos of the bank belongs to HDFC Bank Ltd.
      </p>
    </footer>
  );
};
