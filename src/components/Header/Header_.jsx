// Header.jsx
import React from "react";
import { useState } from "react";
import { Menu, Search } from "lucide-react";
import SearchComponent from "../SearchComponent/SearchComponent";

function Header({ collapsed, setCollapsed, isMobile }) {
  const [showSearchMobile, setShowSearchMobile] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[60px] bg-[#7b1fa2] text-white flex items-center justify-between px-4 z-50 shadow">
        <div className="flex items-center gap-3 w-full">
          <a href="/" className="flex-shrink-0">
            <img src="/mla_logo.webp" alt="Logo" className="h-8 sm:h-10 w-auto" />
          </a>

          <h1 className="text-lg font-bold whitespace-nowrap">Documentation</h1>

          {/* Desktop Search */}
          <div className="flex-1 max-w-md ml-auto hidden sm:block">
            <SearchComponent />
          </div>

          {/* Mobile Search & Menu */}
          {isMobile && (
            <div className="flex gap-3 ml-auto">
              <button
                onClick={() => setShowSearchMobile(!showSearchMobile)}
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
        </div>
      </header>

      {/* Mobile search dropdown */}
      {isMobile && showSearchMobile && (
        <div className="absolute top-[60px] left-0 right-0 bg-white z-40 p-3 border-b border-gray-200 sm:hidden shadow">
          <SearchComponent />
        </div>
      )}
    </>
  );
}

export default Header;
