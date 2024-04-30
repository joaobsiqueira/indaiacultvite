import React from "react";
import axios from "axios";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:5173/loginTonon", {
        email,
        password,
      });
    } catch (error) {
      setError("Credenciais inválidas");
    }
  };

  return (
    <>
      <body className="">
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"></script>
        <link rel="stylesheet" href="../../public/loginTonon.css" />
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
        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span className="dark:#F87060">-&gt; Logar </span>
                  <a href="/signUpTonon">
                    <span className="dark:#F87060">Cadastrar-se &lt;-</span>
                  </a>
                </h6>
                <div className="card-3d-wrap mx-auto dark:#F87060">
                  <div className="card-3d-wrapper ">
                    <div className="card-login dark:bg-darkblue">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <form className="flex flex-col items-center justify-center w-full">
                            {error && (
                              <div className="text-500 mb-4">{error}</div>
                            )}
                            <h4 className="mb-1 ">Logar</h4>
                            <div className="social">
                              <div className="social-container">
                                <a href="">
                                  <FaFacebook
                                    size={25}
                                    className="text-beje dark:text-lightblue hover:scale-110"
                                    aria-label="Ícone do Facebook, que irá te permitir inserir os dados da sua conta Facebook ao IndaiaCult"
                                  />
                                </a>
                              </div>
                              <div className="social-container">
                                <a href="">
                                  <FaInstagram
                                    size={25}
                                    className="text-beje dark:text-lightblue hover:scale-110"
                                    aria-label="Ícone do Instagram, que irá te permitir inserir os dados da sua conta Instagram ao IndaiaCult"
                                  />
                                </a>
                              </div>
                              <div className="social-container">
                                <a href="">
                                  <FaGoogle
                                    size={23}
                                    className="text-beje dark:text-lightblue hover:scale-110"
                                    aria-label="Ícone do Google, que irá te permitir inserir os dados da sua conta Google ao IndaiaCult"
                                  />
                                </a>
                              </div>
                            </div>{" "}
                            <br />
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-style dark:bg-darkblue"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <i className="input-icon uil uil-at" />
                            </div>
                            <div className="form-group mt-3">
                              <input
                                type="password"
                                className="form-style dark:bg-darkblue"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <i className="input-icon uil uil-lock-alt" />
                            </div>{" "}
                            <br />
                            <button
                              onClick={handleLogin}
                              className="bg-main dark:bg-lightblue w-72 py-3 hover:bg-beje text-white rounded-md"
                            >
                              Entrar
                            </button>
                            <p className="mb-0 mt-4 text-center dark:#F87060">
                              <a
                                className="dark:#F87060  dark:hover:text-lightblue"
                                href="./senha"
                                type="link"
                              >
                                Esqueceu a senha?
                              </a>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;
