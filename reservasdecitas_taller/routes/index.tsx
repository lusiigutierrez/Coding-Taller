export default function Home() {
  return (
    <div className="inicio">
      <div className="contenido">
        <h1 className="titulo">Bienvenido a Nuestro Taller</h1>
        <p className="descripcion">
          Reserva tu cita fácilmente y asegura el mejor cuidado para tu
          vehículo.
        </p>
        <a href="/guest" className="boton">Pide tu Cita Aquí</a>
        <p className="mensaje-invitado">
          ¿No tienes cuenta? Reserva como invitado y gestiona fácilmente tu cita
          después de registrarte.
        </p>

        {/* Sección de Google Maps */}
        <div className="mapa-container">
          <h2 className="mapa-titulo">Nuestra Ubicación</h2>
          <iframe
            title="Ubicación Taller"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.040225186755!2d-1.249355824054816!3d38.092727471906954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6383ee802d2597%3A0xd9d77c2c090541ec!2sCoding%20Murcia%20-%20Taller%20especializado%20BMW!5e0!3m2!1ses!2ses!4v1737759541341!5m2!1ses!2ses"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
}
