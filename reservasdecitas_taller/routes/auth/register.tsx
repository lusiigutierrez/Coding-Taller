import { FreshContext, Handlers } from "$fresh/server.ts";
import FormNewClient from "../../components/form/FormNewClient.tsx";
import ClienteModel from "../../db/Cliente.ts";


export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        user: form.get("user"),
        nombre: form.get("nombre"),
        apellidos: form.get("apellidos"),
        tlf: form.get("tlf"),
        correo: form.get("correo"),
        password: form.get("password"),
        
      };

      const newClient = await ClienteModel.create(data);

      return new Response("", {
        status: 303,
        headers: {
          "Location": `/registro-completado`, 
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
        <FormNewClient />
      </div>
    </div>
  );
};
  
  export default Page;