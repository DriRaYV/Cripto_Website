import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carteira from './carteira/carteira'
import App from './cadastro/cadastro';

function MainRoutes (){ 
    return (
        <Routes>
            <Route path="/cadastro" element={<App />} />
            <Route path="/carteira" element={<Carteira />} />
        </Routes>
    )
}

export default MainRoutes;