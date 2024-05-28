import React from "react";
import { Sobre } from "../interfaces/SobreInterface";

const SobreCard: React.FC<{
  sobre: Sobre;
}> = ({ sobre }) => {
  return (
    <section>
      <div className="flex flex-col gap-4 border-4  border-highlight dark:border-highlightDark p-5 rounded-lg">
        <h1 className="text-2xl md:text-4xl 3xl:text-5xl dark:text-white font-bold font-montserrat">
          {sobre.titulo}
        </h1>

        <img
          src={sobre.imagem}
          className="w-full h-56 rounded-lg"
          alt={`Imagem de ${sobre.titulo}`}
        />
      </div>
    </section>
  );
};

export default SobreCard;
