import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/scss/base.css'
import './assets/scss/index.scss'
import LandingPage from './views/Landing/Landing';
import { RegisterUser } from './views/RegisterUser/RegisterUser';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<LandingPage></LandingPage>}></Route>
          <Route path='/register' element={<RegisterUser></RegisterUser>}></Route>
        </Route>
      </Routes>  
    </BrowserRouter>
  </React.StrictMode>
)
