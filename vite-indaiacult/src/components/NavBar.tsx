import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useUser } from "../userContext";
import ProfileButton from "./ProfileButton";

const NavBar = () => {
  return (
    <>
      <aside className="sticky h-full hidden lg:flex flex-col justify-between gap-5 p-8 border-r-4 border-solid dark:border-highlightDark">
        <div className="flex flex-col gap-5">
          <Link to="/" className="w-full">
            <span className="text-main text-3xl font-bold">Indaia</span>
            <span className="text-darkblue dark:text-lightblue text-3xl font-bold">
              Cult.
            </span>
          </Link>
          <Nav />
        </div>
        <div>
          <ProfileButton />
        </div>
      </aside>
    </>
  );
};

export default NavBar;
