'use client';

import { useState } from 'react';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { User, Clock, MapPin, ShoppingBag } from 'lucide-react';

const PerfilPage = () => {
  const [userData] = useState({
    name: 'João Silva',
    email: 'joaobastos@gmail.com',
    address: 'Mumbuca, 143, Maricá',
    orders: [
      { id: 1, items: 'Lasanha de frango', total: 30.0, date: '2025-03-25' },
      { id: 2, items: 'Hamburger Clássico', total: 20.0, date: '2025-03-28' },
    ]
  });

  return (
    <div>
      <Navbar />
      
      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Meu Perfil</h2>
          <div className="h-1 w-20 bg-yellow-500"></div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-gray-800">{userData.name}</h3>
              <p className="text-gray-600">{userData.email}</p>
            </div>
          </div>
          
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-5 h-5 mr-2 text-yellow-500" />
            <span>{userData.address}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <ShoppingBag className="w-6 h-6 text-yellow-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Histórico de Pedidos</h3>
          </div>

          {userData.orders.length === 0 ? (
            <p className="text-center text-gray-600 py-8">Você ainda não fez pedidos.</p>
          ) : (
            <div className="space-y-4">
              {userData.orders.map(order => (
                <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#F83D3D]/10 rounded-full flex items-center justify-center mr-3">
                        <ShoppingBag className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{order.items}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {order.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-black">
                        R$ {order.total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PerfilPage;
