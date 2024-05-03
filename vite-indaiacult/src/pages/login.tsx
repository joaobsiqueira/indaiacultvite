import React from "react";
import axios from "axios";
import { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      setError("Credenciais inválidas");
    }
  };
  return (
    <div className="flex justify-center">
      <div className="max-w-md">
        <form className="flex flex-col items-center gap-20 bg-white rounded-lg justify-center w-full p-7 maw-w-md">
          <div className="flex flex-col gap-9 items-center justify-center w-full">
            <h1 className="font-bold text-3xl ">Login</h1>
            <p>
              Não possui uma conta?{" "}
              <a href="/cadastro" className="text-lightblue">
                Cadastre-se
              </a>
            </p>
          </div>

          {error && <div className="text-red-500 mb-4">{error}</div>}
          <input
            type="email"
            placeholder="Insira seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-white border-b-lightblue outline-none w-72"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-white border-b-lightblue outline-none w-72"
          />
          <button
            onClick={handleLogin}
            className="bg-lightblue w-72 py-3 hover:bg-darkblue text-white rounded-md"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
