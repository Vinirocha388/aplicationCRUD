import Image from 'next/image';

export default function Home() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-lime-300/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-48 h-32 sm:h-48 bg-green-300/15 rounded-full blur-2xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-yellow-300/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative flex flex-col items-center justify-center gap-6 sm:gap-8 py-12 sm:py-16 px-4 sm:px-8 min-h-[80vh]">
        <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 border border-white/20">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-lime-400 rounded-full animate-ping"></div>
            <span className="text-white font-medium text-xs sm:text-sm tracking-wide">PORTAL ATIVO</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl tracking-tight px-4">
            <span className="bg-gradient-to-r from-lime-300 to-green-200 bg-clip-text text-transparent">
              Turma: 2TDS2
            </span>
          </h2>
          
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-100 tracking-wide px-4">
            Escola: SENAI-Valinhos
          </h3>
        </div>

        <div className="relative group">
          <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-lime-400 to-green-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-lg rounded-full p-4 sm:p-6 border border-white/20">
            <Image
              src="https://avatars.githubusercontent.com/u/158187426?v=4"
              alt="Avatar do aluno"
              width={120}
              height={120}
              className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 sm:border-4 border-white/30 shadow-2xl"
            />
          </div>
          <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-lime-400 to-green-400 text-green-900 font-black px-3 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-lg shadow-xl whitespace-nowrap">
            Vinícius Rocha
          </div>
        </div>

        <div className="relative max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto">
          <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-lime-400 to-green-400 rounded-xl sm:rounded-2xl blur opacity-20"></div>
          <blockquote className="relative bg-white/10 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-white/20 text-center">
            <div className="text-3xl sm:text-4xl lg:text-6xl text-lime-300/50 font-bold mb-2 sm:mb-4">"</div>
            <p className="text-white text-sm sm:text-lg lg:text-xl leading-relaxed font-medium mb-3 sm:mb-4 italic px-2">
              Wubba Lubba Dub Dub! A vida é uma aventura interdimensional, e cada dia é uma nova oportunidade para explorar o desconhecido e expandir nossos horizontes.
            </p>
            <p className="text-green-200 text-sm sm:text-base lg:text-lg px-2">
              Nunca pare de questionar, nunca pare de aprender, e nunca pare de ser curioso.
            </p>
            <div className="text-3xl sm:text-4xl lg:text-6xl text-lime-300/50 font-bold mt-2 sm:mt-4 flex justify-end">"</div>
            <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-green-300 font-semibold tracking-wide">
              — Inspirado em Rick and Morty
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}