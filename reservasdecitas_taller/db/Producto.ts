import mongoose from "npm:mongoose";
import { Producto } from "../types.ts";


if (mongoose.connection.readyState === 0) {
  await mongoose.connect(Deno.env.get("MONGO_URL")!);
}

const schema = new mongoose.Schema<Producto>({
    nombre: String,
    precio: Number,
    cantidad: Number,

});

export default mongoose.model<Producto>("Producto", schema);
