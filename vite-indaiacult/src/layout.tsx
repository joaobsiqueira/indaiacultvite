import React from "react";
import { ReactNode } from "react";
import NavBar from "./components/NavBar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen">
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
