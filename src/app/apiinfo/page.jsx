import Link from 'next/link';

export default function ApiInfo() {
  return (
    <section className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 mt-8 border-2 border-green-400">
      <h2 className="text-3xl font-extrabold mb-2 text-green-800 drop-shadow">API: Rick and Morty</h2>
      <p className="mb-2">
        <b>Documentação oficial:</b>{' '}
        <Link href="https://rickandmortyapi.com/documentation" target="_blank" className="text-green-700 underline">https://rickandmortyapi.com/documentation</Link>
      </p>
      <p className="mb-2"><b>URL base:</b> https://rickandmortyapi.com/api</p>
      <p className="mb-2"><b>Endpoint utilizado:</b> /character</p>
      <div className="mb-2">
        <b>Atributos principais:</b>
        <ul className="list-disc ml-6">
          <li>id</li>
          <li>name</li>
          <li>status</li>
          <li>species</li>
          <li>type</li>
          <li>gender</li>
          <li>origin</li>
          <li>location</li>
          <li>image</li>
        </ul>
      </div>
      <p className="mt-4 text-gray-700">
        A API Rick and Morty fornece informações detalhadas sobre personagens, episódios e localizações do universo da série animada. É gratuita, aberta e ideal para estudos de consumo de dados REST.
      </p>
    </section>
  );
}
