'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const entregas = [
  {
    id: '001',
    restaurante: 'Chef Kiss',
    valor: 'R$ 25,00',
    status: 'Entregue',
    data: '13/04/2025 às 19:45',
  },
  {
    id: '002',
    restaurante: 'La Pasta',
    valor: 'R$ 18,00',
    status: 'Entregue',
    data: '12/04/2025 às 21:15',
  },
  {
    id: '003',
    restaurante: 'Naturals',
    valor: 'R$ 22,50',
    status: 'Cancelada',
    data: '11/04/2025 às 17:30',
  },
];

export default function HistoricoEntregas() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">

      <button
        onClick={() => router.back()}
        className="flex items-center text-yellow-600 hover:text-yellow-800 mb-4"
      >
        <ArrowLeft className="mr-2" />
        Voltar
      </button>

      <h1 className="text-3xl font-bold  text-yellow-600 text-center mb-8">
        Histórico de Entregas
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
        {entregas.map((entrega) => (
          <div
            key={entrega.id}
            className="bg-white border border-gray-300 rounded-2xl shadow hover:shadow-lg transition p-6 flex justify-between items-start"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{entrega.restaurante}</h2>
              <p className="text-sm text-gray-500 mt-1">{entrega.data}</p>
              <p
                className={`text-sm mt-2 font-medium ${
                  entrega.status === 'Entregue' ? 'text-green-600' : 'text-red-500'
                }`}
              >
                Status: {entrega.status}
              </p>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold text-gray-800">{entrega.valor}</p>
              <p className="text-xs text-gray-400 mt-1">Pedido ID: #{entrega.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
