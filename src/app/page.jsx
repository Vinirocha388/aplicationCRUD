import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-10 bg-gradient-to-b from-green-300 via-blue-200 to-yellow-100 min-h-[70vh] rounded-xl shadow-lg border-4 border-green-600">
      <h2 className="text-4xl font-extrabold text-green-800 drop-shadow-md tracking-wide mb-2">Turma: 2TDS2</h2>
      <h3 className="text-2xl font-semibold text-green-700 mb-4">Escola: SENAI-Valinhos</h3>
      <div className="flex flex-col items-center gap-2 mt-4">
        <Image
          src="**colocar foto"
          alt="Avatar do aluno"
          width={180}
          height={180}
          className="rounded-full border-4 border-green-500 shadow-xl bg-white"
        />
        <span className="text-xl font-bold text-green-900 mt-2">Vinícius Rocha</span>
      </div>
      <blockquote className="mt-8 p-4 bg-green-100 border-l-8 border-green-600 italic rounded max-w-xl text-center text-green-900 shadow-md text-lg">
        "Wubba Lubba Dub Dub! A persistência realiza o impossível."
      </blockquote>
      <span className="text-sm text-green-700 mt-2">(Inspirado em Rick and Morty)</span>
    </section>
  );
}
