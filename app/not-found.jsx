import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen text-3xl font-extrabold px-8">
      <h2 className='text-5xl'>UPS, te pillamos ¿A dónde querías ir?</h2>
      <Link href="/" className='mt-12 text-lg font-light px-8 py-2 bg-blue-500 rounded-md'>Regresar a la página de inicio</Link>
    </div>
  )
}