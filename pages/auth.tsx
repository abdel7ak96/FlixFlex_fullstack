import type { NextPage } from 'next';
import { useState } from 'react';

const Auth: NextPage = () => {
  const [loginView, setLoginView] = useState<boolean>(true);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const formSubmit = () => {
    const JSONdata = JSON.stringify({ username, password });
    fetch(loginView ? '/api/login' : '/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    })
      .then((res) => {
        if (res.status != 200) {
          throw Error;
        }
        res.json();
      })
      .then((res) => {
        console.log('success', res);
        // Save token to cookies
        // redirect to home
      })
      .catch((e) => {
        console.log('error', e);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-96 p-10 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">
          {loginView ? 'Login' : 'Sign up'}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formSubmit();
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-900"
            >
              Your username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="username"
            ></input>
          </div>
          <div className="my-2">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="password"
            ></input>
          </div>
          <div className="flex justify-end mb-4">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2"
            >
              {loginView ? 'Login' : 'Sign up'}
            </button>
          </div>
        </form>
        <p className="text-sm">
          If you {loginView && <>don&lsquo;t</>} already have an account{' '}
          <span
            className="text-blue-600 font-bold hover:cursor-pointer hover:underline"
            onClick={() => setLoginView(!loginView)}
          >
            {loginView ? 'sign up' : 'login'} here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
