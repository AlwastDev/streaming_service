import Logo from './_components/Logo/Logo';
import Search from './_components/Search/Search';
import Actions from './_components/Actions/Actions';

const NavBar = () => {
  return (
    <nav
      className="fixed top-0 z-[49] flex h-20 w-full items-center
      justify-between bg-[#252731] px-2 shadow-sm lg:px-4"
    >
      <Logo />
      <Search />
      <Actions />
    </nav>
  );
};

export default NavBar;
