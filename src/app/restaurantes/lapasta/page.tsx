"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CardPrimario from "@/app/components/layoutpadrao/CardPrimario";
import CardSecundario from "@/app/components/layoutpadrao/CardSecundario";
import CardTerciario from "@/app/components/layoutpadrao/CardTerciario";
import CarroselLayout from "@/app/components/layoutpadrao/CarroselLayout";
import Image from "next/image";

type Produto = {
  id: number;
  nome: string;
  imagem: string;
  distancia: string;
  tempo: string;
  preco: string;
};

const LaPastaPage = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtos2, setProdutos2] = useState<Produto[]>([]);
  const [produtos3, setProdutos3] = useState<Produto[]>([]);

  useEffect(() => {
    const produtosDiferentes: Produto[] = [
      {
        id: 1,
        nome: "Sopa de carne",
        imagem: "/sopa1.png",
        distancia: "3.0 km",
        tempo: "20 min",
        preco: "R$ 16,90",
      },
      {
        id: 2,
        nome: "Sopa de legume",
        imagem: "/sopa2.png",
        distancia: "3.0 km",
        tempo: "20 min",
        preco: "R$ 17,90",
      },
      {
        id: 3,
        nome: "Caldo",
        imagem: "/sopa3.png",
        distancia: "3.0 km",
        tempo: "20 min",
        preco: "R$ 21,90",
      },
      {
        id: 4,
        nome: "Sopa de milho",
        imagem: "/sopa4.png",
        distancia: "3.0 km",
        tempo: "20 min",
        preco: "R$ 18,90",
      },
    ];

    const produtosDiferentes2: Produto[] = [
      {
        id: 1,
        nome: "Coxinha",
        imagem: "/petisco1.png",
        distancia: "2.0 km",
        tempo: "20 min",
        preco: "R$ 9,90",
      },
      {
        id: 2,
        nome: "Salgadinho",
        imagem: "/petisco2.png",
        distancia: "2.0 km",
        tempo: "20 min",
        preco: "R$ 10,90",
      },
      {
        id: 3,
        nome: "Batata-frita",
        imagem: "/petisco3.png",
        distancia: "2.0 km",
        tempo: "20 min",
        preco: "R$ 11,90",
      },
      {
        id: 4,
        nome: "Empanado de queijo",
        imagem: "/petisco4.png",
        distancia: "2.0 km",
        tempo: "20 min",
        preco: "R$ 7,90",
      },
    ];

    const produtosDiferentes3: Produto[] = [
      {
        id: 1,
        nome: "Refrigerante",
        imagem: "/refri1.png",
        distancia: "2.0 km",
        tempo: "20 min",
        preco: "R$ 9,90",
      },
      {
        id: 2,
        nome: "Vinho",
        imagem: "/vinho1.png",
        distancia: "2.0 km",
        tempo: "20 min",
        preco: "R$ 19,90",
      },
      {
        id: 3,
        nome: "Whiskys",
        imagem: "/whisky1.png",
        distancia: "2.0 km",
        tempo: "20 min",
        preco: "R$ 15,90",
      },
      {
        id: 4,
        nome: "Cervejas",
        imagem: "/cerveja1.png",
        distancia: "2.0 km",
        tempo: "20 min",
        preco: "R$ 5,90",
      },
    ];

    setProdutos(produtosDiferentes);
    setProdutos2(produtosDiferentes2);
    setProdutos3(produtosDiferentes3);
  }, []);

  return (
    <div>
      <Navbar />
      <CarroselLayout />
      <div className="py-8 bg-gray-100 flex flex-col items-center text-center">
        <div className="relative w-60 h-60 sm:w-80 sm:h-80 rounded-full overflow-hidden">
          <Image
            src="/restauranteImg/lapasta.png"
            alt="Logo do Restaurante Naturals"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">Restaurante LaPasta</h1>
        <p className="text-md sm:text-lg text-gray-600 mt-4 max-w-lg">
          Bem-vindo ao LaPasta! Aqui você encontra uma seleção deliciosa de pratos, petiscos e bebidas, preparados com carinho e qualidade.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div>
            <h3 className="font-semibold text-gray-800">Distância</h3>
            <p className="text-gray-600">3.0 km</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Tempo de Entrega</h3>
            <p className="text-gray-600">30 min</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Avaliação</h3>
            <p className="text-gray-600">4.7 ★</p>
          </div>
        </div>
      </div>
      <CardPrimario produtos={produtos} />
      <CardSecundario produtos={produtos2} />
      <CardTerciario produtos={produtos3} />
      <Footer />
    </div>
  );
};

export default LaPastaPage;
