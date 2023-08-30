import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./assets/scss/base.css";
import "./assets/scss/index.scss";
import IndexPage from "./views/Landing/Index";
import { RegisterUser } from "./views/RegisterUser/RegisterUser";
import Home from "./views/Home/Home";
import IndexHome from "./views/Home/IndexHome/IndexHome";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<IndexPage></IndexPage>}></Route>
          <Route
            path="/register"
            element={<RegisterUser></RegisterUser>}
          ></Route>
          <Route path="/home" element={<Home></Home>}>
            <Route index element={<IndexHome></IndexHome>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
