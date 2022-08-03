import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './loginComp/login';
import Wallet from './walletComp/wallet'
import Sign from './signComp/sign';
import NavBar from './navBarComp/navBar'
 import User from './userComp/App'
import Menu from './menuComp/menu'

function MainRoutes (){ 
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Sign />} />
            <Route path="/carteira" element={<Wallet />} />
            <Route path="/barra-de-navegação" element={<NavBar />} />
            <Route path="/usuário" element={<User />} />
            <Route path="/inicio" element={<Menu/>} /> 
        </Routes>
    )
}

export default MainRoutes;