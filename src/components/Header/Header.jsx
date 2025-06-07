import React from "react";
import { Menu } from "lucide-react";

function Header({ collapsed, setCollapsed, isMobile }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-[#7b1fa2] text-white flex items-center justify-between px-4 z-50 shadow">
      <a href="/"><img src="/mla_logo.webp" alt="Logo" className="h-8 sm:h-10 w-auto" /> </a>
      <h1 className="text-lg font-bold">Documentation</h1>

      {isMobile && (
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white z-50"
          aria-label="Toggle navigation"
        >
          <Menu />
        </button>
      )}
    </header>
  );
}

export default Header;
