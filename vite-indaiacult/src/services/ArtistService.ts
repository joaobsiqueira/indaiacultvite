import { server } from "../server";
import { Artista } from "../interfaces/ArtistInterface";
import { stringify } from "querystring";
import { error } from "console";

export const seeAll = async () => {
  try {
    const response = await server.get("/artist");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar artista:", error);
  }
};

export const seeById = async (id: string) => {
  try {
    const response = await server.get("/usuario/" + id);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar artista por id:", error);
  }
};

export const signUpArtista = async (
  name: string,
  email: string,
  password: string,
  genre: string,
  description: string,
  redessociais: string[],
  image: string,
  banner: string
) => {
  try {
    const res = await server.post("/registrar", {
      name,
      email,
      image,
      description,
      banner,
      genre,
      password,
      redessociais,
    });
    const artist: Artista = {
      _id: res.data._id,
      nome: res.data.name,
      email: res.data.email,
      imagem: res.data.image,
      descricao: res.data.description,
      banner: res.data.banner,
      genero: res.data.genre,
      redessociais: res.data.redessociais,
      avaliacao: res.data.avaliacao,
      qtdAvaliacao: res.data.qtdAvaliacao,
      token: res.data.token,
    };
    window.localStorage.removeItem("user");
    window.localStorage.setItem("artist", JSON.stringify(artist as Artista));
  } catch (error: any) {
    return error.message;
  }
};
