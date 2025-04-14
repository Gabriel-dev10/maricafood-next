'use client'

import React, { useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

const pedidosIniciais = [
  {
    id: 1,
    NomeCliente: 'Maria Eduarda',
    cliente: 'Naturals',
    endereco: 'Rua das Palmeiras, 45 - São José, Maricá',
    telefone: '21 99777-3344',
    pagamento: 'Cartão de Débito - Mumbuca',
    produtos: [
      { nome: 'Sanduíche Natural de Frango', preco: 18.5 },
      { nome: 'Água de Coco 300ml', preco: 4.0 },
    ],
    entrega: 5.5,
    data: '05/04 17:00',
    status: 'disponivel',
  },
  {
    id: 2,
    NomeCliente: 'Carlos',
    cliente: 'Chef Kiss',
    endereco: 'Av. Francisco Sabino da Costa, 89 - Centro, Maricá',
    telefone: '21 99666-2211',
    pagamento: 'PIX',
    produtos: [
      { nome: 'Combo Sushi (12 peças)', preco: 42.0 },
      { nome: 'Refrigerante 600ml', preco: 6.0 },
    ],
    entrega: 7.0,
    data: '05/04 17:10',
    status: 'disponivel',
  },
  {
    id: 3,
    NomeCliente: 'Jessica',
    cliente: 'Tal Burguer',
    endereco: 'Av. Roberto Silveira, 123 - Centro, Maricá',
    telefone: '21 99888-1122',
    pagamento: 'Dinheiro (troco para R$ 100,00)',
    produtos: [
      { nome: 'X-Tudo Completo', preco: 29.9 },
      { nome: 'Batata Frita Média', preco: 9.5 },
    ],
    entrega: 7.5,
    data: '05/04 17:45',
    status: 'disponivel',
  },
]

export default function PainelMotoboy() {
  const [pedidos, setPedidos] = useState(pedidosIniciais)
  const [pedidoSelecionado, setPedidoSelecionado] = useState<typeof pedidosIniciais[0] | null>(pedidos[0])
  const router = useRouter()

  const aceitarEntrega = () => {
    setPedidos((prev) =>
      prev.map((p) =>
        p.id === pedidoSelecionado?.id ? { ...p, status: 'em-entrega' } : p
      )
    )
  }

  const pedidosDisponiveis = pedidos.filter((p) => p.status === 'disponivel')

  return (
    <div className="flex h-screen bg-[#f8f8f8] font-sans">
      <aside className="w-1/4 bg-white p-6 border-r border-gray-200 overflow-y-auto shadow-md">
        <h2 className="text-xl font-bold text-[#FFA500] mb-6"> Olá Guilherme, <br /> Pedidos Disponíveis</h2>
        {pedidosDisponiveis.length === 0 && (
          <p className="text-sm text-gray-500">Nenhum pedido disponível.</p>
        )}
        {pedidosDisponiveis.map((pedido) => (
          <div
            key={pedido.id}
            className="bg-[#fff0f0] p-4 rounded-lg shadow-sm mb-4 border-l-4 border-[#FFA500] cursor-pointer hover:bg-[#ffe5e5]"
            onClick={() => setPedidoSelecionado(pedido)}
          >
            <p className="text-base font-semibold text-gray-800">{pedido.cliente}</p>
            <p className="text-xs text-[#FFA500] mt-1">Novo pedido ({pedido.data})</p>
          </div>
        ))}
      </aside>

      <main className="flex-1 p-8 bg-white">
        
        <div className="mb-6">
          <button
            onClick={() => router.push('/PaginaEntregador')}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#FFA500] transition-all"
          >
            <IoArrowBack size={20} />
            Voltar
          </button>
        </div>

        {pedidoSelecionado ? (
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPedidoSelecionado(null)}
                  className="text-[#FFA500] hover:text-[#e84343] transition-all"
                  title="Voltar"
                >
                  <IoArrowBack size={24} />
                </button>
                <h2 className="text-2xl font-bold text-[#333]">
                  {pedidoSelecionado.cliente}
                </h2>
              </div>
              <p className="text-sm text-gray-400">{pedidoSelecionado.data}</p>
            </div>

            <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md mb-6 border-l-4 border-yellow-500 text-sm">
              Pedido disponível para entrega.
              <span className="ml-2 underline cursor-pointer text-blue-600">
                [Ver no Mapa]
              </span>
            </div>

            <section className="mb-6">
              <h3 className="font-semibold text-[#333] mb-1">Cliente</h3>
              <p className="text-sm text-gray-700">{pedidoSelecionado.NomeCliente}</p>
            </section>

            <section className="mb-6">
              <h3 className="font-semibold text-[#333] mb-1">Endereço de Entrega</h3>
              <p className="text-sm text-gray-700">{pedidoSelecionado.endereco}</p>
              <p className="text-sm text-gray-700">{pedidoSelecionado.telefone}</p>
            </section>

            <section className="mb-6">
              <h3 className="font-semibold text-[#333] mb-1">Pagamento</h3>
              <p className="text-sm text-gray-700">{pedidoSelecionado.pagamento}</p>
            </section>

            <section className="mb-6">
              <h3 className="font-semibold text-[#333] mb-2">Itens do Pedido</h3>
              <ul className="text-sm text-gray-700">
                {pedidoSelecionado.produtos.map((item, index) => (
                  <li key={index} className="flex justify-between py-1">
                    <span>{item.nome}</span>
                    <span>R$ {item.preco.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t mt-4 pt-3">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>
                    R${' '}
                    {pedidoSelecionado.produtos
                      .reduce((acc, cur) => acc + cur.preco, 0)
                      .toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Entrega</span>
                  <span>R$ {pedidoSelecionado.entrega.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-bold mt-2">
                  <span>Total</span>
                  <span>
                    R${' '}
                    {(
                      pedidoSelecionado.produtos.reduce(
                        (acc, cur) => acc + cur.preco,
                        0
                      ) + pedidoSelecionado.entrega
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </section>

            <button
              className="w-full bg-[#FFA500] text-white py-3 rounded-lg font-semibold hover:bg-[#e84343] transition-all"
              onClick={aceitarEntrega}
            >
              Aceitar Entrega
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500">Selecione um pedido à esquerda.</p>
        )}
      </main>
    </div>
  )
}
