export default function Home() {
    return (
      <div className="home-container">
        <div className="content-container">
          <h1 className="title">Seleccione una opción para continuar:</h1>
          <div className="button-container">
            <a href={`/guest`} className="button">Acceder como invitado</a>
            <a href={`/login`} className="button">Iniciar sesión como cliente</a>
            <a href={`/register`} className="button">Registrarse como nuevo cliente</a>
          </div>
        </div>
      </div>
    );
  }
  