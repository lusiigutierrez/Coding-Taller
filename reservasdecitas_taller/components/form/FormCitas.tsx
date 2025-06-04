import { FunctionComponent } from "preact";
import Info from "../../islands/info.tsx";

const FormCitas: FunctionComponent = () => {
  // Obtener la fecha actual en formato YYYY-MM-DD para establecer el mínimo
  const today = new Date().toISOString().split("T")[0];

  return (
    <form className="reserva-form" action="/guest" method="post">
      <h1>Reserva tu cita</h1>

      <input type="text" name="nombre" placeholder="Nombre" required />

      <input
        type="text"
        id="apellidos"
        name="apellidos"
        placeholder="Apellidos"
        required
      />

      <div>
        <label htmlFor="fecha">Día que le vendría mejor para la cita:</label>
        <input
          id="fecha"
          type="date"
          name="fecha"
          required
          min={today}
          onChange={(e) => {
            const inputElement = e.target as HTMLInputElement;
            const selectedDate = new Date(inputElement.value);
            const dayOfWeek = selectedDate.getUTCDay();

            if (dayOfWeek === 0 || dayOfWeek === 6) {
              document.getElementById("fecha-error")!.textContent =
                "Solo se permiten citas de lunes a viernes.";
              inputElement.value = "";
            } else {
              document.getElementById("fecha-error")!.textContent = "";
            }
          }}
        />
        <p id="fecha-error" style={{ color: "red", fontSize: "0.9rem" }}></p>
      </div>

      <div>
        <label htmlFor="hora">Hora que le vendría mejor:</label>
        <input
          id="hora"
          type="time"
          name="hora"
          required
          min="08:00"
          max="16:00"
          onInput={(e) => {
            const value = (e.target as HTMLInputElement).value;
            if (value < "08:00" || value > "16:00") {
              alert("Solo se permiten citas entre las 08:00 y las 16:00.");
              (e.target as HTMLInputElement).value = "";
            }
          }}
        />
      </div>

      <input
        type="tel"
        name="tlf"
        placeholder="Teléfono "
        pattern="\d{9}"
        required
      />
      <input
        type="email"
        name="correo"
        placeholder="Correo electrónico"
        required
      />

      <div>
        <div className="field-and-button">
          <Info
            targetId="info-model-car"
            message="Por favor, en este apartado añada el modelo del coche, el año y el número de chasis."
          />
          <input
            type="text"
            name="modelCar"
            placeholder="Modelo del coche"
            required
          />
        </div>
      </div>

      <div>
        <div className="field-and-button">
          <Info
            targetId="info-motivo"
            message="Por favor, describa de manera detallada el problema para ayudarnos a gestionar mejor su cita."
          />
          <input
            type="text"
            name="motivo"
            placeholder="Motivo de la cita"
            required
          />
        </div>
      </div>

      <button type="submit">Reservar</button>
    </form>
  );
};

export default FormCitas;
