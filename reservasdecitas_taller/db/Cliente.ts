import mongoose from "npm:mongoose";
import { Cliente } from "../types.ts";

if (mongoose.connection.readyState === 0) {
  await mongoose.connect(Deno.env.get("MONGO_URL")!);
}

const schema = new mongoose.Schema<Cliente>({
  user: String,
  nombre: String,
  apellidos: String,
  tlf: Number,
  correo: String,
  password: String,
  

});

export default mongoose.model<Cliente>("Cliente", schema);
