// SearchComponent.jsx
import React, { useState } from "react";
import { algoliasearch } from "algoliasearch";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  useInstantSearch,
} from "react-instantsearch";
import { useNavigate } from "react-router-dom";

const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_KEY
);

function Hit({ hit }) {
    return (
      <a
        href={hit.url}
        className="block px-4 py-3 border-b last:border-b-0 hover:bg-gray-100 transition"
      >
        <div className="font-medium text-[#7b1fa2] text-sm">
          <Highlight attribute="title" hit={hit} />
        </div>
  
        {hit.category && (
          <div className="text-xs text-gray-500 mt-1">
            {hit.category}
          </div>
        )}
  
        {hit.description && (
          <div className="text-xs text-gray-600 mt-1 leading-snug">
            <Highlight attribute="description" hit={hit} />
          </div>
        )}
      </a>
    );
  }
  

function CustomHits() {
  const { results } = useInstantSearch();
  if (!results || results.nbHits === 0) return null;

  return (
    <div className="absolute top-full mt-2 w-full bg-white shadow-xl border rounded-md z-50 max-h-[300px] overflow-y-auto">
      <Hits hitComponent={Hit} />
    </div>
  );
}

export default function SearchComponent() {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <div className="relative w-full">
      <InstantSearch
        searchClient={searchClient}
        indexName={import.meta.env.VITE_ALGOLIA_INDEX_NAME}
      >
        <div
          onFocus={() => setHasFocus(true)}
          onBlur={() => setTimeout(() => setHasFocus(false), 200)}
        >
          <SearchBox
                classNames={{
                    root: '',
                    form: 'flex items-center relative',
                    input: `
                    w-full py-2 pl-10 pr-3 rounded-md text-sm
                    bg-white text-gray-800
                    border border-gray-300
                    focus:ring-2 focus:ring-white focus:outline-none
                    focus:border-white
                    placeholder:text-gray-400
                    transition-all
                    `,
                    submit: 'absolute left-3 top-1/2 -translate-y-1/2 text-[#7b1fa2]',
                    reset: 'hidden',
                }}
                placeholder="Search..."
            />

          {hasFocus && <CustomHits />}
        </div>
      </InstantSearch>
    </div>
  );
}
