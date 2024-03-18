import React from "react";
import undraw_landing from "../assets/undraw_art_lover.svg";
import facebook_icon from "../assets/facebook.svg";
import instagram_icon from "../assets/instagram.svg";
import tiktok_icon from "../assets/tiktok.svg";

const Landing = () => {
  return (
    <div>
      <div className="flex flex-col justify-center md:flex-row  items-center px-16 md:px-32">
        <div className="flex flex-col w-full gap-8   md:gap-14">
          <h1 className="font-montserrat font-semibold text-4xl md:text-5xl">
            Descubra toda a cultura de Indaiatuba em um só lugar
          </h1>
          <p className="font-montserrat font-semibold text-xl">
            O indaiacult te permite explorar <br /> completamente a história{" "}
            <br /> e toda arte indaiatubana.
            <div className="flex flex-row gap-20 mt-14">
              <img src={facebook_icon} alt="facebook" />
              <img src={instagram_icon} alt="instagram" />
              <img src={tiktok_icon} alt="tiktok" />
            </div>
          </p>
        </div>

        <img src={undraw_landing} alt="img" width={500} height={600} />
      </div>
    </div>
  );
};

export default Landing;
