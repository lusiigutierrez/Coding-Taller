export default function Home() {
  return (
    <div className="registro-final">
        <h1 className="registro-titulo">Registro completado</h1>
        <p className="registro-descripcion">
          Ahora puedes iniciar sesión con tu cuenta.
        </p>
        <a href="/auth/login" className="registro-boton">Inicia sesión aquí</a>
      </div>
  );
}
