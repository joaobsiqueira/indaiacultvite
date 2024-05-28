import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { artists } from "../mock";
import { artista } from "../interfaces/ArtistInterface";
import { LuPencil } from "react-icons/lu"; //adicionar icone para editar foto

const ArtistDetailstPage = () => {
  const { id } = useParams();

  const [artista] = useState<artista | undefined>(artists[0]); //fazer setArtista
  if (!id || !artista) {
    return <Navigate to={"/artist"} replace />;
  }
  return (
    <section className="">
      <div className="flex flex-col w-full rounded-xl gap-4 text-justify">
        <div className="-space-y-24 object-cover ">
          <img
            src={artista.banner}
            alt={`foto banner do artista ${artista.nome}`}
            className="w-full h-48  object-cover"
          />
          <img
            className="rounded-full object-cover h-48 w-48  mx-5"
            src={artista.imagem}
            alt={`foto de perfil do artista ${artista.nome}`}
          />
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold font-montserrat dark:text-white">
            {artista.nome}
          </h1>
          <h2 className="font-xl text-black/50 dark:text-white/50">
            {artista.genero}
          </h2>
          <p className="">{artista.descricao}</p>

          <h1 className="font-bold font-montserrat text-2xl">
            Obras de {artista.nome}:
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ArtistDetailstPage;
