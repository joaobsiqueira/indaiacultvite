import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Artist } from "../interfaces/ArtistInterface";

const ArtistCard: React.FC<{
  artista: Artist;
}> = ({ artista }) => {
  return (
    <div className="flex flex-col w-full rounded-lg mx-auto gap-2 shadow-darkblue dark:shadow-lightblue bg-white dark:bg-diffBlack shadow-md">
      <div className="-space-y-12">
        <img
          className="w-full h-32 object-cover rounded-tl-xl rounded-tr-xl"
          src={artista.banner}
          alt="Banner"
        />
        <img
          src={artista.image}
          className="h-24 w-24 ml-4 rounded-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-black/50 dark:text-white/50 font-semibold">
          {artista.genre}
        </p>
        <h3 className=" font-bold dark:text-white">{artista.name}</h3>
        <p className=" dark:text-white">{artista.description}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
