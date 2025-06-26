import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function formatBreadcrumb(text) {
  return text
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Breadcrumbs({ textSize = 'text-base sm:text-lg' }) {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  return (
    <nav
      className={`mt-4 mb-6 text-gray-700 flex items-center flex-wrap space-x-1 overflow-x-auto whitespace-nowrap scrollbar-hide ${textSize}`}
    >
      <Link
        to="/"
        className="hover:bg-gray-100 px-2 py-1 rounded text-[#7b1fa2] font-semibold"
      >
        Home
      </Link>

      {pathnames.map((segment, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return (
          <React.Fragment key={to}>
            <ChevronRight className="w-5 h-5 text-gray-400 mx-1 flex-shrink-0" />
            <Link
              to={to}
              className="hover:bg-gray-100 px-2 py-1 rounded text-[#7b1fa2] font-semibold"
            >
              {formatBreadcrumb(segment)}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
}
