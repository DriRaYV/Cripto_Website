import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './loginComp/login';
import Wallet from './walletComp/wallet'
import Sign from './signComp/sign';
// import Perfil from './perfil/perfil'
// import Inicio from './inicio/inicio'

function MainRoutes (){ 
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signUp" element={<Sign />} />
            <Route path="/wallet" element={<Wallet />} />
            {/* <Route path="/user" element={<User />} /> */}
            {/* <Route path="/menu" element={<Menu />} /> */}
        </Routes>
    )
}

export default MainRoutes;