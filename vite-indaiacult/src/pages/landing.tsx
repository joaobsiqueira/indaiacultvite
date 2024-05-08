import LandingButton from "../components/LandingButton";
import { useTheme } from "../context";
import LandingNav from "../components/LandingNav";

const LandingPage = () => {
  const { darkMode } = useTheme();
  return (
    <section className="bg-landingBg flex-row bg-cover h-screen">
      <LandingNav />

      <div className="flex flex-col py-36 gap-24 p-5">
        <p className="font-montserrat text-start font-medium text-4xl md:text-6xl">
          Conheça a <span className="text-main font-semibold">cultura</span> e
          os artistas <br /> de{" "}
          <span className="text-darkblue font-semibold">Indaiatuba</span>{" "}
          <span>com Indaiacult!</span>
        </p>
        <h3 className="font-montserrat text-start text-xl md:text-3xl justify-center">
          Conheça artistas locais e veja suas obras, o IndaiaCult <br /> é uma
          roda cultural a poucos cliques de distância
        </h3>
        <p></p>
        <LandingButton />
      </div>
      <div
        className="bg-landingContainer bg-cover fixed bottom-0 right-40 w-[494px] h-[812px] rounded-tl-xl rounded-tr-xl"
        aria-label="imagem ilustrativa da página inicial"
      ></div>
    </section>
  );
};

export default LandingPage;
