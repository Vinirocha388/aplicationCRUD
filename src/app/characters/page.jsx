
import { api } from '@/services/api';
import Card from '@/components/Card';
import Link from 'next/link';

export default async function CharactersPage() {
  const res = await api.get('/character');
  const characters = res.data.results;

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-green-800 drop-shadow">Personagens</h2>
        <Link 
          href="/post"
          className="relative px-4 py-2 bg-gradient-to-r from-lime-500 to-green-500 text-green-900 font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-lime-400 hover:to-green-400 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center"
        >
          <span className="mr-2">Criar Novo</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((char) => (
          <div key={char.id}>
            <Link href={`/characters/${char.id}`}>
              <Card
                name={char.name}
                image={char.image}
                description={`${char.species} - ${char.status}`}
                buttonLabel="Detalhes"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
