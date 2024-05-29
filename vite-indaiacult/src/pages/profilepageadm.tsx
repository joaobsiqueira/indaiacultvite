import React, { useEffect } from "react";
import { useUser } from "../userContext";
import { NavigationType, useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { artista } from "../interfaces/ArtistInterface";
import { seeById } from "../services/ArtistService";

const ProfilePageAdm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [artista, setArtista] = useState<artista | undefined>(undefined);
  useEffect(() => {
    if (!id) {
      return navigate("/artists");
    }
    const get = async () => {
      const res = await seeById(id);
      if (!res) {
        return navigate("/artists");
      }
      setArtista(res);
    };
    get();
  }, []);

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

export default ProfilePageAdm;
