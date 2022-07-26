import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './cadastro/cadastro';

function MainRoutes (){ 
    return (
        <Routes>
            <Route path="/cadastro" element={<App />} />
        </Routes>
    )
}

export default MainRoutes;