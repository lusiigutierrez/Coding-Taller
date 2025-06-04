import { useState } from "preact/hooks";

export default function AdminCitas({ citas }) {
  const [filtroEstado, setFiltroEstado] = useState("all");
  const [busqueda, setBusqueda] = useState("");
  const [reprogramarId, setReprogramarId] = useState(null);
  const [nuevaFecha, setNuevaFecha] = useState("");
  const [nuevaHora, setNuevaHora] = useState("");

  const citasFiltradas = citas.filter((cita) => {
    return (
      (filtroEstado === "all" || cita.estado === filtroEstado) &&
      (cita.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        cita.modelCar.toLowerCase().includes(busqueda.toLowerCase()))
    );
  });

  return (
    <div>
      <div className="filtro-container">
        <input
          type="text"
          className="filtro-input"
          placeholder="Buscar por nombre o modelo"
          value={busqueda}
          onInput={(e) => setBusqueda(e.currentTarget.value)}
        />
        <select
          className="filtro-select"
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.currentTarget.value)}
        >
          <option value="all">Todas</option>
          <option value="Pendiente">Pendientes</option>
          <option value="Aceptada">Aceptadas</option>
          <option value="Rechazada">Rechazadas</option>
        </select>
      </div>

      <div className="citas-list">
        {citasFiltradas.length > 0
          ? (
            citasFiltradas.map((cita) => (
              <div
                className="cita-item"
                key={cita._id}
                data-estado={cita.estado}
              >
                <p>
                  <strong>Fecha:</strong> {cita.fecha}
                </p>
                <p>
                  <strong>Hora:</strong> {cita.hora}
                </p>
                <p>
                  <strong>Cliente:</strong> {cita.nombre} {cita.apellidos}
                </p>
                <p>
                  <strong>Modelo:</strong> {cita.modelCar}
                </p>
                <p>
                  <strong>Motivo:</strong> {cita.motivo}
                </p>
                <p>
                  <strong>Estado:</strong>
                  <span className={`estado-${cita.estado.toLowerCase()}`}>
                    {cita.estado.toUpperCase()}
                  </span>
                </p>
                <form method="POST">
                  <input type="hidden" name="id" value={cita._id} />
                  <button
                    type="submit"
                    name="estado"
                    value="Aceptada"
                    className="aceptar-btn"
                  >
                    Aceptar
                  </button>
                  <button
                    type="submit"
                    name="estado"
                    value="Rechazada"
                    className="rechazar-btn"
                  >
                    Rechazar
                  </button>
                  <button
                    type="button"
                    className="reprogramar-btn"
                    onClick={() => setReprogramarId(cita._id)}
                  >
                    Reprogramar
                  </button>
                </form>

                {reprogramarId === cita._id && (
                  <form method="POST" className="reprogramar-form">
                    <input type="hidden" name="id" value={cita._id} />

                    <label>
                      <strong>Nueva Fecha:</strong>
                    </label>
                    <input
                      type="date"
                      name="fecha"
                      value={nuevaFecha}
                      onInput={(e) =>
                        setNuevaFecha(e.currentTarget.value)}
                      required
                    />

                    <label>
                      <strong>Nueva Hora:</strong>
                    </label>
                    <input
                      type="time"
                      name="hora"
                      value={nuevaHora}
                      onInput={(e) =>
                        setNuevaHora(e.currentTarget.value)}
                      required
                    />

                    <button
                      type="submit"
                      name="estado"
                      value="Reprogramada"
                      className="reprogramar-btn"
                    >
                      Confirmar Reprogramación
                    </button>
                  </form>
                )}
              </div>
            ))
          )
          : <p>No hay citas registradas.</p>}
      </div>
    </div>
  );
}
