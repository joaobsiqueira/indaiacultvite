import { ReactNode } from "react";
import NavBar from "./components/NavBar";
import FixedWidget from "./components/FixedWidget";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="overflow-hidden flex h-screen bg-white dark:bg-black">
      <NavBar />
      <div className="flex-grow flex pr-32 pl-12 pt-8 gap-8">
        <main className="flex flex-col overflow-y-scroll">{children}</main>
        <FixedWidget />
      </div>
    </div>
  );
};

export default Layout;
