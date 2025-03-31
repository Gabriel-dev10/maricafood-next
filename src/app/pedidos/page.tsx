"use client";

import Navbar from "../components/navbar";
import Carrossel from "../components/Carrosel";
import CardPopulares from "../components/CardPopulares";
import CardPromocao from "../components/CardPromocao";
import CardRestaurante from "../components/CardRestaurante";
import Footer from "../components/footer";


export default function Pedidos() {
    return (
    <div>
        <Navbar />            
        <Carrossel imagens={["/carroselImg/imgcarrosel1.png", "/carroselImg/imgcarrosel2.png", "/carroselImg/imgcarrosel2.png"]} />
        <CardPopulares />
        <CardPromocao />
        <CardRestaurante />
        <Footer />
    </div>
    );
}