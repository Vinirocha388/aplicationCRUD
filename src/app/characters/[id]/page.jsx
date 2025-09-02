import { api } from '@/services/api';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CharacterDetail({ params }) {
  try {
    const res = await api.get(`/character/${params.id}`);
    const char = res.data;
    return (
      <section className="max-w-xl mx-auto bg-white rounded-lg shadow p-6 mt-8 border-2 border-green-400 flex flex-col items-center">
        <Image src={char.image} alt={char.name} width={200} height={200} className="rounded-full border-4 border-green-500 mb-4" />
        <h2 className="text-3xl font-extrabold text-green-800 mb-2 drop-shadow">{char.name}</h2>
        <ul className="text-green-900 text-lg mb-4">
          <li><b>Status:</b> {char.status}</li>
          <li><b>Espécie:</b> {char.species}</li>
          <li><b>Gênero:</b> {char.gender}</li>
          <li><b>Origem:</b> {char.origin?.name}</li>
          <li><b>Localização:</b> {char.location?.name}</li>
        </ul>
        <Link href="/characters" className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">Voltar</Link>
      </section>
    );
  } catch {
    notFound();
  }
}
