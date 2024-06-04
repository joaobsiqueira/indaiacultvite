import ArtistCard from "../components/ArtistCard";
import Section from "../components/Section";

import { artists } from "../mock";

const ArtistsPage = () => {
  return (
    <Section
      title="Artistas"
      description="Conheça quem alimenta a cultura de Indaiatuba diariamente com seu trabalho"
    >
      <div className="flex flex-col gap-5 ">
        {artists.map((Artista) => (
          <ArtistCard Artista={Artista} key={Artista._id} />
        ))}
      </div>
    </Section>
  );
};

export default ArtistsPage;
