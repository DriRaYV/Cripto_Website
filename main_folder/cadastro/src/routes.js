import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login/login';
import Carteira from './carteira/carteira'
import App from './cadastro/cadastro';

function MainRoutes (){ 
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<App />} />
            <Route path="/carteira" element={<Carteira />} />
            {/* <Route path="/inicio" element={<Inicio />} /> */}
        </Routes>
    )
}

export default MainRoutes;