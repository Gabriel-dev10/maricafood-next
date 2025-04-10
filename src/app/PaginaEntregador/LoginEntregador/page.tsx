'use client';

import { Lock, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function LoginEntregador() {
  const [cpf, setCpf] = useState('');

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 11) value = value.slice(0, 11);

    value = value
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    setCpf(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#d8c30a] to-[#c1c2c4] flex items-center justify-center p-5">
      <div className="w-[400px] bg-white rounded-[30px] shadow-lg p-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Entregador</h1>

        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={handleCpfChange}
              className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-gray-700"
              required
            />
            <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Senha"
              className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-gray-700"
              required
            />
            <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>

          <div className="text-right mb-6">
            <a href="#" className="text-sm text-gray-600 hover:text-[#7494ec]">
              Esqueceu a senha?
            </a>
          </div>

          <Link href="/PaginaEntregador">
            <button className="w-full h-12 rounded-lg text-white font-semibold shadow bg-yellow-500 transition-colors cursor-pointer">
              Entrar
            </button>
          </Link>
        </form>

        <p className="text-center mt-6">
          Ainda não é entregador?{' '}
          <a href="/entregador/registrar" className="text-yellow-600 font-semibold">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginEntregador;
