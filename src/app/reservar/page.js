"use client";
import { useState } from "react";
import { canchas } from "@/data/canchas";
import { disponibilidad, precioSinLuz, precioConLuz } from "@/data/disponibilidad";
import Image from "next/image";
import Link from "next/link";

export default function Reservar() {
  const [canchaSeleccionada, setCanchaSeleccionada] = useState("");
  const [diaSeleccionado, setDiaSeleccionado] = useState("");
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("");
  const [conLuz, setConLuz] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Barra de Navegación Superior */}


      {/* Contenido Principal */}
      <main className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full flex flex-col gap-8">
        
        {/* Encabezado de la Sección */}
        <div className="bg-verde-oscuro text-white p-8 rounded-2xl shadow-md flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Reservar cancha</h1>
          <p className="text-verde-menta/90 text-sm">Elegí la cancha, la fecha y el horario que prefieras.</p>
        </div>

        {/* Layout en dos columnas: Formulario a la izquierda, Instrucciones a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Columna Izquierda: Formulario de Reserva (Ocupa 2 espacios) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col gap-6">
            
            {/* Campo Cancha */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <span className="text-base">🏟️</span> Cancha
              </label>
              <select 
                value={canchaSeleccionada} 
                onChange={(e) => setCanchaSeleccionada(e.target.value)}
                className="border border-gray-200 rounded-xl p-3 bg-gray-50/50 text-sm focus:outline-none focus:border-verde-oscuro"
              >
                <option value="">Seleccioná una cancha</option>
                {canchas.map((cancha) => (
                  <option key={cancha.numeroCancha} value={cancha.numeroCancha}>
                    Cancha {cancha.numeroCancha}
                  </option>
                ))}
              </select>
            </div>

            {/* Campo Día */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <span className="text-base">📅</span> Fecha
              </label>
              <select 
                value={diaSeleccionado} 
                onChange={(e) => setDiaSeleccionado(e.target.value)}
                className="border border-gray-200 rounded-xl p-3 bg-gray-50/50 text-sm focus:outline-none focus:border-verde-oscuro"
              >
                <option value="">Seleccioná una fecha</option>
                <option value="viernes">Viernes</option>
                <option value="sabado">Sábado</option>
                <option value="domingo">Domingo</option>
              </select>
            </div>

            {/* Campo Horarios Disponibles */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <span className="text-base">⏰</span> Horarios disponibles
              </label>
              <select 
                value={horarioSeleccionado} 
                onChange={(e) => setHorarioSeleccionado(e.target.value)}
                className="border border-gray-200 rounded-xl p-3 bg-gray-50/50 text-sm focus:outline-none focus:border-verde-oscuro"
              >
                <option value="">Seleccioná un horario</option>
                {diaSeleccionado && disponibilidad[diaSeleccionado].map((horario) => (
                  <option key={horario} value={horario}>
                    {horario}
                  </option>
                ))}
              </select>
            </div>

            {/* Checkbox de Luz */}
            <label className="flex items-center gap-3 text-sm font-medium text-gray-700 cursor-pointer pt-2">
              <input 
                type="checkbox" 
                checked={conLuz} 
                onChange={(e) => setConLuz(e.target.checked)}
                className="w-4 h-4 accent-verde-oscuro rounded"
              />
              Con luz (+$5.000)
            </label>

            {/* Precio Total */}
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
              <span className="font-medium text-gray-600 text-sm">Precio Total:</span>
              <span className="text-xl font-bold text-verde-oscuro">${conLuz ? precioConLuz : precioSinLuz}</span>
            </div>

            {/* Botón Confirmar Reserva */}
            <button 
              onClick={() => {
                alert(`Reservaste la cancha ${canchaSeleccionada} el día ${diaSeleccionado} a las ${horarioSeleccionado} ${conLuz ? "con" : "sin"} luz Precio: $${conLuz ? precioConLuz : precioSinLuz}.`);
              }}
              className="w-full bg-verde-oscuro text-white py-3.5 rounded-xl font-medium hover:bg-opacity-90 transition-all text-center shadow-md flex items-center justify-center gap-2"
            >
              🎾 Confirmar reserva
            </button>
          </div>

          {/* Columna Derecha: Tarjeta de Instrucciones ("¿Cómo funciona?") */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b pb-4">
              <h3 className="font-bold text-gray-800 text-base">¿Cómo funciona?</h3>
              <span className="text-gray-400">ℹ️</span>
            </div>

            <div className="flex flex-col gap-4 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-verde-menta/20 text-verde-oscuro font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                <p>Seleccioná la cancha que deseas reservar.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-verde-menta/20 text-verde-oscuro font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                <p>Elegí la fecha.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-verde-menta/20 text-verde-oscuro font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                <p>Elegí un horario disponible (verde = disponible).</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-verde-menta/20 text-verde-oscuro font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
                <p>Confirmá tu reserva y listo!</p>
              </div>
            </div>

            <div className="border-t pt-4 text-xs text-gray-400 leading-relaxed">
              Los horarios son definidos por el administrador del club y pueden variar según la disponibilidad.
            </div>
          </div>

        </div>

      </main>

    </div>
  );
}