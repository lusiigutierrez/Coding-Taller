import { FreshContext } from "$fresh/server.ts";

export default async function Layout(req: Request, ctx: FreshContext) {
  return (
    <div className="layout">
      <div className="cabezera">
        <div className="cabezera-contenido">
          <a href="/" className="logo">
            <img
              src="https://imagecdn.123inventatuweb.com/a3/0a/a30a37fd-0677-432b-a469-822fd6029d09.png"
              alt="Coding Murcia"
            />
          </a>
          <div className="auth-botones">
            <a href="/auth/login">
              <i ></i> Mi perfil
            </a>
            <a href="/guest">
              <i></i> Reservar Cita
            </a>
            <a href="/logout">
              Cerrar sesión
            </a>
          </div>
        </div>
      </div>
        <ctx.Component />
    </div>
  );
}
