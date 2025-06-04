import { FreshContext, Handlers } from "$fresh/server.ts";
import FormCitas from "../components/form/FormCitas.tsx";
import CitasModel from "../db/Citas.ts";
import { EstadoCita } from "../types.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        nombre: form.get("nombre"),
        apellidos: form.get("apellidos"),
        fecha: form.get("fecha"),
        hora: form.get("hora"),
        tlf: form.get("tlf"),
        correo: form.get("correo"),
        modelCar: form.get("modelCar"),
        motivo: form.get("motivo"),
        estado: EstadoCita.Pendiente,
      };

      // Validaciones en el servidor (opcional para doble seguridad)
      if (
        !data.nombre ||
        !data.apellidos ||
        !data.fecha ||
        !data.hora ||
        !data.tlf ||
        !data.correo ||
        !data.modelCar ||
        !data.motivo
      ) {
        return new Response("Todos los campos son obligatorios", {
          status: 400,
        });
      }

      const nuevaCita = await CitasModel.create(data);

      return new Response("", {
        status: 303,
        headers: {
          Location: `/reserva/${nuevaCita.id}`, // Redirige a la página de confirmación
        },
      });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div class="fondoFormularios">
      <div class="form-container">
        <FormCitas/>
      </div>
    </div>
  );
};

export default Page;
