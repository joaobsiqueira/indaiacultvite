import LandingButton from "../components/LandingButton";
import { useTheme } from "../context";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import LandingNav from "../components/LandingNav";
import "../App.css";

const LandingPage = () => {
  return (
    <section className="backgroundLanding flex-row bg-cover h-screen">
      <LandingNav />

      <div className="flex flex-col py-36 gap-12 p-5">
        <p className="font-montserrat dark:text-white text-start font-semibold text-4xl md:text-5xl 3xl:text-7xl">
          Conheça a <span className="text-main font-semibold">cultura</span> e
          os artistas <br /> de {""}
          <span className="text-darkblue dark:text-lightblue font-semibold">
            Indaiatuba
          </span>
          <span> com Indaiacult!</span>
        </p>
        <h3 className="font-montserrat text-start dark:text-white text-xl md:text-3xl 3xl:text-4xl justify-center">
          Conheça artistas locais e veja suas obras, o IndaiaCult <br /> é uma
          roda cultural a poucos cliques de distância
        </h3>
        <div className="flex flex-rpw text-darkblue dark:text-lightblue gap-12">
          <FaFacebook className="w-14 h-14" />
          <FaInstagram className="w-14 h-14" />
          <FaTiktok className="w-14 h-14" />
        </div>
        <LandingButton />
      </div>
      <div
        className="block lg:flex md:w-[294px] md:h-[512px] 3xl:w-[394px] 3xl:h-[732px] fixed bottom-0 right-40 rounded-tl-xl rounded-tr-xl"
        aria-label="imagem ilustrativa da página inicial"
      >
        <img
          src="assets/landingContainerImage.jpg"
          alt=""
          className="hidden md:flex bottom-0 h-full w-full rounded-tl-xl rounded-tr-xl"
        />
      </div>
    </section>
  );
};

export default LandingPage;
