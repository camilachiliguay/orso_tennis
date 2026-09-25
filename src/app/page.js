import { canchas } from "./data/canchas";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* la imagen de la cancha de tenis de fondo del hero */}
     <div className="relative w-full h-96">
        <Image
          src="/img/canchaTenis.png"
          alt="Imagen de tenis"
          fill
          className="object-cover"
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
            href="/canchas"
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
   {/*    <div>
        <span>Nuestra red de canchas</span>
        <h2>Canchas disponibles</h2>
        {canchas.map((cancha) => (
          <div key={cancha.id}>
            <h3>Cancha {cancha.numeroCancha}</h3>
            <p>Precio por hora: ${cancha.precioHora}</p>
            <p>Activa: {cancha.activa ? "Sí" : "No"}</p>
          </div>
        ))}
      </div> */}
    </main>
  );
}
