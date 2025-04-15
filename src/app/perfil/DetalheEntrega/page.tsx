'use client';

import Footer from '@/app/components/footer';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ThumbsUp, ThumbsDown, X } from 'lucide-react';
import { useState } from 'react';

export default function DetalhesEntrega() {
  const router = useRouter();
  const [avaliar, setAvaliar] = useState(false);
  const [resposta, setResposta] = useState<'top' | 'ruim' | null>(null);
  const [comentario, setComentario] = useState('');

  const etapas = [
    { titulo: 'Pedido feito', hora: '09:57' },
    { titulo: 'Pedido lido', hora: '09:59' },
    { titulo: 'Saiu pra entrega', hora: '10:13' },
    { titulo: 'Entregue', hora: '10:35' },
  ];

  const statusHistorico = [
    { hora: '19:30', status: 'Aguardando agendamento' },
    { hora: '19:40', status: 'Entrega agendada' },
    { hora: '19:56', status: 'Chamando entregador' },
    { hora: '20:01', status: 'Caminho da loja' },
    { hora: '20:10', status: 'Conferindo pedido' },
    { hora: '20:11', status: 'Em rota de entrega' },
    { hora: '20:20', status: 'Entregue' },
    { hora: '20:31', status: 'Retornando para a loja' },
    { hora: '20:38', status: 'Finalizado' },
  ];

  return (
    <div>
        <div className="min-h-screen bg-gray-50 p-4 md:p-6">
        
        <button
            onClick={() => router.back()}
            className="text-yellow-500 mb-4 flex items-center gap-2 font-semibold hover:underline"
        >
            <ChevronLeft size={20} />
            Voltar
        </button>

    
        <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Linha do tempo da entrega</h2>
        <div className="flex flex-wrap justify-center gap-4 bg-white p-6 rounded-xl shadow mb-8">
            {etapas.map((etapa, index) => (
            <div key={index} className="text-center px-4">
                <p className="font-semibold text-gray-800">{etapa.titulo}</p>
                <p className="text-sm text-yellow-600 mt-1">{etapa.hora}</p>
            </div>
            ))}
        </div>

    
        <div className="bg-white p-6 rounded-xl shadow mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-2">📦 Entrega #AQE73456</p>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            <div className="border-l-4 border-yellow-500 pl-4">
                <p className="text-yellow-600 font-bold text-lg">Guilherme</p>
                <p className="text-sm text-gray-600">+55 (44) 90998-9977</p>

                {!avaliar ? (
                <button
                    onClick={() => setAvaliar(true)}
                    className="mt-3 px-4 py-2 bg-yellow-100 text-yellow-700 text-sm rounded-full hover:bg-yellow-200 transition"
                >
                    Avaliar entregador
                </button>
                ) : (
                <div className="mt-4 w-full max-w-md bg-gray-50 border border-gray-300 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                    <div>
                        <p className="text-xs text-gray-500">Entrega dos pedidos: 224355, 224356 e 224357</p>
                    </div>
                    <button onClick={() => setAvaliar(false)}>
                        <X className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                    </button>
                    </div>

                    <p className="text-sm text-gray-700 mb-2">Avalie o entregador</p>
                    <p className="text-teal-600 font-semibold mb-1">Guilherme</p>
                    <p className="text-xs text-gray-400 mb-4">
                    Você está avaliando só esse entregador referente a esses pedidos
                    </p>

                    <div className="flex gap-4 mb-4">
                    <button
                        onClick={() => setResposta('top')}
                        className={`flex items-center gap-1 px-4 py-2 border rounded-full text-sm font-semibold transition ${
                        resposta === 'top'
                            ? 'bg-teal-500 text-white'
                            : 'border-teal-500 text-teal-500 hover:bg-teal-50'
                        }`}
                    >
                        <ThumbsUp size={16} />
                        foi tudo top
                    </button>
                    <button
                        onClick={() => setResposta('ruim')}
                        className={`flex items-center gap-1 px-4 py-2 border rounded-full text-sm font-semibold transition ${
                        resposta === 'ruim'
                            ? 'bg-red-500 text-white'
                            : 'border-red-500 text-red-500 hover:bg-red-50'
                        }`}
                    >
                        <ThumbsDown size={16} />
                        não foi legal
                    </button>
                    </div>

                    <textarea
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    rows={3}
                    className="w-full text-sm p-2 border border-gray-300 rounded-md focus:outline-yellow-400"
                    placeholder="Conta pra gente o que rolou na entrega"
                    />

                    <button
                    onClick={() => {
                        console.log({ resposta, comentario });
                        alert('Avaliação enviada!');
                        setAvaliar(false);
                        setResposta(null);
                        setComentario('');
                    }}
                    className="mt-3 w-full bg-teal-500 hover:bg-teal-600 text-white text-sm py-2 rounded-md transition"
                    >
                    Confirmar
                    </button>
                </div>
                )}
            </div>

            
            <div>
                <h3 className="font-semibold text-yellow-600 text-md mb-2">Status da entrega</h3>
                <ul className="text-sm text-gray-800 space-y-1">
                {statusHistorico.map((item, idx) => (
                    <li key={idx} className="flex justify-between w-72">
                    <span className="text-yellow-600 font-mono">{item.hora}</span>
                    <span className="text-right">{item.status}</span>
                    </li>
                ))}
                </ul>
            </div>
            </div>

        
            <div className="mt-6 text-green-600 font-semibold text-sm">Pagamento já confirmado</div>
        </div>
        </div>
        <Footer/>
    </div>
  );
}
