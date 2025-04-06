'use client';
import Link from 'next/link'

const EntregadorPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-[#FFA500] mb-6">
          Cadastro de Entregador
        </h1>
        
        <form className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Nome Completo</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Telefone</label>
            <input
              type="tel"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Tipo de Veículo</label>
            <select
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
            >
              <option value="">Selecione</option>
              <option value="bicicleta">Bicicleta</option>
              <option value="moto">Moto</option>
              <option value="carro">Carro</option>
            </select>
          </div>

          {/* Botão centralizado */}
          <div className="flex justify-center pt-2">
            <Link
              href="/CadastroEntregador/FormEntregador"
              className="bg-[#FFA500] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#e69500] transition"
            >
              Próximo Passo
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EntregadorPage;
