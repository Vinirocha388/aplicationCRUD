'use client'

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DeletePage() {
  const [searchData, setSearchData] = useState({
    id: '',
    name: ''
  });
  const [characterToDelete, setCharacterToDelete] = useState(null);
  const [isConfirming, setIsConfirming] = useState(false);

  // Carregar dados do sessionStorage ao montar o componente
  useEffect(() => {
    const savedData = sessionStorage.getItem('deleteSearchData');
    if (savedData) {
      setSearchData(JSON.parse(savedData));
    }
  }, []);

  // Salvar dados no sessionStorage quando o searchData mudar
  useEffect(() => {
    sessionStorage.setItem('deleteSearchData', JSON.stringify(searchData));
  }, [searchData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Validar se pelo menos um campo foi preenchido
    if (!searchData.id && !searchData.name) {
      toast.error('Por favor, preencha o ID ou o nome do personagem!');
      return;
    }

    // Simular busca de personagem (aqui você implementaria a busca real na API)
    // Por enquanto, vamos simular um personagem encontrado
    const mockCharacter = {
      id: searchData.id || '1',
      name: searchData.name || 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    };

    setCharacterToDelete(mockCharacter);
    toast.success('Personagem encontrado!');
  };

  const handleDelete = () => {
    if (!characterToDelete) return;

    // Aqui você implementaria a lógica real para deletar o personagem da API
    console.log('Deletando personagem:', characterToDelete);
    
    toast.success(`Personagem "${characterToDelete.name}" deletado com sucesso!`);

    // Limpar os dados após deletar
    setCharacterToDelete(null);
    setIsConfirming(false);
    setSearchData({ id: '', name: '' });
    sessionStorage.removeItem('deleteSearchData');
  };

  const handleCancel = () => {
    setIsConfirming(false);
  };

  const handleConfirmDelete = () => {
    setIsConfirming(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-red-800 mb-6">Deletar Personagem</h1>
      
      {!characterToDelete ? (
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Atenção
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>Esta ação não pode ser desfeita. Certifique-se de que deseja realmente deletar o personagem.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">ID do Personagem</label>
            <input
              type="number"
              name="id"
              value={searchData.id}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
              placeholder="Ex: 1, 2, 3..."
            />
          </div>

          <div className="text-center text-gray-500 font-medium">OU</div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Nome do Personagem</label>
            <input
              type="text"
              name="name"
              value={searchData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500"
              placeholder="Ex: Rick Sanchez, Morty Smith..."
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => {
                setSearchData({ id: '', name: '' });
                sessionStorage.removeItem('deleteSearchData');
                toast.info('Busca limpa!');
              }}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Limpar
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Buscar Personagem
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={characterToDelete.image}
                  alt={characterToDelete.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{characterToDelete.name}</h2>
                  <p className="text-gray-600">ID: {characterToDelete.id}</p>
                  <p className="text-gray-600">Status: {characterToDelete.status}</p>
                  <p className="text-gray-600">Espécie: {characterToDelete.species}</p>
                  <p className="text-gray-600">Gênero: {characterToDelete.gender}</p>
                </div>
              </div>
            </div>
          </div>

          {!isConfirming ? (
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setCharacterToDelete(null);
                  toast.info('Busca cancelada!');
                }}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Deletar Personagem
              </button>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Confirmar Exclusão
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>
                      Tem certeza de que deseja deletar o personagem <strong>"{characterToDelete.name}"</strong>? 
                      Esta ação não pode ser desfeita.
                    </p>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <button
                      onClick={handleCancel}
                      className="bg-white px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleDelete}
                      className="bg-red-600 px-3 py-2 border border-transparent rounded-md text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Sim, deletar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <ToastContainer position="bottom-right" />
    </div>
  );
}