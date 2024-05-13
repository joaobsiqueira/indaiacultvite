import LandingButton from "../components/LandingButton";
import { useTheme } from "../context";
import LandingNav from "../components/LandingNav";
import "../App.css";

const LandingPage = () => {
  const { darkMode } = useTheme();
  return (
    <section className="backgroundLanding flex-row bg-cover h-screen">
      <LandingNav />

      <div className="flex flex-col py-36 gap-12 p-5">
        <p className="font-montserrat dark:text-white text-start font-medium text-4xl md:text-5xl">
          Conheça a <span className="text-main font-semibold">cultura</span> e
          os artistas <br /> de{" "}
          <span className="text-darkblue dark:text-lightblue font-semibold">
            Indaiatuba
          </span>{" "}
          <span>com Indaiacult!</span>
        </p>
        <h3 className="font-montserrat text-start dark:text-white text-xl md:text-3xl justify-center">
          Conheça artistas locais e veja suas obras, o IndaiaCult <br /> é uma
          roda cultural a poucos cliques de distância
        </h3>
        <p></p>
        <LandingButton />
      </div>
      <div
        className="block lg:flex w-[294px] h-[512px] fixed bottom-0 right-40   rounded-tl-xl rounded-tr-xl"
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
