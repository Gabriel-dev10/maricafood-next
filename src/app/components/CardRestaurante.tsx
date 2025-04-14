"use client";

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation'; 

const restaurante = [
  {
    id: 1,
    nome: "Tal Burguer",
    imagem: "/restauranteImg/talburguer.png",
    info: "Hambúrgueres artesanais e suculentos.",
    local: "Areal",
    link: "/restaurantes/talburguer",  
  },
  {
    id: 2,
    nome: "La Pasta",
    imagem: "/restauranteImg/lapasta.png",
    info: "Massas frescas com molhos tradicionais.",
    local: "Mumbuca",
    link: "/restaurantes/lapasta", 
  },
  {
    id: 3,
    nome: "Naturals",
    imagem: "/restauranteImg/naturals.png",
    info: "Opções saudáveis e ingredientes naturais.",
    local: "Ponta Negra",
    link: "/restaurantes/naturals",  
  },
  {
    id: 4,
    nome: "Chef Kiss",
    imagem: "/chefkiss.png",
    info: "Comida caseira com toque especial do chef.",
    local: "Flamengo",
    link: "/restaurantes/chefkiss",  
  },
];

const CardRestaurante = () => {
  const router = useRouter(); 

  const handleRedirect = (link: string) => {
    router.push(link);  
  };

  return (
    <section id='restaurante' className="py-8 px-4 bg-[#c2bd60]">
      <h2 className="text-2xl font-bold text-red-500 mb-6">Restaurantes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {restaurante.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 text-center border border-gray-200"
          >
            <Image
              src={item.imagem}
              alt={item.nome}
              width={240} 
              height={240} 
              className="mx-auto object-contain"
            />
            <h3 className="text-lg font-semibold mt-2">{item.nome}</h3>
            <p className="text-gray-600 text-sm">{item.info}</p>
            <p className="text-gray-600 text-sm flex justify-center items-center">
              <MapPin size={16} className="mr-1" />
              {item.local}
            </p>
        
            <button
              onClick={() => handleRedirect(item.link)} 
              className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg mt-3 cursor-pointer"
            >
              Ver Restaurante
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardRestaurante;
