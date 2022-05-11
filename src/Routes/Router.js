import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Rotas;