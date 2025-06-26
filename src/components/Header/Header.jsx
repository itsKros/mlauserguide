// Header.jsx
import React from "react";
import { Menu, Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import SearchComponent from "../SearchComponent/SearchComponent";


function formatBreadcrumb(text) {
  return text
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function Header({ collapsed, setCollapsed, isMobile, setShowMobileSearch }) {

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);
  const currentTitle = pathnames.length ? formatBreadcrumb(pathnames[pathnames.length - 1]) : "Home";

  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-[#7b1fa2] text-white flex items-center justify-start px-4 z-50 shadow gap-4">
      <a href="/" className="flex-shrink-0">
        <img src="/mla_logo.webp" alt="Logo" className="h-8 sm:h-10 w-auto" />
      </a>

      <h1 className="text-lg font-bold truncate whitespace-nowrap overflow-hidden max-w-[50vw] sm:max-w-[60%]">{currentTitle}</h1>

      {/* Desktop Search Box */}
      <div className="hidden sm:block flex-1 max-w-md ml-auto">
        <SearchComponent />
      </div>

      {/* Mobile Controls */}
      {isMobile && (
        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={() => setShowMobileSearch(prev => !prev)}
            className="text-white"
            aria-label="Toggle search"
          >
            <Search />
          </button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white"
            aria-label="Toggle navigation"
          >
            <Menu />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
