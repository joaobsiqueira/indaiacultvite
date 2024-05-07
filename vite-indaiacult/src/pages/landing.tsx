import LandingButton from "../components/LandingButton";
import { useTheme } from "../context";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import LandingNav from "../components/LandingNav";

const LandingPage = () => {
  const { darkMode } = useTheme();
  return (
    <section>
      <LandingNav />

      <div className="flex flex-col">
        <h1 className="flex items-center justify-center font-bold text-4xl lg:text-8xl">
          Seja bem vindo
        </h1>
        <p className="flex item">
          Conheça a cultura de Indaiatuba em uma só plataforma
        </p>

        <LandingButton />
      </div>
    </section>
  );
};

export default LandingPage;
