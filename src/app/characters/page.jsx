"use client";

import { api } from '@/services/api';
import Card from '@/components/Card';
import Link from 'next/link';

export default async function CharactersPage() {
  const res = await api.get('/character');
  const characters = res.data.results;

  return (
    <section>
      <h2 className="text-3xl font-extrabold text-green-800 mb-6 drop-shadow">Personagens</h2>
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
