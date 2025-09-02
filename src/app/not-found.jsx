import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-extrabold text-green-800 mb-4 drop-shadow">Página não encontrada 😢</h1>
      <p className="text-lg text-green-700 mb-6">O conteúdo que você procura não existe ou foi removido do multiverso!</p>
      <Link href="/" className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">Voltar para Home</Link>
    </section>
  );
}
