import Image from 'next/image';
import React from 'react';

export default function Card({ name, image, description, onClick, buttonLabel }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 hover:shadow-xl transition border-2 border-green-400">
      <Image src={image} alt={name} width={120} height={120} className="rounded-full mb-2 border-4 border-green-500" />
      <h3 className="text-lg font-bold mb-1 text-center text-green-800 drop-shadow">{name}</h3>
      {description && <p className="text-gray-600 text-sm mb-2 text-center">{description}</p>}
      {onClick && (
        <button onClick={onClick} className="mt-2 px-4 py-1 bg-green-700 text-white rounded hover:bg-green-800 transition">
          {buttonLabel || 'Detalhes'}
        </button>
      )}
    </div>
  );
}
