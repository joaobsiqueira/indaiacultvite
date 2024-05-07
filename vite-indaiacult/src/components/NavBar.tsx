import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useUser } from "../userContext";

const NavBar = () => {
  const { user, artist } = useUser();
  return (
    <>
      <aside className="sticky h-full flex flex-col justify-between gap-5 p-8 border-r-4 border-solid dark:border-highlightDark">
        <div className="flex flex-col gap-5">
          <Link to="/" className="w-full">
            <span className="text-main text-3xl font-bold">Indaia</span>
            <span className="text-darkblue dark:text-lightblue text-3xl font-bold">
              Cult.
            </span>
          </Link>
          <Nav />
        </div>
        {user?.name}
      </aside>
    </>
  );
};

export default NavBar;
