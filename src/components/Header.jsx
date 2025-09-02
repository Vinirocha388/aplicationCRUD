import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-green-900 text-white flex justify-between items-center shadow-lg border-b-4 border-green-600">
      <h1 className="text-2xl font-extrabold tracking-widest drop-shadow">Rick and Morty CRUD</h1>
      <nav className="flex gap-4">
        <Link href="/" className="hover:underline hover:text-green-200">Home</Link>
        <Link href="/apiinfo" className="hover:underline hover:text-green-200">Sobre a API</Link>
        <Link href="/characters" className="hover:underline hover:text-green-200">Personagens</Link>
      </nav>
    </header>
  );
}
