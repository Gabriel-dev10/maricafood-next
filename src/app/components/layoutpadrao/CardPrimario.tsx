"use client";

import Image from "next/image";

type Produto = {
  id: number;
  nome: string;
  imagem: string;
  distancia: string;
  tempo: string;
  preco: string;
};

type CardPopularesProps = {
  produtos: Produto[];
};

const CardChefkiss = ({ produtos }: CardPopularesProps) => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold text-red-700 mb-6">Promação de inverno</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {produtos.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 text-center border border-gray-200"
          >
            <div className="w-full max-w-[160px] sm:max-w-[200px] aspect-square mx-auto relative rounded-2xl overflow-hidden">
              <Image
                src={item.imagem}
                alt={item.nome}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 200px, 100vw"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2">{item.nome}</h3>
            <p className="text-gray-600 text-sm">
              {item.distancia} - {item.tempo}
            </p>
            <p className="text-lg font-bold mt-2">{item.preco}</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg mt-3">
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardChefkiss;
