import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ClienteModel from "../../db/Cliente.ts";
import CitasModel from "../../db/Citas.ts";
import PerfilScreen from "../../components/screens/PerfilScreen.tsx";
import { Citas, Cliente } from "../../types.ts";

type Data = {
  cliente: Cliente;
  citas: Citas[]; // Debe ser un array de citas, no un solo objeto
};

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
