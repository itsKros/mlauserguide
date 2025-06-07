import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs.jsx";
import Footer from "./Footer/Footer.jsx";


export default function Layout() {
  // Detect mobile (simple – tweak breakpoint as needed)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [collapsed, setCollapsed] = useState(isMobile); // collapsed by default on mobile

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setCollapsed(false); // ensure expanded on desktop by default
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
      />

      {/* Sidebar + page content */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
      />

      {/* Main page area */}
      <main
        className={`pt-[60px] transition-all duration-300 ${
          isMobile
            ? "px-4"
            : collapsed
            ? "ml-[60px] px-6"
            : "ml-[250px] px-8"
        }`}
      >
        <Breadcrumbs />
        <div className="min-h-[calc(100vh-200px)] py-6">
          <Outlet />          
        </div>
        <Footer />
      </main>
    </div>
  );
}
