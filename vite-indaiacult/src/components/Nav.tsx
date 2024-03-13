import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const NavLinks = () => {
  const [icon, setIcon] = useState(false);
  const toggleTheme = () => {
    setIcon(!icon);
  };

  return (
    <>
      <a
        href="/artistas"
        className="text-secondary font-montserrat font-semibold text-lg"
      >
        Artistas
      </a>
      <a
        href="/Obras"
        className="text-secondary font-montserrat font-semibold text-lg"
      >
        Obras
      </a>
      <a
        href="/Sobre"
        className="text-secondary font-montserrat font-semibold text-lg"
      >
        Sobre
      </a>
      <button onClick={toggleTheme}>
        {icon ? <Sun size={44} /> : <Moon size={44} />}
      </button>
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
