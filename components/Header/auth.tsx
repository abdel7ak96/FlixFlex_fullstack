const Auth = ({ className }: { className?: string }) => {
  const connected = true;

  return (
    <div className={`${className} m-4 flex justify-end items-center space-x-2`}>
      <button className="hover:cursor-pointer">
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
        {/* <div className="relative right-4 bottom-4 bg-red-500 p-1 px-2 rounded-full text-white text-xs">
          1
        </div> */}
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Login
      </button>
    </div>
  );
};

export default Auth;
