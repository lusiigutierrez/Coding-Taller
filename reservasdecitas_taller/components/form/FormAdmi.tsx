import { FunctionComponent } from "preact";

const FormAdmin: FunctionComponent = () => {
  return (
    <form className="admin-form" action="/admin/login" method="post">
      <legend>Acceso Administrador</legend>
      <input
        type="text"
        name="user"
        placeholder="Usuario"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        required
      />
      <button type="submit" class="register-button">Iniciar Sesión</button>
    </form>
  );
};

export default FormAdmin;
