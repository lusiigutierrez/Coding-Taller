import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ClienteModel from "../../db/Cliente.ts";
import CitasModel from "../../db/Citas.ts";
import PerfilScreen from "../../components/screens/PerfilScreen.tsx";
import { Citas, Cliente } from "../../types.ts";

type Data = {
  cliente: Cliente;
  citas: Citas[]; // Debe ser un array de citas, no un solo objeto
};
/*
export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const { id } = ctx.params;

    try {
      // Buscar el cliente por su ID
      const cliente = await ClienteModel.findById(id);

      if (!cliente) {
        return new Response("Cliente no encontrado", { status: 404 });
      }

      // Buscar citas asociadas al email del cliente (asegúrate de que el campo es 'correo')
      const citas = await CitasModel.find({ correo: cliente.correo });

      return ctx.render({ cliente, citas });
    } catch (error) {
      console.error("Error al buscar la cita:", error);
      return new Response("Error al procesar la solicitud", { status: 500 });
    }
  },
};


export default function Home(props: PageProps<Data>) {
  return (
    <div>
      <PerfilScreen cliente={props.data.cliente} citas={props.data.citas} />
    </div>
  );
}

*/

/*PODER EDITAR EL PERFIL Y FUNCIONA !!

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

export default function Perfil({ data }: PageProps) {
  return (
    <div className="perfil-container">
      <h1>Editar Perfil</h1>
      <form method="POST">
        <label>Nombre:</label>
        <input type="text" name="nombre" value={data.nombre} required />

        <label>Apellidos:</label>
        <input type="text" name="apellidos" value={data.apellidos} required />

        <label>Correo:</label>
        <input type="email" name="correo" value={data.correo} required />

        <label>Teléfono:</label>
        <input type="text" name="tlf" value={data.tlf} required />

        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}

*/

/* FUNCIONA TAMBIEN !!!
export const handler: Handlers = {
  async GET(req, ctx) {
    const { id } = ctx.params;
    const cliente = await ClienteModel.findById(id);
    const citas = await CitasModel.find({ correo: cliente.correo });

    if (!cliente) {
      return new Response("Usuario no encontrado", { status: 404 });
    }

    return ctx.render({ cliente, citas });
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

export default function Perfil({ data }: PageProps) {
  const { cliente, citas } = data;

  return (
    <div>
      <h1 className="perfil-titulo">Bienvenido, {cliente.nombre}</h1>

      <h2 className="perfil-subtitulo">Tus Citas</h2>
      <div className="citas-list">
        {citas.length > 0 ? (
          citas.map((cita) => (
            <div className="cita-item" key={cita._id}>
              <p><strong>Fecha:</strong> {cita.fecha}</p>
              <p><strong>Hora:</strong> {cita.hora}</p>
              <p><strong>Motivo:</strong> {cita.modelCar}</p>
              <p><strong>Motivo:</strong> {cita.motivo}</p>
              <p><strong>Estado:</strong> {cita.estado}</p>
            </div>
          ))
        ) : (
          <p className="no-citas">No tienes citas programadas.</p>
        )}
      </div>

      <a href={`/perfil/${cliente._id}/editar`} className="editar-perfil-boton">
        Editar Perfil
      </a>
    </div>
  );
}

*/

export const handler: Handlers = {
  async GET(req, ctx) {
    const userId = ctx.params.id;

    // Obtener usuario por ID
    const user = await ClienteModel.findById(userId);
    if (!user) {
      return new Response("Usuario no encontrado", { status: 404 });
    }

    // Obtener citas del usuario
    const citas = await CitasModel.find({ correo: user.correo });

    return ctx.render({ user, citas });
  },
};

export default function PerfilPage(props: PageProps) {
  const { user, citas } = props.data;

  return (
      <div class="form-container">
      <PerfilScreen user={user} citas={citas} />
      </div>

  );
}
