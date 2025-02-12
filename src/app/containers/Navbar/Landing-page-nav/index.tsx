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
      <div className="flex justify-between">
        <div>
          <img src="Images/logo/HDFC-Premier Moment-Logo.png"></img>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default LandingPageNav;
