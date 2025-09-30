'use client'

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PutPage() {
  const [searchData, setSearchData] = useState({
    id: '',
    name: ''
  });
  const [characterToEdit, setCharacterToEdit] = useState(null);
  const [editData, setEditData] = useState({
    name: '',
    status: '',
    species: '',
    gender: ''
  });
  const [isConfirming, setIsConfirming] = useState(false);

  // Carregar dados do sessionStorage ao montar o componente
  useEffect(() => {
    const savedData = sessionStorage.getItem('putSearchData');
    if (savedData) {
      setSearchData(JSON.parse(savedData));
    }
  }, []);

  // Salvar dados no sessionStorage quando o searchData mudar
  useEffect(() => {
    sessionStorage.setItem('putSearchData', JSON.stringify(searchData));
  }, [searchData]);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
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

    setCharacterToEdit(mockCharacter);
    setEditData({
      name: mockCharacter.name,
      status: mockCharacter.status,
      species: mockCharacter.species,
      gender: mockCharacter.gender
    });
    toast.success('Personagem encontrado!');
  };

  const handleUpdate = () => {
    if (!characterToEdit) return;

    // Validar se os campos obrigatórios foram preenchidos
    if (!editData.name.trim()) {
      toast.error('O nome do personagem é obrigatório!');
      return;
    }

    // Aqui você implementaria a lógica real para atualizar o personagem na API
    console.log('Atualizando personagem:', {
      id: characterToEdit.id,
      ...editData
    });
    
    toast.success(`Personagem "${editData.name}" atualizado com sucesso!`);

    // Limpar os dados após atualizar
    setCharacterToEdit(null);
    setEditData({
      name: '',
      status: '',
      species: '',
      gender: ''
    });
    setIsConfirming(false);
    setSearchData({ id: '', name: '' });
    sessionStorage.removeItem('putSearchData');
  };

  const handleCancel = () => {
    setIsConfirming(false);
  };

  const handleConfirmUpdate = () => {
    setIsConfirming(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Editar Personagem</h1>
      
      {!characterToEdit ? (
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Informação
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>Primeiro, encontre o personagem que deseja editar pesquisando por ID ou nome.</p>
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
              onChange={handleSearchChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
              onChange={handleSearchChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ex: Rick Sanchez, Morty Smith..."
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => {
                setSearchData({ id: '', name: '' });
                sessionStorage.removeItem('putSearchData');
                toast.info('Busca limpa!');
              }}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
              <h2 className="text-xl font-bold text-gray-900 mb-4">Dados Atuais</h2>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={characterToEdit.image}
                  alt={characterToEdit.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{characterToEdit.name}</h3>
                  <p className="text-gray-600">ID: {characterToEdit.id}</p>
                  <p className="text-gray-600">Status: {characterToEdit.status}</p>
                  <p className="text-gray-600">Espécie: {characterToEdit.species}</p>
                  <p className="text-gray-600">Gênero: {characterToEdit.gender}</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-4">Editar Dados</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleEditChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Nome do personagem"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    name="status"
                    value={editData.status}
                    onChange={handleEditChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Selecione um status</option>
                    <option value="Alive">Vivo</option>
                    <option value="Dead">Morto</option>
                    <option value="unknown">Desconhecido</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Espécie</label>
                  <input
                    type="text"
                    name="species"
                    value={editData.species}
                    onChange={handleEditChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Ex: Human, Alien, Robot..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Gênero</label>
                  <select
                    name="gender"
                    value={editData.gender}
                    onChange={handleEditChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Selecione um gênero</option>
                    <option value="Male">Masculino</option>
                    <option value="Female">Feminino</option>
                    <option value="Genderless">Sem gênero</option>
                    <option value="unknown">Desconhecido</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {!isConfirming ? (
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setCharacterToEdit(null);
                  setEditData({
                    name: '',
                    status: '',
                    species: '',
                    gender: ''
                  });
                  toast.info('Edição cancelada!');
                }}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmUpdate}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Atualizar Personagem
              </button>
            </div>
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Confirmar Atualização
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      Tem certeza de que deseja atualizar o personagem <strong>"{characterToEdit.name}"</strong> 
                      com os novos dados?
                    </p>
                    <div className="mt-2">
                      <p><strong>Novo nome:</strong> {editData.name}</p>
                      <p><strong>Novo status:</strong> {editData.status || 'Não alterado'}</p>
                      <p><strong>Nova espécie:</strong> {editData.species || 'Não alterado'}</p>
                      <p><strong>Novo gênero:</strong> {editData.gender || 'Não alterado'}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <button
                      onClick={handleCancel}
                      className="bg-white px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleUpdate}
                      className="bg-blue-600 px-3 py-2 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Sim, atualizar
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