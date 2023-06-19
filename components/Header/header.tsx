import Logo from "../Logo";
import Auth from "./auth";
import SearchBar from "./searchBar";

const Header = () => {
  return (
    <header className="shadow-md h-16 flex justify-around items-center">
      <Logo className="flex-1" />
      <SearchBar className="flex-2" />
      <Auth className="flex-1" />
    </header>
  );
};

export default Header;