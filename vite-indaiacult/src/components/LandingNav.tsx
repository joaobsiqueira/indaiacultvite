import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <section>
      <div className="flex items-center justify-between p-5">
        <div>
          <span className="text-main text-3xl font-bold">Indaia</span>
          <span className="text-darkblue dark:text-lightblue text-3xl font-bold">
            Cult.
          </span>
        </div>
        <Link
          to="/sobre"
          className="font-montserrat text-lg md:text-2xl font-bold text-darkblue hover:underline"
        >
          Sobre
        </Link>
      </div>
    </section>
  );
};

export default LandingNav;
