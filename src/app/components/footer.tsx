'use client';

import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-10 bg-yellow-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          
          <div>
            <Link href="/">
              <h2 className="text-2xl font-bold text-white">Maricá <span className='text-black'>FOOD</span></h2>
              <p className="text-black-400 text-sm mt-2">O melhor sabor da cidade!</p>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/escolhaLayout" className="text-black-300 hover:text-red-500 transition text-lg cursor-pointer">Layout</Link>
            <Link href="/carrinhoChefkiss" className="text-black-300 hover:text-red-500 transition text-lg cursor-pointer">Carrinho Chefkiss</Link>
          </div>

          <div className="flex space-x-4">
            <a href="" target="_blank" className="text-black-300 hover:text-red-500 transition text-2xl cursor-pointer">
              <FaFacebook />
            </a>
            <a href="" target="_blank" className="text-black-300 hover:text-red-500 transition text-2xl cursor-pointer">
              <FaInstagram />
            </a>
            <a href="" target="_blank" className="text-black-300 hover:text-red-500 transition text-2xl cursor-pointer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <p className="text-black-400 text-sm text-center">
          © {new Date().getFullYear()} MaricáFOOD. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
