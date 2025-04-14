'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

export default function FormEntregador() {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  const router = useRouter();

  const handleVerificarClick = () => {
    setMostrarPopup(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#FFA500] mb-6">
          Informações Principais
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            name="cnh"
            placeholder="Número da CNH"
            type="text"
          />
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            name="cpf"
            placeholder="CPF"
            type="text"
          />
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            name="rg"
            placeholder="RG"
            type="text"
          />
          <input
            className="w-full border border-gray-300 rounded px-3 py-2"
            name="email"
            placeholder="Email"
            type="text"
          />

          <div className="relative">
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
              name="senha"
              placeholder="Senha"
              type={mostrarSenha ? 'text' : 'password'}
            />
            <button
              type="button"
              onClick={() => setMostrarSenha(!mostrarSenha)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          <div className="relative">
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
              name="confirmarsenha"
              placeholder="Confirme sua senha"
              type={mostrarConfirmarSenha ? 'text' : 'password'}
            />
            <button
              type="button"
              onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
            >
              {mostrarConfirmarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div>
            <h1 className="font-semibold mb-2 text-black">Envie uma foto</h1>
          </div>
          <input
            type="file"
            accept="image/*"
            className="w-full border border-gray-300 rounded px-3 py-2 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 hover:file:bg-blue-100"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleVerificarClick}
            className="bg-[#FFA500] text-white font-semibold py-2 px-6 rounded hover:bg-orange-600 transition"
          >
            Verificar Aptidão
          </button>
        </div>
      </div>

      {mostrarPopup && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm text-center">
            <h3 className="text-lg font-semibold mb-4 text-[#FFA500]">Verifique seu e-mail</h3>
            <p className="mb-4">Enviamos um link para o seu e-mail. Clique em OK para continuar.</p>
            <button
              onClick={() => router.push('/PaginaEntregador/LoginEntregador')}
              className="bg-[#FFA500] text-white px-6 py-2 rounded hover:bg-orange-600 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
