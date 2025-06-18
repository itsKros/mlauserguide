import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,    
  House,
  Rocket,  
  Layers,
  Book,
  Headphones,
  Bot,
  Image,
  Mail,
  Server,
  Settings,
  Star,
  HelpCircle,
} from "lucide-react";

const navData = [
  {
    label: "Home",
    path: "/",
    icon: House,
  },
  {
    label: "Getting Started",
    path: "/getting-started",
    icon: Rocket,
    sub: [
      { label: "Introduction to Mini Lessons Academy", path: "/getting-started/introduction-to-mini-lessons-academy" },
      { label: "Onboarding", path: "/getting-started/onboarding" },
      { label: "Dashboard Overview", path: "/getting-started/dashboard-overview" },      
    ],
  },
  {
    label: "Course Creation",
    path: "/course-creation",
    icon: Layers,
    sub: [
      { label: "Using Course Creator", path: "/course-creation/course-creator" },
      { label: "Using Course Editor", path: "/course-creation/course-editor" },
      { label: "Adding Images & Multimedia", path: "/course-creation/adding-multimedia" },
      { label: "One-Click Course Creator", path: "/course-creation/one-click-course-creator"},   
      { label: "Exporting & Downloading Course", path: "/course-creation/exporting-downloading"},       
    ],
  },
  {
    label: "Book Creation",
    path: "/book-creation",
    icon: Book,
    sub: [
      { label: "Uisng Book Creator", path: "/book-creation/book-creator" },
      { label: "Using Book Editor", path: "/book-creation/book-editor" },
      { label: "Adding Images & Multimedia", path: "/book-creation/adding-multimedia" },
      { label: "One-Click Book Creator", path: "/book-creation/one-click-book-creator"},   
      { label: "Exporting & Downloading Book", path: "/book-creation/exporting-downloading"},       
    ],
  },
  {
    label: "Audiobook Creation",
    path: "/audiobook-creation",
    icon: Headphones,    
  },
  {
    label: "Andy AI",
    path: "/andy-ai",
    icon: Bot,    
  },
  {
    label: "Quiz & Media Management",
    path: "/quiz-and-media-management",
    icon: Image,    
  },
  {
    label: "Email Marketing",
    path: "/email-marketing",
    icon: Mail,    
  },
  {
    label: "Course Hosting",
    path: "/course-hosting",
    icon: Server,    
  },
  {
    label: "Spotlight",
    path: "/spotlight",
    icon: Star,    
  },
  {
    label: "Support & Resource",
    path: "/support-resource",
    icon: HelpCircle,    
  }
  
  
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
                  onClick={() => {
                    if (sub) toggleSection(label);
                    if (isMobile) setCollapsed(true);
                  }}
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

                {openSection === label && sub && (
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
