"use client";
import { useState } from "react";
import Image from "next/image";

export default function Registrar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // Creamos la función que manejará el evento de envío
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    alert(`Nombre: ${name}, Gmail: ${email}, Teléfono: ${phone}, Contraseña: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/img/login_tenis.jpg" alt="Fondo Tenis" fill className="object-cover brightness-75" />
      </div>
      
      <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-md flex flex-col items-center relative z-10 mx-4">
        
        {/* Logo / Imagen y Título */}
        <div className="flex flex-col items-center mb-6">
          <Image 
            src="/img/logo.png" 
            alt="Logo Tenis" 
            width={100} 
            height={100} 
            className="rounded-full object-cover mb-3 shadow-md" 
          />
          <h2 className="text-2xl font-bold text-verde-oscuro">Registrar</h2>
        </div>

        {/* Pasamos el handleSubmit al formulario */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          
          <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
            Nombre:
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="ej: Pedro"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-verde-oscuro"
            />
          </label>            

          <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
            Teléfono:
            <input 
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="ej: 12345678"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-verde-oscuro"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
            Gmail:
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="ej: tu@correo.com"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-verde-oscuro"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              min={8}
              placeholder="********"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-verde-oscuro"
            />
          </label>

          <button 
            type="submit" 
            className="w-full bg-verde-oscuro text-white py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-all mt-2"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}