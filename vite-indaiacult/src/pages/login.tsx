import React from "react";
import axios from "axios";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";
import "../css/login.css";
import { MdOutlineAlternateEmail, MdOutlineLock } from "react-icons/md";
import { Link } from "react-router-dom";
import LandingNav from "../components/LandingNav";
import { LoginUser } from "../services/LoginService";
import { useUser } from "../userContext";

const Login: React.FC = () => {
  const { keepLoggedIn } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const error = await LoginUser(email, password);
      if (error) {
        setError(error);
      }
      keepLoggedIn();
    } catch (error) {
      console.log("peguei", error);
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
      <section className="flex flex-col h-screen items-center justify-center">
        <div className="h-full rounded-xl z-10 relative bg-white dark:bg-diffBlack dark:text-white border-highlight dark:border-highlightDark border-4 px-16 py-8 md:px-28 md:py-12 flex flex-col items-center gap-2 md:gap-8">
          <h1 className="font-semibold font-montserrat text-xl md:text-3xl">
            Bem vindo ao <span className="text-main  font-bold">Indaia</span>
            <span className="text-darkblue dark:text-lightblue  font-bold">
              Cult.
            </span>
          </h1>

          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-2 text-xl w-full"
          >
            <label htmlFor="">
              <span className="font-montserrat">E-mail</span>
              <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark p-2 rounded-lg">
                <MdOutlineAlternateEmail className="text-darkblue dark:text-lightblue text-xl" />
                <input
                  type="text"
                  placeholder="Insira seu e-mail"
                  className="font-montserrat bg-transparent "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>
            <label htmlFor="">
              <span className="font-montserrat">Senha</span>
              <div className="flex items-center gap-4 border-4 border-highlight dark:border-highlightDark  p-3 rounded-lg">
                <MdOutlineLock className="text-darkblue dark:text-lightblue text-xl" />
                <input
                  type="text"
                  placeholder="Insira sua senha"
                  className="font-montserrat bg-transparent "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </label>

            <button
              type="submit"
              className="py-2 font-bold rounded-lg bg-darkblue dark:bg-lightblue text-white"
            >
              Entrar
            </button>
            {error && <div>{error}</div>}
          </form>
          <div className="flex items-center gap-6">
            <span className="text-xl text-darkblue dark:text-lightblue p-2 rounded-full border-2 border-darkblue dark:border-lightblue">
              <FaInstagram />
            </span>
            <span className="text-xl text-darkblue dark:text-lightblue p-2 rounded-full border-2 border-darkblue dark:border-lightblue">
              <FaFacebook />
            </span>
            <span className="text-2xl text-darkblue dark:text-lightblue p-2 rounded-full border-2 border-darkblue dark:border-lightblue">
              <FaGoogle />
            </span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>
              {" "}
              <Link to="" className="text-xl underline">
                Esqueceu a senha?
              </Link>
            </span>
            <span>
              {" "}
              <Link to="/cadastro" className="text-xl underline">
                Não possui uma conta?
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
