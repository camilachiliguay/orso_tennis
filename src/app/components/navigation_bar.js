"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BotonNav from "./BotonNav";
import LinkNav from "./LinkNav";

export default function NavigationBar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-6 py-3 bg-verde-oscuro text-white">
      <div className="flex items-center gap-2">
        <Image src="/img/logo.png" alt="Logo de Orso Tenis" width={40} height={40} />
        <Link className="text-white no-underline" href="/">Orso Tenis</Link>
      </div>

      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </button>

      <ul className="hidden md:flex gap-4">
       <li><LinkNav href="/">Inicio</LinkNav></li>
        <li><LinkNav href="/canchas">Canchas</LinkNav></li>
      </ul>

      <div className="hidden md:flex items-center gap-4">
        <BotonNav href="/register">Registrarse</BotonNav>
        <BotonNav href="/login">Iniciar sesión</BotonNav>
      </div>

      {menuAbierto && (
        <div className="md:hidden absolute top-full left-0 w-full bg-verde-oscuro flex flex-col items-center gap-4 py-4">
          <LinkNav href="/">Inicio</LinkNav>
          <LinkNav href="/canchas">Canchas</LinkNav>
          <LinkNav href="/register">Registrarse</LinkNav>
          <BotonNav href="/login">Iniciar sesión</BotonNav>
        </div>
      )}
    </nav>
  );
}