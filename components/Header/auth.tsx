import { useEffect, useState } from 'react';
import { HeartIcon } from '../Icons';
import Link from 'next/link';
import useAuthProvider from '../../provider/authProvider';
import { useRouter } from 'next/router';

const Auth = ({ className }: { className?: string }) => {
  const [connected, setConnected] = useState<boolean>(false);
  const router = useRouter();

  const { isAuthenticated, signOut, authUser } = useAuthProvider();

  useEffect(() => {
    setConnected(isAuthenticated());
  }, [isAuthenticated]);

  const disconnectedComp = (
    <div className={`${className} m-4`}>
      <Link href="/auth">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Login
        </button>
      </Link>
    </div>
  );

  const connnectedComp = (
    <div className={`${className} m-4 flex justify-end items-center space-x-2`}>
      <Link
        href={'/favorites'}
        title="Favorites list"
      >
        <HeartIcon className="h-8 hover:cursor-pointer" />
      </Link>
      <div>
        <button
          onClick={() => {
            signOut();
            router.push('/');
          }}
          className="bg-slate-300 hover:bg-slate-400 flex items-center w-32 rounded-full p-1"
        >
          <div className="relative content-start inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {authUser() && authUser().slice(0, 2).toUpperCase()}
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
