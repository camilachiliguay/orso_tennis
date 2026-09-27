import { canchas } from "@/data/canchas";

const canchasDisponibles = canchas.filter((cancha) => cancha.activa);

export default function Canchas() {
  return (
    <div>
      <h2>Canchas Disponibles</h2>
{canchasDisponibles.map((cancha)=>
  <div key={cancha.id}>
    <p>Cancha {cancha.numeroCancha}</p>
    <p>Precio por hora: ${cancha.precioHora}</p>
    <p>Superficie: {cancha.superficie}</p>
  </div>
)}
    </div>
  );
}