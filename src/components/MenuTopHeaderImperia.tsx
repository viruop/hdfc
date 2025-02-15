"use client";
import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu, Search, Bell, User } from "lucide-react";

const MenuTopHeaderImperia = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ["Search", "Mumbai", "Notifications", "Profile"];

  return (
    <header
      style={{
        background: "rgba(0, 0, 0, 0.05)", // 30% opacity
        backdropFilter: "blur(80px)",
      }}
      className="nav-position-fixed text-white style-1"
    >
      <div className="flex items-center justify-start gap-5 p-2">
        <div className="flex flex-wrap gap-5 items-center self-stretch my-auto min-w-60 w-[628px] max-md:max-w-full">
          <img
            src="Images/logo/HDFC-Premier Moment-Logo.png"
            alt="HDFC Premier Moment Logo"
          />
          <div className="shrink-0 self-stretch my-auto w-0 border border-solid border-neutral-200 h-[52px]" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d82c4accf0cdcf0d319c1f15f5e6429ab7c44dbb0f10b0074a222dd4d322afd?placeholderIfAbsent=true&apiKey=a81804d2a1984285a5bfdfde53f00cf8"
            className="w-[85px]"
            alt="HDFC Premier Moment Logo"
          />
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex gap-5 items-center self-stretch my-auto ml-auto">
            <div className="relative flex items-center">
              <button
                type="submit"
                className="absolute left-0 ml-3 top-1/2 transform -translate-y-1/2"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
              </button>
              <input
                type="text"
                className={`bg-transparent h-10 pl-10 pr-5 rounded-full text-sm focus:outline-none transition-all duration-300 ease-in-out ${
                  isFocused || searchValue ? "w-64" : "w-12"
                }`}
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => !searchValue && setIsFocused(false)}
              />
            </div>
            <p className="self-stretch my-auto text-lg font-bold leading-none text-center">
              Mumbai
            </p>
            <button className="flex gap-3 items-center self-stretch p-2 my-auto w-10 rounded-[1000px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a069ada67d081e62f43689ce7aa72dc0f72e712461a59b0ad9ae5e80596158?placeholderIfAbsent=true&apiKey=a81804d2a1984285a5bfdfde53f00cf8"
                className="object-contain self-stretch my-auto w-6 aspect-square"
                alt="Icon"
              />
            </button>
            <button className="flex gap-3 items-center self-stretch p-2 my-auto w-10 rounded-[1000px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d3bf789f9e3523cefaab73181bd850a39b051032cd0072a083d0b5b2969e9fc?placeholderIfAbsent=true&apiKey=a81804d2a1984285a5bfdfde53f00cf8"
                className="object-contain self-stretch my-auto w-6 aspect-square"
                alt="Icon"
              />
            </button>
          </div>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <button
            onClick={handleDrawerToggle}
            className="ml-auto p-2 rounded-full hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div className="w-[250px]">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  className="w-full bg-gray-100 h-10 pl-10 pr-5 rounded-full text-sm focus:outline-none"
                  placeholder="Search..."
                />
              </div>
            </div>
            <List>
              <ListItem>
                <ListItemText primary="Mumbai" />
              </ListItem>
              <ListItem>
                <Bell className="w-5 h-5 mr-3" />
                <ListItemText primary="Notifications" />
              </ListItem>
              <ListItem>
                <User className="w-5 h-5 mr-3" />
                <ListItemText primary="Profile" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default MenuTopHeaderImperia;
