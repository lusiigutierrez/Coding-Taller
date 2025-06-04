import { FreshContext, Handlers } from "$fresh/server.ts";
import FormAddProduct from "../../../../components/form/FormAddProduct.tsx";
import ProductoModel from "../../../../db/Producto.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        nombre: form.get("nombre"),
        precio: form.get("precio"),
        cantidad: form.get("cantidad"),
      };

      const newProducto = await ProductoModel.create(data);

      return new Response("", {
        status: 303,
        headers: {
          "Location": `/admin/admin/inventory`,
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
        <FormAddProduct />
      </div>
    </div>
  );
};

export default Page;
