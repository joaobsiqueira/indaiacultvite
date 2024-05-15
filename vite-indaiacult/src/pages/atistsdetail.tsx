import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { artists } from "../mock";
import { Artist } from "../interfaces/ArtistInterface";
import { LuPencil } from "react-icons/lu";

const ArtistDetailstPage = () => {
  const { id } = useParams();

  const [artista] = useState<Artist | undefined>(artists[0]); //fazer setArtista
  if (!id || !artista) {
    return <Navigate to={"/artist"} replace />;
  }
  return (
    <section className="max-w-screen-sm mx-auto">
      <div className="flex flex-col gap-2 w-max items-center">
        <img
          src={artista.image}
          alt={`foto de perfil do artista ${artista.name}`}
          width={200}
          height={200}
          className="rounded-full border-4 border-lightblue object-cover"
        />
        <h1 className="text-2xl font-bold font-montserrat dark:text-white">
          {artista.name}
        </h1>
        <h2 className="font-xl text-black/50 dark:text-white/50">
          {artista.genre}
        </h2>
        <p className="">{artista.description}</p>
      </div>
    </section>
  );
};

export default ArtistDetailstPage;
