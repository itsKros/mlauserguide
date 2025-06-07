import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  TerminalSquare,
  House,
} from "lucide-react";

const navData = [
  {
    label: "Home",
    path: "/",
    icon: House,
  },
  {
    label: "Introduction",
    path: "/introduction",
    icon: LayoutDashboard,
    sub: [
      { label: "Glimpse", path: "/introduction/glimpse" },
      { label: "Prerequisite", path: "/introduction/prerequisite" },
    ],
  },
  {
    label: "Getting Started",
    path: "/getting-started",
    icon: TerminalSquare,
    sub: [
      { label: "Resources", path: "/getting-started/resources" },
      { label: "Install", path: "/getting-started/install" },
    ],
  },
  {
    label: "Configuration",
    path: "/configuration",
    icon: Settings,
    sub: [
      { label: "System Settings", path: "/configuration/system-settings" },
      { label: "Launch", path: "/configuration/launch" },
    ],
  },
];

export default function Sidebar({ collapsed, setCollapsed, isMobile }) {
  const { pathname } = useLocation();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (label) =>
    setOpenSection(openSection === label ? null : label);

  return (
    <>
      {/* ---------- Sidebar ---------- */}
      <aside
        className={`bg-white fixed top-[60px] bottom-0 left-0 z-40 border-r border-gray-200 transition-all duration-300
          ${
            isMobile
              ? collapsed
                ? "w-0 p-0 overflow-hidden"
                : "w-[250px] p-4"
              : collapsed
              ? "w-[60px] p-4"
              : "w-[250px] p-4"
          }
          overflow-y-auto flex flex-col justify-between`}
      >
        {/* Navigation header + collapse button */}
        <div>
          <div className="flex items-center justify-between mb-4">
            {!collapsed && (
              <span className="font-semibold text-[#7b1fa2]">Navigation</span>
            )}
            {!isMobile && (
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="text-gray-500 hover:text-[#7b1fa2] transition-transform duration-300 cursor-pointer"
                aria-label="Collapse sidebar"
              >
                {collapsed ? <ChevronRight /> : <ChevronLeft />}
              </button>
            )}
          </div>

          {/* Main links */}
          {!collapsed &&
            navData.map(({ label, path, sub, icon: Icon }) => (
              <div key={label}>
                <NavLink
                  to={path}
                  onClick={() => toggleSection(label)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 my-2 px-3 py-2 rounded ${
                      isActive
                        ? "bg-[#7b1fa2] text-white"
                        : "text-[#7b1fa2] hover:bg-gray-100"
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </NavLink>

                {openSection === label && (
                  <div className="pl-6">
                    {sub.map(({ label, path }) => (
                      <NavLink
                        key={label}
                        to={path}
                        className={({ isActive }) =>
                          `block my-1 px-2 py-1 text-sm rounded ${
                            isActive
                              ? "text-[#7b1fa2] font-semibold"
                              : "text-gray-700 hover:bg-gray-100"
                          }`
                        }
                        onClick={() => isMobile && setCollapsed(true)}
                      >
                        {label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Reserved space for bottom actions if needed */}
        <div className="mt-auto" />
      </aside>

      {/* ---------- Dark overlay (mobile only) ---------- */}
      {isMobile && !collapsed && (
        <div
          className="fixed inset-0 top-[60px] bg-black/40 z-30 transition-opacity duration-300"
          onClick={() => setCollapsed(true)}
        />
      )}
    </>
  );
}
