// Layout.jsx
import { React, useState, useEffect } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { Outlet, useLocation } from 'react-router-dom';
import NextPrevNavigation from "./NextPrevNavigation/NextPrevNavigation.jsx";
import SearchComponent from './SearchComponent/SearchComponent';

export default function Layout() {
  const [collapsed, setCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCollapsed(mobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Scroll to top on navigation
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });

    // Close mobile search on route change
    setShowMobileSearch(false);
  }, [location.pathname]);

  const shouldOverlay = isMobile && !collapsed;

  return (
    <div className="relative">
      <Header
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
        setShowMobileSearch={setShowMobileSearch}
      />

      {/* Search bar fixed top under header (mobile only) */}
      {isMobile && showMobileSearch && (
        <div className="fixed top-[60px] left-0 right-0 z-[100] bg-white shadow px-4 py-2">
          <SearchComponent />
        </div>
      )}

      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} isMobile={isMobile} />

      <main
        className={`transition-all duration-300 pt-[60px] px-4 min-h-screen z-10 relative text-[16px] sm:text-[18px] leading-relaxed
          ${isMobile ? '' : collapsed ? 'ml-[60px]' : 'ml-[250px]'}
          ${shouldOverlay ? 'pointer-events-none select-none' : ''}`}
      >
        <div className={`${collapsed && !isMobile ? 'max-w-7xl' : 'max-w-6xl'} mx-auto`}>
          <Breadcrumbs textSize="text-base sm:text-lg" />

          <div className="min-h-[calc(100vh-200px)] py-6">
            <Outlet />
            <NextPrevNavigation />    
          </div>
          <Footer />
        </div>
      </main>

      {shouldOverlay && (
        <div
          className="fixed inset-0 bg-black/30  z-20"
          onClick={() => setCollapsed(true)}
        ></div>
      )}
    </div>
  );
}
