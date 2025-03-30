"use client";
import Buttoncard from "./ButtonCard";


const Card = () => {
  return (
    <div className="flex flex-wrap gap-40 justify-center mt-8">
      <div className="flex flex-col gap-4 justify-center rounded-lg w-[250px] bg-white p-4">
        <img className="h-48 object-cover rounded-lg"src="mark.png"alt="Restaurante"/>
        <div className="w-full">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-semibold text-black">Restaurante</h3>
            <p className="text-lg text-gray-700 mt-2">
              Cadastre seu restaurante, seja nosso parceiro e venda muito mais
              com o nosso app.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Buttoncard texto="Cadastre-se"/>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center rounded-lg w-[250px] bg-white p-4">
        <img className="h-48 object-cover rounded-lg"src="moto.png"alt="Restaurante"/>
        <div className="w-full">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-semibold text-black">Restaurante</h3>
            <p className="text-lg text-gray-700 mt-2">
              Cadastre seu restaurante, seja nosso parceiro e venda muito mais
              com o nosso app.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Buttoncard texto="Cadastre-se"/>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center rounded-lg w-[250px] bg-white p-4">
        <img className="h-48 object-cover rounded-lg"src="cesta.png"alt="Restaurante"/>
        <div className="w-full">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-semibold text-black">Restaurante</h3>
            <p className="text-lg text-gray-700 mt-2">
              Cadastre seu restaurante, seja nosso parceiro e venda muito mais
              com o nosso app.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Buttoncard texto="Cadastre-se"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
