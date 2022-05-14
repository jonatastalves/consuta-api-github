import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";

const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Rotas;