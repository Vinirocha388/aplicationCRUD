import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative w-full py-6 px-8 bg-gradient-to-r from-green-800 via-green-900 to-emerald-900 text-white shadow-2xl">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-lime-400 to-green-400"></div>
      
      <div className="relative flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/Rick_and_Morty.svg"
            alt="Logo Rick and Morty"
            width={250}
            height={120}
            className="drop-shadow-lg"
            priority
          />
        </div>

        <nav className="flex items-center space-x-8">
          <Link 
            href="/" 
            className="relative px-4 py-2 font-semibold transition-all duration-300 hover:text-lime-300 group"
          >
            <span className="relative z-10">Home</span>
            <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
          </Link>
          
          <Link 
            href="./apiinfo" 
            className="relative px-4 py-2 font-semibold transition-all duration-300 hover:text-lime-300 group"
          >
            <span className="relative z-10">Sobre a API</span>
            <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
          </Link>
          
          <Link 
            href="./characters" 
            className="relative px-4 py-2 bg-gradient-to-r from-lime-500 to-green-500 text-green-900 font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-lime-400 hover:to-green-400 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Personagens
          </Link>
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent"></div>
    </header>
  );
}