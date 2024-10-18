import Link from 'next/link'
export default function DashboardAdmin() {
    return (
      <div className='flex flex-col justify-center items-center w-full h-screen '>  
      <h1 className="text-center text-3xl font-extrabold px-8">
        BIENVENIDO, Admin
      </h1>
      <Link href="/" className='mt-12 text-lg font-light px-8 py-2 bg-blue-500 rounded-md'>Salir</Link>
      </div>
    );
}