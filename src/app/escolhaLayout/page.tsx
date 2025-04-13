'use client';

import { useState } from "react";
import Image from "next/image";
import Footer from "@/app/components/footer";
import { useRouter } from 'next/navigation';

export default function LayoutSelector() {
  const router = useRouter();
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);

  const layouts = [
    { id: 1, name: "Opção 1", src: "/imglayout/opcao1.jpg" },
    { id: 2, name: "Opção 2", src: "/imglayout/opcao2.jpg" },
    { id: 3, name: "Opção 3", src: "/imglayout/opcao3.jpg" },
    { id: 4, name: "Opção padrão", src: "/imglayout/Padrao.jpg" },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-20">
        <div className="mt-15 text-center px-4">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 mt-10">Escolha o Layout do Restaurante</h1>
          <p className="text-lg mb-8 text-gray-600">Selecione o layout que deseja usar para o seu restaurante. Clique nas opções abaixo para visualizar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:gap-6 gap-4 mb-8">
          {layouts.map((layout) => (
            <button
              key={layout.id}
              onClick={() => setSelectedLayout(layout.src)}
              className="p-4 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-2">{layout.name}</h3>
              <Image
                src={layout.src}
                alt={`Visualização de ${layout.name}`}
                width={200}
                height={150}
                className="rounded-lg cursor-pointer"
              />
            </button>
          ))}
        </div>

        {selectedLayout && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="relative w-4/5 h-4/5 bg-white rounded-lg overflow-hidden shadow-xl">
              <Image
                src={selectedLayout}
                alt="Layout selecionado"
                layout="fill"
                objectFit="contain"
              />
              <button
                className="absolute top-4 right-4 bg-white p-2 rounded-full text-black"
                 onClick={() => {
                 router.push('/components/Layout1');
              }}
              >
                ✓
              </button>
            </div>
            <button
                className="absolute top-4 right-4 bg-white p-2 rounded-full text-black"
                onClick={() => setSelectedLayout(null)}
              >
                X
              </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
