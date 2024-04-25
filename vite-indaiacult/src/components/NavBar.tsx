import Nav from "./Nav";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <>
      <header className="top-0 z-[20] flex w-full items-center gap-5 p-8">
        <a href="/" className="w-full">
          <span className="text-main text-3xl font-bold">Indaia</span>
          <span className="text-darkblue dark:text-lightblue text-3xl font-bold">
            Cult.
          </span>
        </a>
        <div className="hidden md:block w-full">
          <SearchBar />
        </div>
        <Nav />
      </header>
    </>
  );
};

export default NavBar;
