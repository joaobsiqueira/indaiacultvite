import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menuicon from "../assets/menu.svg";
import closeicon from "../assets/close.svg";

const navLinks = [
  { name: "Artistas", href: "/pages/artistas" },
  { name: "Obras", href: "/pages/obras" },
  { name: "Sobre", href: "/pages/sobre" },
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = location.pathname;

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="p-4 flex items-center justify-between flex-row">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <li className="list-none">
                <span className="text-primary text-3xl font-bold">Indaia</span>
                <span className="text-secondary  text-3xl font-bold">Cult</span>
              </li>
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div
            className={`hidden md:flex space-x-16 items-center ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname.startsWith(link.href);
              return (
                <a
                  href={link.href}
                  key={link.name}
                  className={
                    isActive
                      ? "text-secondary font-extrabold text-lg relative after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                      : "text-secondary font-medium text-lg relative after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                  }
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <button
            onClick={toggleNavBar}
            className="text-secondary focus:outline-none md:hidden focus:text-black"
          >
            {isOpen ? (
              ""
            ) : (
              <img src={menuicon} alt="icon" width="36" height="35" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`bg-gray-200 bg-opacity-90 z-50 fixed top-0 right-0 w-44 h-full ${
            isOpen ? "trasnlate-x-0" : "translate-x-full"
          } ease-in-out duration-300`}
        >
          <button className="fixed top-4 right-4" onClick={toggleNavBar}>
            <img src={closeicon} alt="fechar" width="36" height="35" />
          </button>
          <div className="p-5 flex flex-col mt-7 space-y-5 text-secondary text-xl">
            {navLinks.map((link) => {
              const isActive = location.pathname.startsWith(link.href);
              return (
                <a
                  href={link.href}
                  key={link.name}
                  className={
                    isActive
                      ? "text-secondary font-extrabold lg"
                      : "text-secondary font-medium text-lg"
                  }
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
