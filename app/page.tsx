import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen text-3xl font-extrabold px-8">
      BIENVENIDO
      <Link href="/login" className='mt-12 text-lg font-light px-8 py-2 bg-blue-500 rounded-md'>Iniciar sesión</Link>
    </main>
  );
}
