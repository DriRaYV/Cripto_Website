import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './loginComp/login';
import Wallet from './walletComp/wallet'
import Sign from './signComp/sign';
import NavBar from './navBarComp/navBar'
// import Perfil from './perfil/perfil'
import Menu from './menuComp/menu'

function MainRoutes (){ 
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signUp" element={<Sign />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/navBar" element={<NavBar />} />
            {/* <Route path="/user" element={<User />} /> */}
            <Route path="/home" element={<Menu/>} /> 
        </Routes>
    )
}

export default MainRoutes;