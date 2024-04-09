import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LoginButton from "./LoginButton";
import ToggleThemeButton from "./ToggleThemeButton";

const NavLinks = () => {
  const isActive = (path: string) => {
    return window.location.pathname === path;
  };

  return (
    <>
      <a
        href="/artists"
        className={`text-lg text-darkblue dark:text-lightblue font-medium relative after:bg-main after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
          isActive("/artists") ? "font-extrabold" : ""
        }`}
      >
        Artistas
      </a>
      <a
        href="/obras"
        className={`text-lg text-darkblue dark:text-lightblue font-medium relative after:bg-main after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
          isActive("/obras") ? "font-extrabold" : ""
        }`}
      >
        Obras
      </a>
      <a
        href="/sobre"
        className={`text-lg text-darkblue dark:text-lightblue font-medium relative after:bg-main after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
          isActive("/sobre") ? "font-extrabold" : ""
        }`}
      >
        Sobre
      </a>

      <LoginButton></LoginButton>
      <ToggleThemeButton></ToggleThemeButton>
    </>
  );
};

const Nav = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggleNavBar = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <div className="hidden w-full justify-between items-center md:flex">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full my-6 gap-5">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
