import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-sm mt-4 mb-4 text-gray-700 flex items-center space-x-1">
      <Link to="/" className="hover:bg-gray-100 px-2 py-1 rounded text-[#7b1fa2] font-medium">Home</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return (
          <React.Fragment key={to}>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to={to} className="hover:bg-gray-100 px-2 py-1 rounded text-[#7b1fa2] font-medium">
              {capitalize(value)}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;