import { useState } from 'react';

const Auth = ({ className }: { className?: string }) => {
  const [connected, setConnected] = useState<boolean>(false);

  const disconnectedComp = (
    <div className={`${className}`}>
      <button
        onClick={() => setConnected(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Login
      </button>
    </div>
  );

  const connnectedComp = (
    <div className={`${className} m-4 flex justify-end items-center space-x-2`}>
      <button className="hover:cursor-pointer" title='Favorites list'>
        <div>
          <svg
            className="h-8"
            fill="none"
            stroke="grey"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        
        {/* 
        /// TODO: Chip displaying count of favorite movies, Add if you had time
        <div className="relative right-4 bottom-4 bg-red-500 p-1 px-2 rounded-full text-white text-xs">
          1
        </div> */}
      </button>
      <div>
        <button
          onClick={() => setConnected(false)}
          className="bg-slate-300 hover:bg-slate-400 flex items-center w-32 rounded-full p-1"
        >
          <div className="relative content-start inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              JL
            </span>
          </div>
          <span className="content-center text-white font-bold px-2">
            Sign out
          </span>
        </button>
      </div>
    </div>
  );

  return connected ? connnectedComp : disconnectedComp;
};

export default Auth;
