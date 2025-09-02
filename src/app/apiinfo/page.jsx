import Link from 'next/link';

export default function ApiInfo() {
  return (
    <section className="relative min-h-[80vh] py-16 px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100"></div>
      
      <div className="absolute top-10 right-10 w-32 h-32 bg-lime-300/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-300/15 rounded-full blur-2xl animate-pulse delay-700"></div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <div className="w-2 h-2 bg-lime-300 rounded-full animate-pulse"></div>
            DOCUMENTAÇÃO DA API
          </div>
          <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text mb-4">
            Rick and Morty API
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore o multiverso através de dados estruturados e endpoints REST
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">📚</span>
                </div>
                <h3 className="text-xl font-bold text-green-800">Recursos</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-100">
                  <span className="font-semibold text-green-700">Documentação oficial:</span>
                </div>
                <Link 
                  href="https://rickandmortyapi.com/documentation" 
                  target="_blank" 
                  className="block p-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold text-center hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  🚀 Acessar Documentação
                </Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🔗</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-800">Endpoints</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <span className="font-mono text-sm text-emerald-700">https://rickandmortyapi.com/api</span>
                  <div className="text-xs text-gray-500 mt-1">URL Base</div>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <span className="font-mono text-sm text-emerald-700">/character</span>
                  <div className="text-xs text-gray-500 mt-1">Endpoint Principal</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-green-800">Atributos dos Personagens</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['id', 'name', 'status', 'species', 'type', 'gender', 'origin', 'location', 'image'].map((attr, index) => (
                  <div key={attr} className="flex items-center gap-2 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:border-green-200 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="font-mono text-sm text-green-700">{attr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 max-w-3xl">
              <p className="text-gray-700 leading-relaxed">
                A <strong>Rick and Morty API</strong> fornece informações detalhadas sobre personagens, episódios e localizações do universo da série animada. 
                É <strong>gratuita</strong>, <strong>aberta</strong> e ideal para estudos de consumo de dados REST, permitindo explorar o multiverso de forma programática.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}