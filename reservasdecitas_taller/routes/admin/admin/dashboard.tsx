import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import EstadisticasTaller from "../../../components/EstadisticasTaller.tsx";
import AdminCitas from "../../../islands/admincitas.tsx";
import CitasModel from "../../../db/Citas.ts";

/*
export const handler: Handlers = {
  async GET(_req, ctx) {
    const citas = await CitasModel.find();
    if (!citas) {
      return new Response("No hay citas registradas", { status: 404 });
    }
    return ctx.render({ citas });
  },

  async POST(req, ctx) {
    const form = await req.formData();
    const citaId = form.get("id");
    const nuevoEstado = form.get("estado");

    if (!citaId || !nuevoEstado) {
      return new Response("Faltan datos", { status: 400 });
    }

    // Actualizar el estado de la cita
    await CitasModel.findByIdAndUpdate(citaId, { estado: nuevoEstado });

    return new Response("", {
      status: 303,
      headers: { Location: "/admin/dashboard" },
    });
  },
};

export default function AdminDashboard({ data }: PageProps) {
  const { citas } = data;

  return (
    <div className="admin-dashboard">
      <h1 className="perfil-titulo">Panel de Administración</h1>

      <div className="citas-list">
        {citas.length > 0 ? (
          citas.map((cita) => (
            <div className="cita-item" key={cita._id}>
              <p><strong>Fecha:</strong> {cita.fecha}</p>
              <p><strong>Hora:</strong> {cita.hora}</p>
              <p><strong>Cliente:</strong> {cita.nombre} {cita.apellidos}</p>
              <p><strong>Teléfono:</strong> {cita.tlf}</p>
              <p><strong>Correo:</strong> {cita.correo}</p>
              <p><strong>Modelo:</strong> {cita.modelCar}</p>
              <p><strong>Motivo:</strong> {cita.motivo}</p>
              <p><strong>Estado:</strong>
                <span className={`estado-${cita.estado.toLowerCase()}`}>
                  {cita.estado.toUpperCase()}
                </span>
              </p>

              <form method="POST">
                <input type="hidden" name="id" value={cita._id} />
                <button type="submit" name="estado" value="Aceptada" className="aceptar-btn">
                  Aceptar
                </button>
                <button type="submit" name="estado" value="Rechazada" className="rechazar-btn">
                  Rechazar
                </button>
              </form>
            </div>
          ))
        ) : (
          <p>No hay citas registradas.</p>
        )}
      </div>

      <a href="/logout" className="logout-boton">Cerrar sesión</a>
    </div>
  );
}
*/

/*
export const handler: Handlers = {
  async GET(_req, ctx) {
    const citas = await CitasModel.find();
    if (!citas) {
      return new Response("No hay citas registradas", { status: 404 });
    }
    return ctx.render({ citas });
  },

  async POST(req, ctx) {
    const form = await req.formData();
    const citaId = form.get("id");
    const nuevoEstado = form.get("estado");

    if (!citaId || !nuevoEstado) {
      return new Response("Faltan datos", { status: 400 });
    }

    // Actualizar el estado de la cita
    await CitasModel.findByIdAndUpdate(citaId, { estado: nuevoEstado });

    return new Response("", {
      status: 303,
      headers: { Location: "/admin/dashboard" },
    });
  },
};

export default function AdminDashboard({ data }: PageProps) {
  const { citas } = data;

  return (
    <div className="admin-dashboard">
      <h1 className="perfil-titulo">Panel de Administración</h1>


      <div className="estadisticas">
        <h2>Estadísticas del Taller</h2>
        <p>Total de citas: <strong>{citas.length}</strong></p>
        <p>Pendientes: <strong>{citas.filter(c => c.estado === "Pendiente").length}</strong></p>
        <p>Aceptadas: <strong>{citas.filter(c => c.estado === "Aceptada").length}</strong></p>
        <p>Rechazadas: <strong>{citas.filter(c => c.estado === "Rechazada").length}</strong></p>
      </div>


      <AdminCitas citas={citas} />

      <a href="/logout" className="logout-boton">Cerrar sesión</a>
    </div>
  );
}


*/

export const handler: Handlers = {
  async GET(_req, ctx) {
    const citas = await CitasModel.find();
    if (!citas) {
      return new Response("No hay citas registradas", { status: 404 });
    }
    return ctx.render({ citas });
  },

  async POST(req, ctx) {
    const form = await req.formData();
    const citaId = form.get("id");
    const nuevoEstado = form.get("estado");
    const nuevaFecha = form.get("fecha");
    const nuevaHora = form.get("hora");

    if (!citaId || !nuevoEstado) {
      return new Response("Faltan datos", { status: 400 });
    }

    const updateData = { estado: nuevoEstado };

    if (nuevoEstado === "Reprogramada" && nuevaFecha && nuevaHora) {
      updateData["fecha"] = nuevaFecha;
      updateData["hora"] = nuevaHora;
    }

    await CitasModel.findByIdAndUpdate(citaId, updateData);

    return new Response("", {
      status: 303,
      headers: { Location: "/admin/admin/dashboard" },
    });
  },
};

export default function AdminDashboard({ data }: PageProps) {
  const { citas } = data;

  const totalCitas = citas.length;
  const pendientes = citas.filter((c) => c.estado === "Pendiente").length;
  const aceptadas = citas.filter((c) => c.estado === "Aceptada").length;
  const rechazadas = citas.filter((c) => c.estado === "Rechazada").length;

  return (
    <div className="admin-dashboard">
      <h1 className="admin-titulo">PANEL DE ADMINISTRACIÓN</h1>


      {/* Componente de estadísticas */}
      <EstadisticasTaller
        total={totalCitas}
        pendientes={pendientes}
        aceptadas={aceptadas}
        rechazadas={rechazadas}
      />

      {/* Botón para ver el inventario */}
      <div className="cerrar-sesion-container">
        <a href="/admin/admin/inventory" className="ver-inventario">Ver Inventario</a>
      </div>

      {/* Listado de citas con opciones */}
      <AdminCitas citas={citas} />

      <div className="cerrar-sesion-container">
        <a href="/logout" className="volver-atras">Cerrar sesión</a>
      </div>
    </div>
  );
}
