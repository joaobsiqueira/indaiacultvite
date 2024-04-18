import React from "react";
import ArtistCard from "../components/ArtistCard";
import { Artist } from "../interfaces/ArtistInterface";

const ArtistsPage = () => {
  const ArtistData: Artist[] = [
    {
      id: crypto.randomUUID(),
      name: "Pedro Alonso",
      genre: "Artista / Pintor",
      description:
        "Nascido em Indaiatuba, Pedro Alonso vem realizando seus trabalhos artísticos frequentemente. Segundo a opinião popular, Pedro é a promessa artística de 2024",
      image: "https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg",
      banner:
        "https://as2.ftcdn.net/v2/jpg/05/32/98/47/1000_F_532984739_TxLXy6yYAQlM3KC1Opt3ZSQf3WKCykar.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Pedro Alonso",
      genre: "Artista / Pintor",
      description:
        "Nascido em Indaiatuba, Pedro Alonso vem realizando seus trabalhos artísticos frequentemente. Segundo a opinião popular, Pedro é a promessa artística de 2024",
      image: "https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg",
      banner:
        "https://as2.ftcdn.net/v2/jpg/05/32/98/47/1000_F_532984739_TxLXy6yYAQlM3KC1Opt3ZSQf3WKCykar.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Pedro Alonso",
      genre: "Artista / Pintor",
      description:
        "Nascido em Indaiatuba, Pedro Alonso vem realizando seus trabalhos artísticos frequentemente. Segundo a opinião popular, Pedro é a promessa artística de 2024",
      image: "https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg",
      banner:
        "https://as2.ftcdn.net/v2/jpg/05/32/98/47/1000_F_532984739_TxLXy6yYAQlM3KC1Opt3ZSQf3WKCykar.jpg",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-5 justify-center text-2xl font-semibold font-montserrat dark:text-white">
          Artistas
          <p className="flex text-lg items-center p-4 dark:text-white font-semibold">
            Conheça quem alimenta a cultura de Indaiatuba diariamente com seu
            trabalho
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          {ArtistData.map((artista) => (
            <ArtistCard artista={artista} key={artista.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage;
