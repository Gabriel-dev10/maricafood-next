import React from "react";
import {User, Bell} from "lucide-react";
import Link from 'next/link';

export default function PaginaEntregador() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <div className="flex items-center justify-between p-4 bg-yellow-500 shadow">
        <div className="flex items-center gap-2">
        <Link href="/PaginaEntregador/PainelEntrega">
            <div className="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                Disponível
            </div>
        </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Link href='/PaginaEntregador/PerfilEntregador'>
            <User className="w-6 h-6 text-gray-700 cursor-pointer"/>
          </Link>
          <Bell className="w-6 h-6 text-gray-700"/>
        </div>
      </div>

      <div className="p-3 text-sm bg-green-50 text-green-700 text-center border-b border-green-200">
        Estamos atualizando a suas entregas
      </div>

      <div className="relative w-full h-56">
        <img
          src="/mapa.jpg"
          alt="Mapa"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white m-4 p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-2 text-lg">Novidades</h2>
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border mt-10">
          <div>
            <div className="font-medium">Seguro Pessoal</div>
            <div className="text-sm text-gray-500">Encontre a proteção ideal pra você</div>
          </div>
          <div className="text-red-500 text-xl">›</div>
        </div>
      </div>

      <div className="bg-white m-4 p-4 rounded-xl shadow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-lg">Suas atividades</h2>
          <a href="#" className="text-sm text-red-500 font-medium">Ver extrato</a>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-gray-500">Ganhos de hoje</div>
            <div className="text-xl font-semibold">R$ 120,00</div>
          </div>
          <div>
            <div className="text-gray-500">Você fez</div>
            <div className="text-xl font-semibold">R$ 12,00</div>
            <div className="text-sm text-gray-500">por hora</div>
          </div>
          <div>
            <div className="text-gray-500">Rotas aceitas</div>
            <div className="text-xl font-semibold">23</div>
          </div>
          <div>
            <div className="text-gray-500">Finalizadas</div>
            <div className="text-xl font-semibold">20</div>
          </div>
          <div>
            <div className="text-gray-500">Recusadas</div>
            <div className="text-xl font-semibold">2</div>
          </div>
          <div>
            <div className="text-gray-500">Kms rodados</div>
            <div className="text-xl font-semibold">56</div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-6">
        <div className="bg-green-100 text-green-800 rounded-xl p-3 text-sm text-center">
          Seu ganho mais recente foi às 15:45 — <strong>R$ 9,00</strong>
        </div>
      </div>
    </div>
  );
}