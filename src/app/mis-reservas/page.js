import { reservas } from "@/data/reservas";

export default function MisReservas() {
  return (
    <div>
      <h2>Mis Reservas </h2>
      {reservas.map((reserva) => (
        <div key={reserva.id}>
          <p>cacha {reserva.cancha}</p>
          <p>dia {reserva.dia}</p>
          <p>horario {reserva.horario}</p>
          <p>con luz {reserva.conLuz ? "si" : "no"}</p>
          <p>estado {reserva.estado}</p>
        </div>
      ))}
    </div>
  );
}
