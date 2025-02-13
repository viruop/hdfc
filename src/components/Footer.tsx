import Link from "next/link";
import React from "react";

export const Footer: React.FC = () => {
  const navigationLinks = [
    { title: "BLOG", href: "/blog" },
    { title: "FAQS", href: "/faqs" },
    { title: "TERMS AND CONDITIONS", href: "/terms" },
    { title: "PRIVACY POLICY", href: "/privacy" },
  ];
  return (
    <footer className="overflow-hidden px-20 py-9 bg-zinc-100 max-md:px-5">
      <div className="flex flex-wrap gap-5 justify-between items-end w-full max-md:max-w-full">
        <img
          loading="lazy"
          src="/images/footer/footer-logo.png"
          alt="Company Logo"
          className="object-contain shrink-0 self-stretch max-w-full aspect-[2.73] w-[246px]"
        />
        <nav className="flex flex-wrap gap-10 items-center mt-14 max-md:mt-10 max-md:max-w-full">
          {navigationLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="self-stretch font-inter my-auto text-sm font-semibold tracking-tight leading-6 uppercase text-zinc-800"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <section className="flex flex-col mt-12 max-md:mt-10">
          <nav className="flex gap-6 items-center self-start">
            <a href="/social/facebook" aria-label="Facebook">
              <img
                loading="lazy"
                src="/images/footer/facebook.png"
                className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
                alt="Facebook icon"
              />
            </a>
            <a href="/social/twitter" aria-label="Twitter">
              <img
                loading="lazy"
                src="/images/footer/twitter.png"
                className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
                alt="Twitter icon"
              />
            </a>
            <a href="/social/instagram" aria-label="Instagram">
              <img
                loading="lazy"
                src="/images/footer/instagram.png"
                className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
                alt="Instagram icon"
              />
            </a>
            <a href="/social/linkedin" aria-label="LinkedIn">
              <img
                loading="lazy"
                src="/images/footer/linkedin.png"
                className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
                alt="LinkedIn icon"
              />
            </a>
          </nav>
          <p className="mt-5 text-sm leading-5 text-zinc-800">
            Need Assistance? Call our toll-free no.{" "}
            <strong>1800 2090 296</strong>
          </p>
        </section>
      </div>
      <p className="mt-1.5 w-60 text-xs leading-5 text-zinc-800">
        ©All Copies and Logos of the bank belongs to HDFC Bank Ltd.
      </p>
      <div className="text-center py-2 text-sm text-gray-600">
        Powered by Europ Assistance India Pvt. Ltd.
      </div>
    </footer>
  );
};
