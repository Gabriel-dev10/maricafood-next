"use client";

import React, { useState } from "react";

const ParceiroForm = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    nomeEstabelecimento: "",
    tipoEstabelecimento: "",
    cnpj: "",
    cidade: "Maricá",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-[#FFA500] mb-6">
          Cadastro de Parceiro
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={form.nome}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />

          <input
            type="tel"
            name="telefone"
            placeholder="Telefone / WhatsApp"
            value={form.telefone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />

          <input
            type="text"
            name="nomeEstabelecimento"
            placeholder="Nome do Estabelecimento"
            value={form.nomeEstabelecimento}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />

          <select
            name="tipoEstabelecimento"
            value={form.tipoEstabelecimento}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
            required
          >
            <option value="">Tipo de Estabelecimento</option>
            <option value="Restaurante">Restaurante</option>
            <option value="Mercado">Mercado</option>
            <option value="Lanchonete">Lanchonete</option>
            <option value="Outro">Outro</option>
          </select>

          <input
            type="text"
            name="cnpj"
            placeholder="CNPJ"
            value={form.cnpj}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />

          <textarea
            name="mensagem"
            placeholder="Mensagem (opcional)"
            value={form.mensagem}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-[#FFA500] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#e69500] transition"
            >
              Enviar Cadastro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParceiroForm;
