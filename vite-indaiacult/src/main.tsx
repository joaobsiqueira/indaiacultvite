import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import Layout from "./layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login.tsx";
import SignUpPage from "./pages/signup.tsx";
import ArtistasPage from "./pages/artists.tsx";
import ObrasPage from "./pages/obras.tsx";
import SobrePage from "./pages/sobre.tsx";
import LandingPage from "./pages/landing.tsx";
import { ThemeProvider } from "./context.tsx";
import ArtistDetailstPage from "./pages/atistsdetail.jsx";
import { UserProvider } from "./userContext.tsx";
import PrivateRoute from "./privateRoute.tsx";
import CreateArtist from "./pages/createartist.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <Routes>
            <Route
              path="/*"
              element={
                <Layout>
                  <PrivateRoute element={<ArtistasPage />} path="/artists" />
                  <PrivateRoute element={<ObrasPage />} path="/obras" />
                  <PrivateRoute
                    element={<ArtistDetailstPage />}
                    path="/artist/:id"
                  />
                </Layout>
              }
            />
            <Route element={<CreateArtist />} path="/create" />
            <Route element={<SobrePage />} path="/sobre" />
            <Route element={<LandingPage />} path="/" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<SignUpPage />} path="/cadastro" />
          </Routes>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
