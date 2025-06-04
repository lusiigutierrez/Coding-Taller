import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Producto } from "../../../types.ts";
import ProductoModel from "../../../db/Producto.ts";
import InventoryScreen from "../../../components/screens/InventoryScreen.tsx";


type Data = {
  producto: Producto;
};

export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      const productos = await ProductoModel.find();
      return ctx.render({ productos }); 
    } catch (error) {
      return new Response("Error al procesar la solicitud", { status: 500 });
    }
  },
};

export default function InventoryPage(props: PageProps<Data>) {
  return (
    <div class="fondoFormularios">
      <div class="form-container">
        <InventoryScreen productos={props.data.productos} />
      </div>
    </div>
  );
}
