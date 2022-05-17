import React from "react";
import { Routes, Route,} from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import Sobre from "../Pages/Sobre/Sobre.jsx";
import Consulta from "../Pages/Consulta/Consulta.jsx";
import User from "../Pages/User/User.jsx";
import Detalhes from "../Pages/Detalhes/Detalhes.jsx";


const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="consulta" element={<Consulta />} />
            <Route path="/user/:username" element={<User />} />
            <Route path="/user/:username/:repositorio" element={<Detalhes />} />
        </Routes>
    )
}

export default Rotas;