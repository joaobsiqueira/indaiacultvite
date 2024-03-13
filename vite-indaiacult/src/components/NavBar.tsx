import Nav from "./Nav";

const NavBar = () => {
  return (
    <>
      <header className=" top-0 flex-wrap z-[20] mx-auto flex  w-full items-center justify-between p-8">
        <ul>
          <span className="text-primary text-3xl font-bold">Indaia</span>
          <span className="text-secondary text-3xl font-bold">Cult.</span>
        </ul>
        <Nav />
      </header>
    </>
  );
};

export default NavBar;
