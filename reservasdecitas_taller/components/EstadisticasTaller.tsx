export default function EstadisticasTaller({ total, pendientes, aceptadas, rechazadas }) {
  return (
    <div className="estadisticas-container">
      <h2 className="estadisticas-titulo">Estadísticas del Taller</h2>
      
      <div className="estadisticas-grid">
        <div className="estadistica-item total">
          <h3>Total de Citas</h3>
          <p>{total}</p>
        </div>

        <div className="estadistica-item pendientes">
          <h3>Pendientes</h3>
          <p>{pendientes}</p>
        </div>

        <div className="estadistica-item aceptadas">
          <h3>Aceptadas</h3>
          <p>{aceptadas}</p>
        </div>

        <div className="estadistica-item rechazadas">
          <h3>Rechazadas</h3>
          <p>{rechazadas}</p>
        </div>
      </div>
    </div>
  );
}
