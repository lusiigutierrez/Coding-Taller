import { FunctionComponent } from "preact";
import { Citas } from "../../types.ts";

const ReservaCheck: FunctionComponent<{ cita: Citas }> = (
  { cita },
) => {
  return (
    <div className="reserva-background">
      <div className="reserva-container">
        <h1 className="titulo">Reserva Confirmada</h1>
        <p className="subtitulo-cita">Resumen de la cita:</p>
        <ul className="resumen-cita">
          <li>
            <strong>Nombre:</strong> {cita.nombre} {cita.apellidos}
          </li>
          <li>
            <strong>Fecha:</strong> {cita.fecha}
          </li>
          <li>
            <strong>Hora:</strong> {cita.hora}
          </li>
          <li>
            <strong>Número de teléfono:</strong> {cita.tlf}
          </li>
          <li>
            <strong>Correo electrónico:</strong> {cita.correo}
          </li>
          <li>
            <strong>Modelo de coche:</strong> {cita.modelCar}
          </li>
          <li>
            <strong>Motivo de la cita:</strong>
            {cita.motivo}
          </li>
          <li>
            <strong>Estado de la cita:</strong>
            <span
              className={`estado ${cita.estado.toLowerCase()}`}
            >
              {cita.estado}
            </span>
          </li>
        </ul>
        <a href="/" className="return-button">Volver al inicio</a>
      </div>
    </div>
  );
};

export default ReservaCheck;
