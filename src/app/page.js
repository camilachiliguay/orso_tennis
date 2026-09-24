import { canchas } from "./data/canchas";

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a la página principal</h1>
      <p>...</p>

      {canchas.map((cancha) => (
        <div key={cancha.id}>
          <h2>Cancha {cancha.numeroCancha}</h2>
          <p>Precio por hora: ${cancha.precioHora}</p>
          <p>Activa: {cancha.activa ? "Sí" : "No"}</p>
        </div>
      ))}
    </div>
  );
}