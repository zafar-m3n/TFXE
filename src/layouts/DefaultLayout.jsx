import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  return (
    <div className="font-manrope flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
