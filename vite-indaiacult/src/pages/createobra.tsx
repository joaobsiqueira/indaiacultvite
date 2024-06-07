import React, { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useUser } from "../userContext";
import { GoPencil } from "react-icons/go";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

const CreateObraPage = () => {
  const { keepLoggedIn } = useUser();
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState<File | undefined>(undefined);
  const [banner, setBanner] = useState<File | undefined>(undefined);
  const [bannerUrl, setBannerUrl] = useState("");
  const [redessociais, setRedessociais] = useState([""]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  return (
    <section className="p-5">
      <h1 className="text-2xl font-bold items-start">
        Faça a postagem de uma nova obra
      </h1>
      <form action="" className="flex flex-col p-4 gap-4">
        <label htmlFor="" className="">
          <span className="font-montserrat font-medium">Título da obra</span>
          <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
            <input
              type="text"
              placeholder="Insira um título"
              className="font-montserrat bg-transparent"
            />
          </div>
        </label>
        <label htmlFor="" className="">
          <span className="font-montserrat font-medium">Descrição da obra</span>
          <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
            <input
              type="text"
              placeholder="Insira um título"
              className="font-montserrat bg-transparent"
            />
          </div>
        </label>
        <label>
          <p className="font-medium font-montserrat">
            Insira o tipo de arte que será postado
          </p>
          <div className="p-3">
            <select className="py-2 px-3 text-black border-2 border-darkblue dark:border-lightblue rounded-lg">
              <option value="">Escolha uma opção</option>
              <option value="Pintura">Pintura</option>
              <option value="Música">Música</option>
              <option value="Escultura">Escultura</option>
              <option value="Dança">Dança</option>
              <option value="Poesia">Poesia</option>
            </select>
          </div>
        </label>
        <span className="font-medium font-montserrat">
          Insira uma foto para sua obra
        </span>
        <div className="flex flex-col items-end -space-x-8 -space-y-2">
          <input
            type="file"
            id="ArtistaBannerImagem"
            className="hidden"
            onChange={(e) => {
              e.target.files && setBanner(e.target.files[0]);
            }}
          />
          <img
            src={
              banner ? URL.createObjectURL(banner) : "/defaultObraBanner.png"
            }
            alt=""
            className="rounded-lg border-4 border-darkblue dark:border-lightblue w-full object-cover h-52"
          />

          <label
            htmlFor="ArtistaBannerImagem"
            className="flex cursor-pointer items-center justify-center rounded-full px-3 py-3 w-max h-max bg-darkblue dark:bg-lightblue"
          >
            <GoPencil className="fill-white" />
          </label>
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center bg-darkblue dark:bg-lightblue hover:bg-darkblue dark:hover:bg-darkblue rounded-lg py-3 text-white"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default CreateObraPage;
