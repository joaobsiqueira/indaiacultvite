import React from "react";
import { Sobre } from "../interfaces/SobreInterface";
import { Link } from "react-router-dom";

const SobreCard: React.FC<{
  sobre: Sobre;
}> = ({ sobre }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white dark:bg-diffBlack rounded-xl border-4 p-4 border-highlight dark:border-highlightDark gap-4">
      <img
        src={sobre.imagem}
        alt="foto da obra"
        className="w-full h-64 rounded-xl"
      />
      <div className="flex w-full flex-col justify-between gap-4">
        <div>
          <h1 className="font-semibold text-2xl capitalize line-clamp-1">
            {sobre.titulo}
          </h1>
        </div>
        <div>
          <p className="text-black/75 text-xl h-14 line-clamp-2 dark:text-white/75">
            {sobre.descricao}
          </p>
        </div>

        <Link to="/sobre/:id">
          <button className="w-full text-lg bg-darkblue hover:bg-lightblue text-white dark:bg-lightblue dark:hover:bg-darkblue py-2 rounded-lg font-semibold">
            <h2>Ver mais</h2>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SobreCard;
