"use client";

import { useState } from "react";
import NavbarRestaurante from "../NavbarRestaurante";
import {
  Paintbrush,
  Search,
  LogOut,
} from "lucide-react";

export default function Layout1() {
  const produtos = new Array(10).fill(null);
  
  const [mostrarBusca, setMostrarBusca] = useState(true);

  const handleTrocarPaleta = () => {
    alert("Funcionalidade de troca de paleta em breve!");
  };

  return (
    <div className="bg-[#fef9f4] min-h-screen relative lg:pr-20">
      <NavbarRestaurante />

      <div className="bg-gradient-to-r from-[#ffcc70] to-[#ff8c42] p-6 flex flex-col items-center relative mt-2">
        <div className="w-24 h-24 bg-white rounded-full mb-2 shadow-lg"></div>
        <div className="w-1/2 h-5 bg-white rounded mb-1 shadow"></div>
        <div className="w-1/3 h-4 bg-white rounded shadow-sm"></div>
      </div>

      {mostrarBusca && (
        <div className="flex justify-center p-4">
          <input
            type="text"
            placeholder="Buscar produto..."
            className="w-1/2 h-10 px-4 rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-[#ff8c42]"
          />
        </div>
      )}

      <div className="px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
        {produtos.map((_, index) => (
          <div key={index} className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-full h-32 bg-gray-200 rounded-lg mb-3"></div>
            <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="flex justify-between items-center">
              <div className="h-5 w-14 bg-gray-300 rounded"></div>
              <button className="px-3 py-1 bg-[#ff8c42] text-white rounded hover:bg-[#ff7a1b] transition text-sm font-medium">
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex flex-col fixed right-0 top-0 w-20 h-full bg-white border-l border-gray-200 p-2 items-center space-y-6 shadow-md">
        <span className="text-[10px] font-semibold text-gray-500 mt-2 text-center">
          Config
        </span>

        <div
          className="flex flex-col items-center text-[#ff8c42] hover:text-[#e5721d] cursor-pointer"
          onClick={handleTrocarPaleta}
        >
          <Paintbrush size={22} />
          <span className="text-[10px] mt-1 text-center">Paleta</span>
        </div>

        <div
          className="flex flex-col items-center text-[#ff8c42] hover:text-[#e5721d] cursor-pointer"
          onClick={() => setMostrarBusca(!mostrarBusca)}
        >
          <Search size={22} />
          <span className="text-[10px] mt-1 text-center">
            {mostrarBusca ? "Esconder" : "Busca"}
          </span>
        </div>

        <div className="flex flex-col items-center text-[#ff8c42] hover:text-red-500 cursor-pointer">
          <LogOut size={22} />
          <span className="text-[10px] mt-1 text-center">Sair</span>
        </div>
      </div>
    </div>
  );
}
