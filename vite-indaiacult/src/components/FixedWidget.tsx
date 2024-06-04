import React from "react";
import { artists } from "../mock";
import ArtistCard from "./ArtistCard";
import ObrasCard from "./ObrasCard";

const FixedWidget = () => {
  return (
    <aside className="bg-solid dark:black p-3 gap-4 overflow-hidden sticky border-4 border-highlight dark:border-highlightDark dark:bg-highlightDark rounded-2xl">
      <h1 className="flex text-2xl p-4 items-center justify-center">
        Destaques
      </h1>
      <div className="flex flex-col items-center gap-5">
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
        <img className="bg-main w-[512px] h-32" />
      </div>
    </aside>
  );
};

export default FixedWidget;
