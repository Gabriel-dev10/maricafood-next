'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart} from 'lucide-react';
import Link from 'next/link';

const NavbarRestaurantes = () => {
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

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/">
          <div className="text-yellow-500 text-2xl font-bold">
            Maricá<span className="text-black">FOOD</span>
          </div>
        </Link>

        
        {!isMobile && (
          <input
            type="text"
            placeholder="Buscar restaurantes..."
            className="px-4 py-2 border border-gray-300 rounded-full w-96 focus:outline-none"
          />
        )}

        
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/HistoricoRestaurante')} className="text-black hover:text-yellow-500">
            <ShoppingCart size={24} />
          </button>
        </div>
      </div>

      
      <div className="overflow-x-auto whitespace-nowrap border-t border-gray-100 py-2 px-4 bg-white">
        {['Pizza', 'Hambúrguer', 'Marmita', 'Saudável', 'Doces', 'Japonesa', 'Italiana'].map((categoria) => (
          <button
            key={categoria}
            className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm mx-2 hover:bg-yellow-200 transition"
          >
            {categoria}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavbarRestaurantes;
