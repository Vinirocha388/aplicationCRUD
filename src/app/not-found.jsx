import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="absolute top-20 left-20 w-40 h-40 bg-lime-400/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-56 h-56 bg-green-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-yellow-300/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="relative z-10 text-center space-y-8 px-8 max-w-2xl">
        <div className="space-y-4">
          <div className="text-9xl font-black text-transparent bg-gradient-to-r from-lime-300 to-green-200 bg-clip-text drop-shadow-2xl animate-bounce">
            404
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-green-400 rounded-xl blur opacity-30"></div>
            <div className="relative bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h1 className="text-3xl font-bold text-white mb-2">
                Dimensão não encontrada!
              </h1>
              <p className="text-green-200 text-lg leading-relaxed">
                Parece que você se perdeu no multiverso... Esta página foi deletada por Rick ou nunca existiu!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/" 
            className="group relative px-8 py-3 bg-gradient-to-r from-lime-500 to-green-500 text-green-900 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:from-lime-400 hover:to-green-400"
          >
            <span className="relative z-10">🏠 Voltar para Home</span>
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link 
            href="/characters" 
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            🧬 Ver Personagens
          </Link>
        </div>


      </div>
    </section>
  );
}