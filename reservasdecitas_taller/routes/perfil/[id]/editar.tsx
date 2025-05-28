import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ClienteModel from "../../../db/Cliente.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { id } = ctx.params;
    const cliente = await ClienteModel.findById(id);
    if (!cliente) {
      return new Response("Usuario no encontrado", { status: 404 });
    }
    return ctx.render(cliente);
  },

  async POST(req, ctx) {
    const { id } = ctx.params;
    const form = await req.formData();
    const updatedData = {
      nombre: form.get("nombre"),
      apellidos: form.get("apellidos"),
      correo: form.get("correo"),
      tlf: form.get("tlf"),
    };
    await ClienteModel.findByIdAndUpdate(id, updatedData);
    return new Response("", { status: 303, headers: { Location: `/perfil/${id}` } });
  },
};

export default function EditarPerfil({ data }: PageProps) {
  return (
    <div className="editar-perfil-container">
      <div className="editar-perfil-content">
        <h1 className="perfil-titulo">Editar Perfil</h1>
        <form method="POST">
          <label><strong>Nombre:</strong></label>
          <input type="text" name="nombre" value={data.nombre} required />

          <label><strong>Apellidos:</strong></label>
          <input type="text" name="apellidos" value={data.apellidos} required />

          <label><strong>Correo:</strong></label>
          <input type="email" name="correo" value={data.correo} required />

          <label><strong>Teléfono:</strong></label>
          <input type="text" name="tlf" value={data.tlf} required />

          <button type="submit" className="editar-boton">Guardar Cambios</button>
        </form>

        <a href={`/perfil/${data._id}`} className="volver-atras">Volver</a>
      </div>
    </div>
  );
}
