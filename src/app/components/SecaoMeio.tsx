'use client';

import { FaMapMarkerAlt, FaMoneyBillWave, FaCreditCard } from "react-icons/fa";

const SecaoMeio = () => {
  return (
    <div className="text-center py-12">
      <h2 id='vantagens' className="text-3xl font-bold text-black mb-8">Por que escolher o MaricáFOOD?</h2>

      <div className="flex flex-wrap gap-20 justify-center">
        <div className="bg-gray-100 rounded-xl p-6 w-80 shadow-md">
          <div className="flex justify-center mt-4 text-yellow-500 text-3xl mb-3">
            <FaMapMarkerAlt />
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">Foco em Maricá</h3>
          <p className="text-gray-700 text-sm">
            Foco local na cidade de Maricá, facilitando a solicitação de refeições com rastreamento, pagamento local e redução do tempo de espera.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 w-80 shadow-md">
          <div className="flex justify-center mt-4 text-yellow-500 text-3xl mb-3">
            <FaMoneyBillWave />
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">Economia local</h3>
          <p className="text-gray-700 text-sm">
            Contribuição para o crescimento da economia local da cidade, através da geração de novos empregos e aumento das vendas locais.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 w-80 shadow-md">
          <div className="flex justify-center mt-4 text-yellow-500 text-3xl mb-3">
            <FaCreditCard />
          </div>
          <h3 className="text-xl font-semibold text-black mb-2">Formas de pagamento</h3>
          <p className="text-gray-700 text-sm">
            Oferece várias formas de pagamento, incluindo dinheiro, cartão de crédito e débito, moeda social Mumbuca e Pix.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecaoMeio;
