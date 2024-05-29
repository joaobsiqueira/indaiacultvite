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
  nome: string,
  imagem: string,
  descricao: string,
  banner: string,
  email: string,
  redessociais: string[],
  genero: string,
  avaliacao: string,
  qtdAvaliacao: string
) => {
  try {
    const res = await server.post("/registrar", {
      nome,
      email,
      imagem,
      descricao,
      banner,
      genero,
      redessociais,
      avaliacao,
      qtdAvaliacao,
    });
    const artist: Artista = {
      _id: res.data._id,
      nome: res.data.nome,
      email: res.data.email,
      imagem: res.data.imagem,
      descricao: res.data.descricao,
      banner: res.data.banner,
      genero: res.data.genero,
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
