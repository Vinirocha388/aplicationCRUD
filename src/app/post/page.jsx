'use client'

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PostPage() {
  const [formData, setFormData] = useState({
    name: '',
    status: 'Alive',
    species: '',
    gender: 'Male',
    image: ''
  });

  // Carregar dados do sessionStorage ao montar o componente
  useEffect(() => {
    const savedData = sessionStorage.getItem('characterFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Salvar dados no sessionStorage quando o formData mudar
  useEffect(() => {
    sessionStorage.setItem('characterFormData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar campos obrigatórios
    if (!formData.name || !formData.species || !formData.image) {
      toast.error('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    // Aqui você pode implementar a lógica para enviar os dados para sua API
    console.log('Dados do personagem:', formData);
    toast.success('Personagem salvo com sucesso!');

    // Limpar o formulário e o sessionStorage
    setFormData({
      name: '',
      status: 'Alive',
      species: '',
      gender: 'Male',
      image: ''
    });
    sessionStorage.removeItem('characterFormData');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Criar Novo Personagem</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Nome do personagem"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="Alive">Vivo</option>
            <option value="Dead">Morto</option>
            <option value="unknown">Desconhecido</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Espécie *</label>
          <input
            type="text"
            name="species"
            value={formData.species}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Ex: Humano, Alien, etc."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gênero</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="Male">Masculino</option>
            <option value="Female">Feminino</option>
            <option value="Genderless">Sem Gênero</option>
            <option value="unknown">Desconhecido</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">URL da Imagem *</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="https://exemplo.com/imagem.jpg"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => {
              setFormData({
                name: '',
                status: 'Alive',
                species: '',
                gender: 'Male',
                image: ''
              });
              sessionStorage.removeItem('characterFormData');
              toast.info('Formulário limpo!');
            }}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Limpar
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Salvar Personagem
          </button>
        </div>
      </form>

      <ToastContainer position="bottom-right" />
    </div>
  );
}