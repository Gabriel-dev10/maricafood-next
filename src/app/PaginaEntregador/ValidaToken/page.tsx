'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function ValidarTokenPage() {
  const [token, setToken] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [status, setStatus] = useState<'sucesso' | 'erro' | ''>('');
  const router = useRouter();

  const validarToken = async () => {
    const tokenCorreto = '123456';

    if (token === tokenCorreto) {
      setMensagem('Entrega validada com sucesso!');
      setStatus('sucesso');
    } else {
      setMensagem('Token inválido. Tente novamente.');
      setStatus('erro');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4 relative">
      {/* Botão de voltar */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 text-yellow-600 hover:text-yellow-800 flex items-center"
      >
        <ArrowLeft className="mr-2" />
        Voltar
      </button>

      <h1 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Validar Entrega</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <label htmlFor="token" className="block mb-2 font-medium text-gray-700">
          Digite o token do cliente:
        </label>
        <input
          type="text"
          id="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          onClick={validarToken}
          className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Validar Token
        </button>

        {mensagem && (
          <p
            className={`mt-4 text-center font-semibold ${
              status === 'sucesso' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {mensagem}
          </p>
        )}
      </div>
    </div>
  );
}
