"use client";
import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LandingPageNav from "./containers/Navbar/Landing-page-nav";
import LandingPageFooter from "./containers/Footer/Landing-page-footer";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/store";
import StoreProvider from "../store/provider"; // Import Redux Provider
import "swiper/css";
import "swiper/css/pagination";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login"; // Check if the current route is "/login"

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {!isLoginPage && <LandingPageNav />}
            <main>{children}</main>
            {!isLoginPage && <Footer />}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
