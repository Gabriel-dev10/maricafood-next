"use client";

const promocao = [
  {
    id: 1,
    nome: "Suco",
    imagem: "/suco_promo.png", 
    distancia: "1.2 km",
    tempo: "15 min",
    preco: "R$ 5,90",
  },
  {
    id: 2,
    nome: "Macarrão",
    imagem: "/macarrao_promo.png", 
    distancia: "2.5 km",
    tempo: "25 min",
    preco: "R$ 9,90",
  },
  {
    id: 3,
    nome: "Lasanha",
    imagem: "/lasanha_promo.png", 
    distancia: "1.8 km",
    tempo: "20 min",
    preco: "R$ 29,90",
  },
  {
    id: 4,
    nome: "Batata frita",
    imagem: "/batata-frita.png", 
    distancia: "3.2 km",
    tempo: "10 min",
    preco: "R$ 14,90",
  },
];

const CardPromocao = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold text-red-700 mb-6">Promoção</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {promocao.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 text-center border border-gray-200"
          >
            <img
              src={item.imagem}
              alt={item.nome}
              className="w-50 h-50 mx-auto object-contain"
            />
            <h3 className="text-lg font-semibold mt-2">{item.nome}</h3>
            <p className="text-gray-600 text-sm">
              {item.distancia} - {item.tempo}
            </p>
            <p className="text-lg font-bold mt-2">{item.preco}</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg mt-3 cursor-pointer">
              Ver Restaurante
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardPromocao;