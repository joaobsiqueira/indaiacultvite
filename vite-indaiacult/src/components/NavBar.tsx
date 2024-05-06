import Nav from "./Nav";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <>
      <aside className="sticky h-full flex flex-col gap-5 p-8 border-r-4 border-solid dark:border-highlightDark">
        <a href="/" className="w-full">
          <span className="text-main text-3xl font-bold">Indaia</span>
          <span className="text-darkblue dark:text-lightblue text-3xl font-bold">
            Cult.
          </span>
        </a>

        <Nav />
      </aside>
    </>
  );
};

export default NavBar;
