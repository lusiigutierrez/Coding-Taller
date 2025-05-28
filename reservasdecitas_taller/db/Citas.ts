import mongoose from "npm:mongoose";
import { Citas, EstadoCita } from "../types.ts";

if (mongoose.connection.readyState === 0) {
  await mongoose.connect(Deno.env.get("MONGO_URL")!);
}

const schema = new mongoose.Schema<Citas>({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },  
  fecha: { type: String, required: true },
  hora: { type: String, required: true },
  tlf: { type: Number, required: true },
  correo: { type: String, required: true },
  modelCar: { type: String, required: true },
  motivo: { type: String, required: true }, 
  estado: { 
    type: String, 
    enum: Object.values(EstadoCita), // Usar los valores de la enumeración
    required: true 
  }
});

export default mongoose.model<Citas>("Citas", schema);

