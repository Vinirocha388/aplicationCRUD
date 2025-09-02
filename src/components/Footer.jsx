import React from 'react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 text-white py-8 sm:py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(16,185,129,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,_rgba(5,150,105,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
      <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-20 sm:w-40 h-20 sm:h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-20 sm:w-40 h-20 sm:h-40 bg-green-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <div className="relative">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-slate-900 font-black text-base sm:text-lg transform -rotate-12">R&M</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl sm:rounded-2xl blur opacity-30 animate-pulse"></div>
            </div>
            <div>
              <div className="text-emerald-200 text-base sm:text-lg font-bold">Rick and Morty CRUD</div>
              <div className="text-emerald-400/80 text-xs sm:text-sm">© 2024 Todos os direitos reservados</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="text-center">
              <div className="text-emerald-300 text-xs sm:text-sm font-medium">Desenvolvido com</div>
              <div className="text-white font-bold flex items-center justify-center mt-1">
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent font-black text-sm sm:text-base">Next.js</span>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-8 sm:h-12 bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent"></div>
            
            <div className="text-center">
              <div className="text-emerald-300 text-xs sm:text-sm font-medium">API</div>
              <div className="text-white font-bold mt-1 text-sm sm:text-base">Rick and Morty</div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-emerald-800/50 text-center">
          <p className="text-emerald-300/70 text-xs sm:text-sm leading-relaxed px-4">
            Explore o multiverso de Rick and Morty através desta aplicação interativa
          </p>
        </div>
      </div>
    </footer>
  );
}