import React from "react";
import { ReactNode } from "react";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen bg-whiteModeBg dark:bg-darkModeBg ">
      <NavBar />

      <main className="overflow-x-hidden flex flex-col w-full">{children}</main>
    </div>
  );
};

export default Layout;
