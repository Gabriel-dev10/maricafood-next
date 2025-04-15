import React from "react";
import { ArrowLeft, Settings } from "lucide-react";
import Link from 'next/link';

export default function PerfilEntregador() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">

      <div className="flex items-center justify-between p-4 bg-yellow-500 shadow">
        <Link href='/PaginaEntregador'>
            <ArrowLeft className="w-5 h-5 text-gray-700" />
        </Link>
        <h1 className="font-semibold text-lg">Perfil</h1>
        <Settings className="w-5 h-5 text-white" />
      </div>

      <div className="flex flex-col items-center py-6">
        <img
          src="/entregador.jpg"
          alt="Avatar"
          className="w-20 h-20 rounded-full mb-2"
        />
        <div className="text-lg font-semibold">Guilherme</div>
        <div className="text-sm text-gray-500">Moto • Maricá - RJ</div>
      </div>

      <div className="px-4 text-sm">
        <p className="mb-3 font-medium">Acompanhe seu cadastro</p>

        <div className="bg-white p-4 rounded-xl shadow mb-4">
          <div className="flex justify-between items-center">
            <p className="font-medium">Dados básicos</p>
            <span className="bg-green-200 text-green-700 text-xs px-2 py-1 rounded-full">Aprovado</span>
          </div>
          <p className="text-xs text-green-500 mt-1">Concluído em 08/06/2023</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow mb-4">
          <div className="flex justify-between items-center">
            <p className="font-medium">Foto do rosto</p>
            <span className="bg-green-200 text-green-700 text-xs px-2 py-1 rounded-full">Aprovado</span>
          </div>
          <p className="text-xs text-green-500 mt-1">Aprovado</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow mb-4">
          <div className="flex justify-between items-center">
            <p className="font-medium">Foto do documento (CNH)</p>
            <span className="bg-red-200 text-red-700 text-xs px-2 py-1 rounded-full">Rejeitado</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Concluído em 08/06/2023</p>
          <p className="text-xs text-red-500 mt-1">O documento enviado está vencido.<br/>Atualize e envie novamente</p>
          <button className="text-red-600 text-sm mt-1 font-medium">Atualizar foto do documento</button>
        </div>

        <div className="bg-white p-4 rounded-xl shadow mb-4">
          <div className="flex justify-between items-center">
            <p className="font-medium">Dados bancários</p>
            <span className="bg-yellow-200 text-yellow-700 text-xs px-2 py-1 rounded-full">Em análise</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Aguardando validação</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow mb-6">
          <div className="flex justify-between items-center">
            <p className="font-medium">Liberação da região</p>
            <span className="bg-yellow-200 text-yellow-700 text-xs px-2 py-1 rounded-full">Em análise</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Aguardando vaga na praça escolhida</p>
        </div>
      </div>
    </div>
  );
}
