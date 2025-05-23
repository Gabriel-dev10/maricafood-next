'use client';

import { Lock, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";
import { useState } from 'react';

function Login() {
  // States
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();
  
  const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault()

      const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push("/pedidos");
    } else {
      setError('Credenciais inválidas!')
      console.log(error)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#d8c30a] to-[#c1c2c4] flex items-center justify-center p-5">
      <div className="w-[400px] bg-white rounded-[30px] shadow-lg p-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Entrar</h1>

        <form className="w-full" onSubmit={handleLogin}>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Nome"
              className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-gray-700"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Senha"
              className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>

          <div className="text-right mb-6">
            <a href="#" className="text-sm text-gray-600 hover:text-[#7494ec]">
              Esqueceu a senha?
            </a>
          </div>

          <button
            onClick={() => router.push('/')}
            className="w-full h-12 rounded-lg text-white font-semibold shadow bg-yellow-500 transition-colors cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6">
          Não tem conta?{' '}
          <a href="/cadastro/registrar" className="text-yellow-600 font-semibold">
            Registrar
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
