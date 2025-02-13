"use client";
import { Button, Icon, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const LandingPageNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <header className="nav-position-fixed style-1">
      <div className="flex justify-between items-center">
        <div>
          <img
            src="Images/logo/HDFC-Premier Moment-Logo.png"
            alt="HDFC Premier Moment Logo"
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default LandingPageNav;
