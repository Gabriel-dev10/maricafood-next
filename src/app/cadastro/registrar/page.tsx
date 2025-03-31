'use client';

import { Mail, Lock, User } from 'lucide-react';

function registrar() {
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#d8c30a] to-[#c1c2c4] flex items-center justify-center p-5">
      <div className="w-[400px] bg-white rounded-[30px] shadow-lg p-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Registrar</h1>

        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-gray-700"
              required
            />
            <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>

          <div className="relative mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-gray-700"
              required
            />
            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
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

          <button   className="w-full h-12 bg-yellow-500 rounded-lg text-white font-semibold shadow hover:bg-[#8d8c8c9a] transition-colors cursor-pointer">
            Registrar
          </button>
        </form>

        <p className="text-center mt-6">
          Já tem uma conta?{' '}
          <a href="/cadastro/login" className="text-yellow-600 font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default registrar;
