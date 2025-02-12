"use client";

import React from "react";

export function ChatButton() {
  return (
    <button className="flex relative gap-3 items-center self-end px-4 py-3 mt-56 text-base font-semibold bg-stone-950 rounded-[698px] max-md:mt-10">
      <img
        loading="lazy"
        src="/Images/imperia/Union.png"
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        alt="Chat icon"
      />
      <span className="self-stretch my-auto">Chat with us ​</span>
    </button>
  );
}
