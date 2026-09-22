import Link from "next/link";
import Image from "next/image";

export default function NavigationBar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-verde-oscuro text-white">
      <div className="flex items-center gap-2">
        <Image src="/img/logo.png" alt="Logo de Orso Tenis" width={40} height={40} />
        <Link className="text-white no-underline hover:text-verde-menta" href="/">Orso Tenis</Link>
      </div>

      <ul className="flex gap-4">
        <li><Link className="text-white no-underline hover:text-verde-menta" href="/">Inicio</Link></li>
        <li><Link className="text-white no-underline hover:text-verde-menta" href="/canchas">Canchas</Link></li>
      </ul>

      <div className="flex items-center gap-4">
        <Link className="border border-verde-menta text-verde-menta no-underline px-4 py-2 rounded-full hover:bg-verde-menta hover:text-verde-oscuro" href="/register">Registrarse</Link>
        <Link className="border border-verde-menta text-verde-menta no-underline px-4 py-2 rounded-full hover:bg-verde-menta hover:text-verde-oscuro" href="/login">Iniciar sesión</Link>
      </div>
    </nav>
  );
}