import { FunctionComponent } from "preact";
import { Citas, Cliente } from "../../types.ts";

/*
const PerfilScreen: FunctionComponent<{ cliente: Cliente; citas: Citas[] }> = (
  { cliente, citas },
) => {
  return (
    <div className="perfilscreen">
      <header className="perfil-header">
        <h1>{cliente.nombre} {cliente.apellidos}</h1>
      </header>

      <h2 className="section-title">Citas</h2>
      {citas.length > 0 ? (
        <ul className="citas-list">
          {citas.map((cita) => (
            <li key={cita.id} className="cita-item">
              <p><strong>Fecha:</strong> {new Date(cita.fecha).toLocaleDateString()}</p>
              <p><strong>Hora:</strong> {cita.hora}</p>
              <p><strong>Motivo:</strong> {cita.motivo}</p>
              <p><strong>Modelo de coche:</strong> {cita.modelCar}</p>
              <p><strong>Estado de la cita:</strong> {cita.estado}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-citas">No hay citas registradas para este cliente.</p>
      )}
    </div>
  );
};

export default PerfilScreen;

*/

/*
const PerfilScreen: FunctionComponent<{ user: Cliente; citas: Citas[] }> = ({ user, citas }) => {
  return (
    <div >
      <h1 className="perfil-titulo">Bienvenido, {user.nombre} {user.apellidos}</h1>
      
      
      <h2 className="perfil-subtitulo">Tus Citas</h2>
      <div className="citas-list">
        {citas.length > 0 ? (
          citas.map((cita) => (
            <div className="cita-item" key={cita.id}>
              <p><strong>Fecha:</strong> {cita.fecha}</p>
              <p><strong>Hora:</strong> {cita.hora}</p>
              <p><strong>Modelo:</strong> {cita.modelCar}</p>
              <p><strong>Motivo:</strong> {cita.motivo}</p>
              <p><strong>Estado:</strong> {cita.estado}</p>
            </div>
          ))
        ) : (
          <p className="no-citas">No tienes citas reservadas aún.</p>
        )}
      </div>

      <div className="perfil-buttons">
        <a href={`/perfil/${user.id}/editar`} className="editar-perfil-boton">
        Editar Perfil
      </a>
        <a href={`/perfil/${user.id}/reservar`} className="editar-perfil-boton">
        Reservar Cita
      </a>
      </div>
    </div>
  );
};

export default PerfilScreen;

*/

const PerfilScreen: FunctionComponent<{ user: Cliente; citas: Citas[] }> = ({ user, citas }) => {
  // Función para asignar colores según el estado
  const getEstadoClase = (estado: string) => {
    switch (estado.toLowerCase()) {
      case "pendiente":
        return "estado-pendiente";
      case "aceptada":
        return "estado-aceptada";
      case "reprogramada":
        return "estado-reprogramada";
      case "rechazada":
        return "estado-rechazada";
      default:
        return "estado-default";
    }
  };

  return (
    <div>
      <h1 className="perfil-titulo">Bienvenido, {user.nombre} {user.apellidos}</h1>

      <h2 className="perfil-subtitulo">Tus Citas</h2>
      <div className="citas-list">
        {citas.length > 0 ? (
          citas.map((cita) => (
            <div className="cita-item" key={cita.id}>
              <p><strong>Fecha:</strong> {cita.fecha}</p>
              <p><strong>Hora:</strong> {cita.hora}</p>
              <p><strong>Modelo:</strong> {cita.modelCar}</p>
              <p><strong>Motivo:</strong> {cita.motivo}</p>
              <p className={`estado-cita ${getEstadoClase(cita.estado)}`}>
                <strong>Estado:</strong> {cita.estado.toUpperCase()}
              </p>
            </div>
          ))
        ) : (
          <p className="no-citas">No tienes citas reservadas aún.</p>
        )}
      </div>

      <div className="perfil-buttons">
        <a href={`/perfil/${user.id}/editar`} className="editar-perfil-boton">Editar Perfil</a>
        <a href={`/perfil/${user.id}/reservar`} className="editar-perfil-boton">Reservar Cita</a>
      </div>
    </div>
  );
};

export default PerfilScreen;
