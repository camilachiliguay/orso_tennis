
import Link from "next/link";
import Image from "next/image";
import { canchas } from "@/data/canchas";
export default function Home() {
  return (
    <main>
      {/* la imagen de la cancha de tenis de fondo del hero */}
     <div className="relative w-full h-96">
        <Image
          src="/img/canchaTenis.png"
          alt="Imagen de tenis"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 text-white">
          <span className="text-verde-menta font-semibold uppercase tracking-wider mb-2">
            Pasión por el tenis
          </span>
          <h1 className="text-4xl font-bold mb-4">Reserva tu cancha de tenis</h1>
          <p className="max-w-xl mb-6 text-lg">
            Disfrutá de nuestras canchas y reservá tu turno de manera rápida y sencilla.
          </p>
          <Link
            href="/reservar"
            className="bg-verde-menta text-verde-oscuro font-bold px-6 py-3 rounded-full hover:bg-white transition-colors"
          >
            Reservar cancha
          </Link>
        </div>
      </div>
{/* los beneficios de reservar con nosotros */}
<ul className="flex p-8 justify-center text-center relative gap-8 flex-wrap ">

  <li className="w-56 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Image src="/icon/raque.svg" alt="Canchas de calidad" width={50} height={50} className="mx-auto mb-2" />
    <h3 className="text-xl font-bold mb-2 text-verde-oscuro">Canchas de calidad</h3>
    <p className="text-verde-secundario">Superficie en excelente estado y mantenimiento.</p>
  </li>

  <li className="w-56 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Image src="/icon/calendar.svg" alt="Reserva fácil y rápida" width={50} height={50} className="mx-auto mb-2" />
    <h3 className="text-xl font-bold mb-2 text-verde-oscuro">Reserva fácil y rápida</h3>
    <p className="text-verde-secundario">Elegí el día y el horario desde nuestra web.</p>
  </li>

  <li className="w-56 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Image src="/icon/people.svg" alt="Ambiente seguro" width={50} height={50} className="mx-auto mb-2" />
    <h3 className="text-xl font-bold mb-2 text-verde-oscuro">Ambiente seguro</h3>
    <p className="text-verde-secundario">Instalaciones cómodas y seguras.</p>
  </li>

  <li className="w-56 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Image src="/icon/plant.svg" alt="Deporte y naturaleza" width={50} height={50} className="mx-auto mb-2" />
    <h3 className="text-xl font-bold mb-2 text-verde-oscuro">Deporte y naturaleza</h3>
    <p className="text-verde-secundario">Disfrutá al aire libre en un entorno único.</p>
  </li>

</ul>
   <div className="flex flex-col p-8 gap-8 bg-verde-menta/10">
  
  {/* Encabezado de la sección */}
  <div className="flex justify-between items-center">
    <div>
      <span className="text-verde-secundario font-semibold uppercase tracking-wider text-xs block mb-1">
        Nuestras canchas
      </span>
      <h2 className="text-2xl font-bold text-verde-oscuro">Canchas disponibles</h2>
    </div>
  
  </div>

  {/* Contenedor de las tarjetas en fila horizontal */}
  <div className="flex flex-wrap gap-6 xl:gap-8 justify-center">
    {canchas.map((cancha) => (
      <div 
        className="bg-white rounded-xl shadow-md overflow-hidden w-full sm:w-80 flex flex-col justify-between hover:shadow-lg transition-shadow border border-gray-100" 
        key={cancha.id}
      >
        {/* Imagen de la cancha (puedes adaptarla según tus propiedades) */}
        <div className="h-40 bg-gray-200 relative">
          <img 
            src={cancha.imagen || "/placeholder-cancha.jpg"} 
            alt={`Cancha ${cancha.numeroCancha}`} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Información de la tarjeta */}
        <div className="p-5 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-gray-800">Cancha {cancha.numeroCancha}</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                <span>📍</span> {cancha.superficie || "Polideportivo"}
              </p>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-verde-oscuro">${cancha.precioHora}</span>
              <p className="text-[10px] text-gray-400 uppercase">por hora</p>
            </div>
          </div>

          {/* Botón de reservar */}
          {/* Botón de reservar envuelto en Link */}
          <Link href="/reservar" className="w-full">
            <button className="w-full bg-verde-oscuro text-white py-2 rounded-lg font-medium text-sm hover:bg-opacity-90 transition-all text-center">
              Reservar
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>

</div>
    </main>
  );
}
