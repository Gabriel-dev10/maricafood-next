'use client';

import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Clock, CheckCircle2, XCircle, AlertCircle, Eye, Printer, Download } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function App() {
  const [filtro, setFiltro] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter] = useState('hoje');
  
  const pedidos = [
    { 
      id: 'PED001', 
      status: 'Finalizado', 
      cliente: 'João Silva',
      endereco: 'Rua das Flores, 123 - Centro, Maricá',
      valor: 50.0, 
      pagamento: 'Cartão de Crédito',
      metodoPagamento: 'Pago',
      data: '28/03/2025',
      hora: '14:30',
      itens: [
        { nome: 'Pizza Margherita', quantidade: 1, valor: 35.0 },
        { nome: 'Refrigerante 2L', quantidade: 1, valor: 15.0 }
      ]
    },
    { 
      id: 'PED002', 
      status: 'Em andamento', 
      cliente: 'Maria Santos',
      endereco: 'Av. Principal, 456 - Inoã, Maricá',
      valor: 75.0, 
      pagamento: 'PIX',
      metodoPagamento: 'Pago',
      data: '28/03/2025',
      hora: '15:15',
      itens: [
        { nome: 'Hambúrguer Especial', quantidade: 2, valor: 60.0 },
        { nome: 'Batata Frita', quantidade: 1, valor: 15.0 }
      ]
    },
    { 
      id: 'PED003', 
      status: 'Cancelado', 
      cliente: 'Carlos Oliveira',
      endereco: 'Rua do Mar, 789 - Itaipuaçu, Maricá',
      valor: 45.0, 
      pagamento: 'Dinheiro',
      metodoPagamento: 'Cancelado',
      data: '28/03/2025',
      hora: '16:00',
      itens: [
        { nome: 'Açaí 500ml', quantidade: 3, valor: 45.0 }
      ]
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Finalizado':
        return 'text-green-500';
      case 'Em andamento':
        return 'text-blue-500';
      case 'Cancelado':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Finalizado':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'Em andamento':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'Cancelado':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const filteredPedidos = pedidos
    .filter(p => filtro === 'Todos' || p.status === filtro)
    .filter(p => 
      p.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto p-6">
          <div className="bg-yellow-500 p-4 rounded-lg flex justify-between items-center text-white mb-6">
            <span className="text-xl font-bold">Painel do Restaurante</span>
            <button className="bg-white text-yellow-500 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Ver Cardápio
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Pedidos</h2>
                <p className="text-gray-600">Gerencie seus pedidos em um só lugar</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                  <Printer className="w-5 h-5" />
                  Imprimir
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                  <Download className="w-5 h-5" />
                  Exportar
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Buscar por código ou cliente..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F83D3D] focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="relative">
                  <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                    <Filter className="w-5 h-5" />
                    {dateFilter}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mb-6 flex-wrap">
              {['Todos', 'Em andamento', 'Finalizado', 'Cancelado'].map((f) => (
                <button
                  key={f}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filtro === f 
                      ? 'bg-gray-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setFiltro(f)}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Código</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Cliente</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Endereço</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Valor</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Pagamento</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Data/Hora</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredPedidos.map((pedido) => (
                    <tr key={pedido.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm font-medium text-gray-900">{pedido.id}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(pedido.status)}
                          <span className={`text-sm font-medium ${getStatusColor(pedido.status)}`}>
                            {pedido.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">{pedido.cliente}</td>
                      <td className="px-4 py-4 text-sm text-gray-600">{pedido.endereco}</td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-900">
                        R$ {pedido.valor.toFixed(2)}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-600">{pedido.pagamento}</span>
                          <span className={`text-sm font-medium ${
                            pedido.metodoPagamento === 'Pago' 
                              ? 'text-green-500' 
                              : 'text-red-500'
                          }`}>
                            {pedido.metodoPagamento}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-600">{pedido.data}</span>
                          <span className="text-sm text-gray-500">{pedido.hora}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#F83D3D] hover:bg-red-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                          Detalhes
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;