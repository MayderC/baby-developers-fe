import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/scss/base.css";
import "./assets/scss/index.scss";
import LandingPage from "./views/Landing/Landing";
import { RegisterUser } from "./views/RegisterUser/RegisterUser";
import { HomeRoot } from "./views/Home/HomeRoot";
import { HomeView } from "./views/Home/HomeView/HomeView";
import { ProfileView } from "./views/Home/ProfileView/ProfileView";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />}></Route>
          <Route path="register" element={<RegisterUser />}></Route>
          <Route path="home" element={<HomeRoot />}>
            <Route index element={<HomeView />}></Route>
            <Route path="profile" element={<ProfileView />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
