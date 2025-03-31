'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-yellow-500 sticky top-0 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        
        <div className={`text-white font-bold text-2xl ${isMobile ? 'flex justify-center w-full' : ''}`}>
          <Link href="/">
            <span>Maricá</span>
            <span className="text-black">FOOD</span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="#" className="text-black text-lg hover:text-white transition">
            Vantagens
          </Link>
          <Link href="#" className="text-black text-lg hover:text-white transition">
            Parceiro
          </Link>
        </div>

        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none"
          />
        </div>

        
        <div className={`flex items-center space-x-4 ${isMobile ? 'hidden' : ''}`}>
 
          <button onClick={() => router.push('/carrinho')} className="text-black hover:text-white transition cursor-pointer">
            <ShoppingCart size={24} />
          </button>

     
          <button onClick={() => router.push('/perfil')} className="text-black hover:text-white transition cursor-pointer">
            <User size={24} />
          </button>

   
          <button
            id="btnEntrar"
            onClick={() => router.push('/cadastro')}
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition cursor-pointer"
            disabled={isMobile}
          >
            Entrar
          </button>
        </div>

      
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

     
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-yellow-500 py-4">
    
          
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => router.push('/cadastro/login')}
              className="bg-white text-black px-4 py-4 rounded-full hover:bg-gray-200 transition w-30 m-2"
            >
              Entrar
            </button>
            <button
              onClick={() => router.push('/cadastro/registrar')}
              className="bg-white text-black px-4 py-4 rounded-full hover:bg-gray-200 transition w-30 m-2"
            >
              Registrar
            </button>
          </div>
          
          <div className="relative my-4">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none"
            />
          </div>

          
          <div className="flex items-center space-x-6">
            <button className="text-black hover:text-white transition">
              <a href="/carrinho">
                <ShoppingCart size={24} />
              </a>
            </button>
            <button className="text-black hover:text-white transition">
              <a href="/perfil">
                <User size={24} />
              </a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
