import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { docsNavigation } from '../../routes/docsNavigation.js';

export default function NextPreviousNavigation() {
  const location = useLocation();
  const currentIndex = docsNavigation.findIndex(route => route.path === location.pathname);

  const prev = docsNavigation[currentIndex - 1];
  const next = docsNavigation[currentIndex + 1];

  return (
    <div className="mt-12 border-t border-gray-200 pt-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
      {/* Previous */}
      {prev ? (
        <div>
          <Link
            to={prev.path}
            className="text-base text-[#7b1fa2] block"
          >
            <div className="flex items-center gap-1 text-xs font-bold text-black uppercase mb-1">
              <ChevronLeft size={14} />
              Previous
            </div>
            <div className="hover:no-underline">{prev.label}</div>
          </Link>
        </div>
      ) : <div />}

      {/* Next */}
      {next ? (
        <div className="text-right">
          <Link
            to={next.path}
            className="text-base text-[#7b1fa2] block"
          >
            <div className="flex items-center justify-end gap-1 text-xs font-bold text-black uppercase mb-1">
              Next
              <ChevronRight size={14} />
            </div>
            <div className="hover:no-underline">{next.label}</div>
          </Link>
        </div>
      ) : <div />}
    </div>
  );
}
