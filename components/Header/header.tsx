import Link from 'next/link';
import Logo from '../Logo';
import Auth from './auth';
import SearchBar from './searchBar';

const Header = () => {
  return (
    <header className="shadow-md h-16 flex justify-around items-center">
      <Link href="/">
        <div>
          <Logo className="flex-1 cursor-pointer" />
        </div>
      </Link>
      <SearchBar className="flex-2" />
      <Auth className="flex-1" />
    </header>
  );
};

export default Header;
