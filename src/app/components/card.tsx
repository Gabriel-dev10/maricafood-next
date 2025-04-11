"use client";
import Buttoncard from "./ButtonCard";
import Image from "next/image";


const Card = () => {
  return (
    <div className="flex flex-wrap gap-40 justify-center mt-8">
      <div className="flex flex-col gap-4 justify-center rounded-lg w-[250px] bg-white p-4">
          <Image
            src="/mark.png"
            alt="Restaurante"
            width={300} // você pode ajustar esse valor conforme o layout
            height={192} // equivalente a h-48 (48 * 4 = 192px)
            className="object-cover rounded-lg"
            style={{ height: '12rem' }} // força h-48 se necessário
          />
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
          <Image
            src="/moto.png"
            alt="Moto"
            width={300} // você pode ajustar esse valor conforme o layout
            height={192} // equivalente a h-48 (48 * 4 = 192px)
            className="object-cover rounded-lg"
            style={{ height: '12rem' }} // força h-48 se necessário
          />
        <div className="w-full">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-semibold text-black">Entregador</h3>
            <p className="text-lg text-gray-700 mt-2">
              Cadastre se como entregador, seja nosso parceiro e ganhe muito mais
              com o nosso app.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Buttoncard texto="Cadastre-se" href="/CadastroEntregador"/>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center rounded-lg w-[250px] bg-white p-4">
          <Image
            src="/cesta.png"
            alt="Cesta"
            width={300} // você pode ajustar esse valor conforme o layout
            height={192} // equivalente a h-48 (48 * 4 = 192px)
            className="object-cover rounded-lg"
            style={{ height: '12rem' }} // força h-48 se necessário
          />
        <div className="w-full">
          <div className="text-center mb-4">
            <h3 className="text-2xl font-semibold text-black">Mercado</h3>
            <p className="text-lg text-gray-700 mt-2">
              Cadastre seu mercado, seja nosso parceiro e venda muito mais
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
