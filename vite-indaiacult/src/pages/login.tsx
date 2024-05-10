import React from "react";
import axios from "axios";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";
import "../css/login.css";
import { MdOutlineAlternateEmail, MdOutlineLock } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import LandingNav from "../components/LandingNav";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:5173/login", {
        email,
        password,
      });
    } catch (error) {
      setError("Credenciais inválidas");
    }
  };

  return (
    <>
      <LandingNav />
      <div className="circles">
        <ul>
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
          <li className="dark:bg-lightblue" />
        </ul>
      </div>
      <section className="mt-20 flex flex-col items-center justify-center">
        <div className="rounded-xl z-10 relative bg-white dark:bg-diffBlack dark:text-white border-highlight dark:border-highlightDark border-4 px-32 py-16 flex flex-col items-center gap-8">
          <h1 className="font-semibold font-montserrat text-xl lg:text-4xl">
            Bem vindo ao <span className="text-main  font-bold">Indaia</span>
            <span className="text-darkblue dark:text-lightblue  font-bold">
              Cult.
            </span>
          </h1>

          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-6 text-xl w-full"
          >
            <label htmlFor="">
              <span className="font-montserrat">E-mail</span>
              <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-3 rounded-lg">
                <MdOutlineAlternateEmail className="text-darkblue dark:text-lightblue text-2xl" />
                <input
                  type="text"
                  placeholder="Insira seu e-mail"
                  className="font-montserrat bg-transparent "
                />
              </div>
            </label>
            <label htmlFor="">
              <span className="font-montserrat">Senha</span>
              <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark  p-3 rounded-lg">
                <MdOutlineLock className="text-darkblue dark:text-lightblue text-2xl" />
                <input
                  type="text"
                  placeholder="Insira sua senha"
                  className="font-montserrat bg-transparent "
                />
              </div>
            </label>

            <button
              type="submit"
              className="py-2 font-bold rounded-lg bg-darkblue dark:bg-lightblue text-white"
            >
              Entrar
            </button>
          </form>
          <div className="flex items-center gap-4">
            <span className="text-3xl text-darkblue dark:text-lightblue p-2 rounded-full border-2 border-darkblue dark:border-lightblue">
              <FaInstagram />
            </span>
            <span className="text-3xl text-darkblue dark:text-lightblue p-2 rounded-full border-2 border-darkblue dark:border-lightblue">
              <FaFacebook />
            </span>
            <span className="text-3xl text-darkblue dark:text-lightblue p-2 rounded-full border-2 border-darkblue dark:border-lightblue">
              <FaGoogle />
            </span>
          </div>
          <Link to="" className="text-xl underline">
            Esqueceu a senha?
          </Link>
          <Link to="/cadastro" className="text-xl underline">
            Não possui uma conta?
          </Link>
        </div>
      </section>
    </>
  );
};

export default Login;
