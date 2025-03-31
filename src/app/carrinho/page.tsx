'use client';

import React, { useState } from 'react';
import {Minus, Plus, ShoppingCart, MapPin, Trash2 } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Lasanha de frango',
      restaurant: 'La pasta',
      price: 30.0,
      quantity: 0,
      image: 'https://plus.unsplash.com/premium_photo-1671559021023-3da68c12aeed?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Hamburger Clássico',
      restaurant: 'Tal Burguer',
      price: 25.0,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      name: 'Suco verde',
      restaurant: 'Naturals',
      price: 25.0,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      name: 'Sopa',
      restaurant: 'Chef Kiss',
      price: 25.0,
      quantity: 0,
      image: 'https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]);

  const updateQuantidade = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const PrecoEntrega = 0.50;
  const total = subtotal + PrecoEntrega;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Meu Carrinho</h2>
          <div className="h-1 w-20 bg-yellow-500"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
      
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Seu carrinho está vazio</h3>
                <p className="text-gray-600">Adicione alguns itens deliciosos para começar!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div className="ml-4 flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.restaurant}</p>
                        <p className="text-yellow-500 font-semibold mt-1">
                          R$ {item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-yellow-500 mb-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                        <div className="flex items-center border rounded-lg">
                          <button
                            onClick={() => updateQuantidade(item.id, -1)}
                            className="p-2 hover:text-yellow-500"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantidade(item.id, 1)}
                            className="p-2 hover:text-yellow-500"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Resumo do Pedido</h3>
              
              <div className="mb-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-yellow-500" />
                  <span>Entrega em: Mumbuca, 143, Maricá</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Taxa de entrega</span>
                  <span className="font-medium">R$ {PrecoEntrega.toFixed(2)}</span>
                </div>
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold text-yellow-500">
                      R$ {total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-yellow-500 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-yellow-500 transition-colors">
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;