import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

import { Citas } from "../../types.ts";
import CitasModel from "../../db/Citas.ts";
import ReservaCheck from "../../components/screens/CheckCita.tsx";

type Data = {
  cita: Citas;
};

export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const { id } = ctx.params;

    try {
      const cita = await CitasModel.findById({ _id: id });

      if (!cita) {
        return new Response("Cita no encontrada", { status: 404 });
      }

      return ctx.render({ cita });
    } catch (error) {
      console.error("Error al buscar la cita:", error);
      return new Response("Error al procesar la solicitud", { status: 500 });
    }
  },
};

export default function Home(props: PageProps<Data>) {
  return (
    <div class="fondoFormularios">
      <div class="form-container">
        <ReservaCheck
          cita={props.data.cita}
        />
      </div>
    </div>
  );
}
