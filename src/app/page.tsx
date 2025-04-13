"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import Navbar from "./components/navbar";
import Card from "./components/card";
import SecaoMeio from "./components/SecaoMeio";
import ButtonCard from "./components/ButtonCard";
import Footer from "./components/footer";

export default function Home() {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false); 
    
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };
      
      handleResize(); 
      window.addEventListener('resize', handleResize); 
  
      return () => {
        window.removeEventListener('resize', handleResize); 
      };
    }, []);
  
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-between items-center py-7 mt-10">
          <div className="flex flex-col gap-3 text-center md:text-left md:w-1/2">
            <h2 className="text-2xl font-medium text-black">Bem-vindo ao</h2>
            <h1 className="text-6xl font-bold text-black">
              Maricá<span className="text-yellow-500">FOOD</span>
            </h1>
            <p className="text-lg text-gray-700">
              Uma nova experiência e inovação na área de delivery
            </p>
            <p className="text-lg text-gray-700">Visando somente sua cidade!</p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <button onClick={() => router.push('/pedidos')} className="px-6 py-3 text-lg font-bold text-white bg-yellow-500 rounded-lg hover:bg-[#8d8c8c] transition cursor-pointer">
                Pedir Agora
              </button>
              <button className="px-6 py-3 text-lg font-bold text-white bg-gray-800 rounded-lg hover:bg-yellow-500 transition cursor-pointer">
                Saiba Mais
              </button>
            </div>
          </div>
          {!isMobile && (
            <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
              <img className="max-h-120" src="logo.png" alt="logo" />
            </div>
          )}
        </div>
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <SecaoMeio />
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-8">
              Seja nosso parceiro
            </h2>
          </div>
          <Card />
        </div>
  
        <div className="py-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-10 bg-red-600">
          <h1 className="text-5xl text-white font-bold mt-10">
            Vantagens de ser <span className="text-yellow-500"> parceiro do MaricáFOOD</span>
          </h1>
          <p className="max-w-2xl text-white mt-20 mb-20">
            A plataforma proporciona uma maneira simples e intuitiva de gerenciar
            pedidos e entregas, com integração em tempo real, facilitando o
            processo tanto para o restaurante quanto para o cliente. Além disso, o
            sistema de pagamento online seguro garante transações financeiras
            eficientes e sem riscos. Os estabelecimentos podem também oferecer
            descontos exclusivos, promoções ou cupons para atrair mais clientes,
            enquanto a plataforma oferece relatórios detalhados sobre vendas.
          </p>
          <ButtonCard texto="Seja Parceiro" href="/FormParceiro"/>
        </div>
        <Footer />
      </div>
    );
}
