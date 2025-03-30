'use client';

import { useState } from 'react';
import { Mail, Lock, User,} from 'lucide-react';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#d8c30a] to-[#c1c2c4] flex items-center justify-center p-5">
      <div className="relative w-[850px] h-[550px] bg-white rounded-[30px] shadow-lg overflow-hidden">
        
        <div className={`absolute w-1/2 h-full transition-all duration-700 ease-in-out bg-white z-10 flex items-center px-10 
          ${isLogin ? 'right-0' : '-right-full'}`}>
          <form className="w-full text-center" onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-3xl font-bold mb-8">Entrar</h1>
            <div className="relative mb-6">
              <input type="text" placeholder="Nome" className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-gray-700" required />
              <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>
            <div className="relative mb-6">
              <input type="password" placeholder="Senha" className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-gray-700" required />
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>
            <div className="text-right mb-6">
              <a href="#" className="text-sm text-gray-600 hover:text-[#7494ec]">Esqueceu a senha?</a>
            </div>
            <button className="w-full h-12 rounded-lg text-white font-semibold shadow bg-yellow-500 transition-colors cursor-pointer">
              Login
            </button>
          </form>
        </div>

        
        <div className={`absolute w-1/2 h-full transition-all duration-700 ease-in-out bg-white z-10 flex items-center px-10
          ${isLogin ? '-left-full' : 'left-0'}`}>
          <form className="w-full text-center" onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-3xl font-bold mb-8">Registrar</h1>
            <div className="relative mb-6">
              <input type="text" placeholder="Username" className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-gray-700" required />
              <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>
            <div className="relative mb-6">
              <input type="email" placeholder="Email" className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-gray-700" required />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>
            <div className="relative mb-6">
              <input type="password" placeholder="Password" className="w-full py-3 px-5 pr-12 bg-gray-100 rounded-lg outline-none text-gray-700" required />
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>
            <button className="w-full h-12  bg-yellow-500 rounded-lg text-white font-semibold shadow hover:bg-[#8d8c8c9a] transition-colors cursor-pointer">
              Register
            </button>
          </form>
        </div>

        <div className="absolute w-full h-full">
          <div className={`absolute w-[300%] h-full bg-yellow-500 -left-[250%] rounded-[150px] transition-all duration-[2800ms] ease-in-out z-20
            ${isLogin ? '-left-[250%]' : 'left-1/2'}`} />
          
          
          <div className={`absolute w-1/2 h-full flex flex-col items-center justify-center text-white z-20 transition-all duration-600 delay-[1200ms]
            ${isLogin ? 'left-0' : '-left-1/2'}`}>
            <h1 className="text-3xl font-bold mb-4">MaricáFOOD!</h1>
            <p className="mb-6">Não tem conta?</p>
            <button onClick={toggleForm} className="w-40 h-12 border-2 border-white rounded-lg text-white font-semibold hover:bg-white/10 transition-colors cursor-pointer">
              Registrar
            </button>
          </div>

          
          <div className={`absolute w-1/2 h-full flex flex-col items-center justify-center text-white z-20 transition-all duration-600 delay-[1200ms]
            ${isLogin ? '-right-1/2' : 'right-0'}`}>
            <h1 className="text-3xl font-bold mb-4">MaricáFOOD!</h1>
            <p className="mb-6">Já tem uma conta?</p>
            <button onClick={toggleForm} className="w-40 h-12 border-2 border-white rounded-lg text-white font-semibold hover:bg-white/10 transition-colors cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
