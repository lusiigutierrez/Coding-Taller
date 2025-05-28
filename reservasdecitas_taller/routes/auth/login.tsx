
import { FreshContext, Handlers } from "$fresh/server.ts";
import FormClient from "../../components/form/FormClientes.tsx";
import ClienteModel from "../../db/Cliente.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        user: form.get("user"),
        password: form.get("password"),
      };

      // Validaciones en el servidor (opcional para doble seguridad)
      if (
        !data.user ||
        !data.password 
      ) {
        return new Response("Todos los campos son obligatorios", {
          status: 400,
        });
      }

      const Cliente = await ClienteModel.findOne({ user: data.user });

      if (!Cliente) {
        // Si el usuario no existe
        return new Response("Usuario o contraseña incorrecta", {
          status: 404,
        });
      }

      const ClientePassword= await ClienteModel.findOne({ password: data.password });

      if (!ClientePassword) {
        // Si el usuario no existe
        return new Response("Usuario o contraseña incorrecta", {
          status: 404,
        });
      }


      return new Response("", {
        status: 303,
        headers: {
          Location: `/perfil/${Cliente.id}`, // Redirige a la página de confirmación
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
        <FormClient />
      </div>
    </div>
  );
};

export default Page;
