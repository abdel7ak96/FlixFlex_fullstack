import Cookie from 'universal-cookie';
import jwt from 'jwt-decode';

type User = {
  username: string;
};

const useAuthProvider = () => {
  const cookies = new Cookie();

  const isAuthenticated = (): boolean => {
    return cookies.get('_auth_token') != undefined;
  };
  const authUser = (): string => {
    return cookies.get('_auth_username');
  };

  const login = (token: string, username: string) => {
    cookies.set('_auth_token', token);
    cookies.set('_auth_username', username);
  };

  const signOut = () => {
    cookies.remove('_auth_token');
    cookies.remove('_auth_username');
  };

  return { isAuthenticated, authUser, login, signOut };
};

export default useAuthProvider;
