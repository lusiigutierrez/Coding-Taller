import { FunctionComponent } from "preact";

const FormClient: FunctionComponent = () => {
  return (
    <form class="register-form" action="/auth/login" method="post">
        <legend>Iniciar Sesión</legend>

        <label for="user">Nombre de usuario:</label>
        <input
          type="text"
          id="user"
          name="user"
          placeholder="Nombre de usuario"
          required
        />

        <label for="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
          required
        />

        <p className="fraseRegistrar">
          ¿Aún no tienes cuenta?
          <a href="/auth/register">  Regístrate aquí</a>
        </p>

        <button type="submit" class="register-button">Iniciar Sesión</button>
    </form>
  );
};

export default FormClient;
