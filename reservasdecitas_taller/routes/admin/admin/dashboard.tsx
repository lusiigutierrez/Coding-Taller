import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import EstadisticasTaller from "../../../components/EstadisticasTaller.tsx";
import AdminCitas from "../../../islands/admincitas.tsx";
import CitasModel from "../../../db/Citas.ts";

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

      <EstadisticasTaller
        total={totalCitas}
        pendientes={pendientes}
        aceptadas={aceptadas}
        rechazadas={rechazadas}
      />

      <div className="cerrar-sesion-container">
        <a href="/admin/admin/inventory" className="ver-inventario">
          Ver Inventario
        </a>
      </div>

      <AdminCitas citas={citas} />

      <div className="cerrar-sesion-container">
        <a href="/logout" className="volver-atras">Cerrar sesión</a>
      </div>
    </div>
  );
}
