import { FunctionComponent } from "preact";

const FormNewClient: FunctionComponent = () => {
  return (
    <form class="register-form" action="/auth/register" method="post">
        <legend>Regístrate</legend>

        <label for="user">Nombre de usuario:</label>
        <input
          type="text"
          id="user"
          name="user"
          placeholder="Nombre de usuario"
          required
        />

        <label for="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          required
        />

        <label for="apellidos">Apellidos:</label>
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          placeholder="Apellidos"
          required
        />

        <label for="tlf">Teléfono:</label>
        <input
          type="tel"
          id="tlf"
          name="tlf"
          placeholder="Teléfono (XXX-XXX-XXX)"
          pattern="\d{3}[-]\d{3}[-]\d{3}"
          title="El formato debe ser XXX-XXX-XXX"
          required
        />

        <label for="correo">Correo electrónico:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="Correo electrónico"
          required
        />

        <label for="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          minlength="8"
          title="La contraseña debe tener al menos 8 caracteres"
          required
        />

        <button type="submit" class="register-button">Crear usuario</button>

    </form>
  );
};

export default FormNewClient;
