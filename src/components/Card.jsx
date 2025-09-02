import Image from 'next/image';
import React from 'react';

export default function Card({ name, image, description, onClick, buttonLabel }) {
  return (
    <div className="bg-gradient-to-br from-white to-emerald-50/50 rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center hover:-translate-y-2 transition-all duration-300 border border-emerald-100/60 backdrop-blur-sm group overflow-hidden relative h-80 w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full h-full">
        <Image 
          src={image} 
          alt={name} 
          width={120} 
          height={120} 
          className="rounded-full mb-3 border-4 border-white shadow-xl ring-4 ring-emerald-100/50 transition-transform duration-300 group-hover:scale-105 flex-shrink-0" 
        />
        
        <h3 className="text-lg font-bold mb-2 text-center text-gray-800 group-hover:text-emerald-700 transition-colors duration-300 line-clamp-2 flex-shrink-0">
          {name}
        </h3>
        
        <div className="flex-grow flex flex-col justify-between w-full">
          {description && (
            <p className="text-gray-600 text-sm text-center leading-relaxed line-clamp-3 mb-3">
              {description}
            </p>
          )}
          
          {onClick && (
            <button 
              onClick={onClick} 
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-auto"
            >
              {buttonLabel || 'Detalhes'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}