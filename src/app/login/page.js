"use client";
import { useState } from "react";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usuario: ${email}, Contraseña: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Imagen de fondo ocupando toda la pantalla */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/img/login_tenis.jpg" 
          alt="Fondo Tenis" 
          fill 
          className="object-cover brightness-75" // brightness-75 oscurece un poco la imagen para que resalte el formulario
        />
      </div>

      {/* Tarjeta del formulario (z-10 asegura que quede por encima del fondo) */}
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
          <h2 className="text-2xl font-bold text-verde-oscuro">Iniciar Sesión</h2>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          
          {/* Campo de Usuario / Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Usuario:</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-oscuro bg-white"
              required
            />
          </div>
          
          {/* Campo de Contraseña */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-oscuro bg-white"
              required
            />
          </div>

          {/* Botón de Ingresar */}
          <div className="mt-4">
            <button 
              type="submit"
              className="w-full bg-verde-oscuro text-white py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-md"
            >
              Ingresar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}