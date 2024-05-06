import { ReactNode } from "react";
import NavBar from "./components/NavBar";
import FixedWidget from "./components/FixedWidget";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex gap-12 overflow-hidden h-screen bg-white dark:bg-black">
      <NavBar />

      <main className="flex w-full flex-grow my-8 flex-col overflow-y-scroll">
        {children}
      </main>

      <div className="overflow-y-scroll mr-12 my-8">
        <FixedWidget />
      </div>
    </div>
  );
};

export default Layout;
