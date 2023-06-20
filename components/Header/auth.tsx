import { useState } from 'react';
import { HeartIcon } from '../Icons';

const Auth = ({ className }: { className?: string }) => {
  const [connected, setConnected] = useState<boolean>(false);

  const disconnectedComp = (
    <div className={`${className} m-4`}>
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
      <button className="hover:cursor-pointer" title="Favorites list">
        <HeartIcon className='h-8'/>

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
