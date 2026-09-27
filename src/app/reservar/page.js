"use client";
import { useState } from "react";
import { canchas } from "@/data/canchas";
import { disponibilidad, precioSinLuz, precioConLuz } from "@/data/disponibilidad";

export default function Reservar() {
  const [canchaSeleccionada, setCanchaSeleccionada] = useState("");
  const [diaSeleccionado, setDiaSeleccionado] = useState("");
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("");
  const [conLuz, setConLuz] = useState(false);

  return (
    <div>
        <label>Seleccionar cancha:</label>
<select value={canchaSeleccionada} onChange={(e) => setCanchaSeleccionada(e.target.value)}>
{canchas.map((cancha) => (
  <option key={cancha.numeroCancha} value={cancha.numeroCancha}>
    Cancha {cancha.numeroCancha}
  </option>
))}
</select>
<label>Seleccionar día:</label>
<select value={diaSeleccionado} onChange={(e) => setDiaSeleccionado(e.target.value)}>
   <option value="">-- Seleccionar día --</option>
  <option value="viernes"> Viernes</option>
  <option value="sabado"> Sábado</option>
  <option value="domingo"> Domingo</option>
</select>
<label>Seleccionar horario:</label>
<select value={horarioSeleccionado} onChange={(e) => setHorarioSeleccionado(e.target.value)}>
  {diaSeleccionado && disponibilidad[diaSeleccionado].map((horario) => (
    <option key={horario} value={horario}>
      {horario}
    </option>
  ))}
</select>
<label>
  <input type="checkbox" checked={conLuz} onChange={(e) => setConLuz(e.target.checked)} />
  Con luz (+$5.000)
</label>
<p>Precio: ${conLuz ? precioConLuz : precioSinLuz}</p>
<button onClick={() => {
  alert(`Reservaste la cancha ${canchaSeleccionada} el día ${diaSeleccionado} a las ${horarioSeleccionado} ${conLuz ? "con" : "sin"} luz Precio: $${conLuz ? precioConLuz : precioSinLuz}.`);
}}>
  Reservar
</button>
    </div>
  );
}