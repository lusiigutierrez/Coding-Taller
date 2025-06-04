import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CitasModel from "../../../db/Citas.ts";
import ClienteModel from "../../../db/Cliente.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { id } = ctx.params;
    const cliente = await ClienteModel.findById(id);
    if (!cliente) {
      return new Response("Usuario no encontrado", { status: 404 });
    }
    return ctx.render(cliente);
  },

  async POST(req, ctx) {
    const { id } = ctx.params;
    const form = await req.formData();

    // Crear una nueva cita
    const nuevaCita = {
      nombre: form.get("nombre"),
      apellidos: form.get("apellidos"),
      correo: form.get("correo"),
      tlf: form.get("tlf"),
      fecha: form.get("fecha"),
      hora: form.get("hora"),
      modelCar: form.get("modelCar"),
      motivo: form.get("motivo"),
      estado: "Pendiente", // Estado inicial de la cita
    };

    await CitasModel.create(nuevaCita);

    return new Response("", {
      status: 303,
      headers: { Location: `/perfil/${id}` },
    });
  },
};

export default function ReservaCita({ data }: PageProps) {
  return (
    <div className="editar-perfil-container">
      <div className="editar-perfil-content">
        <h1 className="perfil-titulo">Reservar una nueva cita</h1>
        <form method="POST" className="perfil-form">
          <input type="hidden" name="nombre" value={data.nombre} />
          <input type="hidden" name="apellidos" value={data.apellidos} />
          <input type="hidden" name="correo" value={data.correo} />
          <input type="hidden" name="tlf" value={data.tlf} />

          <label>
            <strong>Fecha:</strong>
          </label>
          <input
            type="date"
            name="fecha"
            required
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => {
              const inputElement = e.target as HTMLInputElement;
              const selectedDate = new Date(inputElement.value);
              const dayOfWeek = selectedDate.getUTCDay(); // 0 = Domingo, 6 = Sábado

              if (dayOfWeek === 0 || dayOfWeek === 6) {
                alert("Solo se permiten citas de lunes a viernes.");
                inputElement.value = ""; // Borra el campo si es fin de semana
              }
            }}
          />

          <label>
            <strong>Hora:</strong>
          </label>
          <input
            type="time"
            name="hora"
            required
            min="08:00"
            max="16:00"
            onInput={(e) => {
              const inputElement = e.target as HTMLInputElement;
              const selectedTime = inputElement.value;
              if (selectedTime < "08:00" || selectedTime > "16:00") {
                alert("El horario permitido es de 08:00 a 16:00.");
                inputElement.value = "";
              }
            }}
          />

          <label>
            <strong>Modelo de coche:</strong>
          </label>
          <input
            type="text"
            name="modelCar"
            placeholder="Ej: BMW X5"
            required
          />

          <label>
            <strong>Motivo:</strong>
          </label>
          <input
            type="text"
            name="motivo"
            placeholder="Ej: Cambio de aceite"
            required
          />

          <button type="submit" className="editar-boton">Reservar Cita</button>
        </form>

        <a href={`/perfil/${data._id}`} className="volver-atras">Volver</a>
      </div>
    </div>
  );
}
