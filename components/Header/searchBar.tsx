import { useRouter } from 'next/router';
import { useState } from 'react';

const SearchBar = ({ className }: { className?: string }) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  return (
    <div className={`${className} w-full flex justify-center`}>
      <input
        className="bg-slate-100 p-2 pl-4 pr-12 rounded-full w-1/2 text-slate-400 placeholder-slate-300 focus:outline-none border-2 focus:focus:border-blue-300"
        placeholder="Search movies"
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="search"
        onKeyDown={(e) => {
          if (e.key == 'Enter') router.push(`/search?q=${search}`);
        }}
      />
      <div className="relative right-12 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
