import { FreshContext, Handlers } from "$fresh/server.ts";
import FormAdmin from "../../components/form/FormAdmi.tsx";
import ClienteModel from "../../db/Cliente.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        user: form.get("user"),
        password: form.get("password"),
      };

      // Validación de campos vacíos
      if (!data.user || !data.password) {
        return new Response("Todos los campos son obligatorios", {
          status: 400,
        });
      }

      // Buscar usuario en la base de datos
      const cliente = await ClienteModel.findOne({ user: data.user });

      if (!cliente || cliente.password !== data.password) {
        return new Response("Usuario o contraseña incorrecta", {
          status: 401,
        });
      }

      // Comprobar si el usuario es "admin"
      if (cliente.user !== "admin") {
        return new Response("Acceso denegado", { status: 403 });
      }

      // Redirigir al dashboard del administrador
      return new Response("", {
        status: 303,
        headers: {
          Location: `/admin/admin/dashboard`,
        },
      });

    } catch (error) {
      return new Response("Error en el servidor", {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div class="fondoFormularios">
      <div class="form-container">
      <FormAdmin />
    </div>
    </div>
  );
};

export default Page;

