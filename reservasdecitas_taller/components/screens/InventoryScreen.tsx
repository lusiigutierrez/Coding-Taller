import { FunctionComponent } from "preact";
import { Producto } from "../../types.ts";

const InventoryScreen: FunctionComponent<{ productos: Producto[] }> = (
  { productos },
) => {
  return (
    <div className="fondoinventario">
      <h1 className="titulo-inventario">Inventario</h1>

      <div className="contenedor-inventario">
        <div className="inventario-box">
          <ul className="inventario-lista">
            {productos.map((producto) => (
              <li className="inventario-item" key={producto._id}>
                <strong>Nombre:</strong> {producto.nombre} <br />
                <strong>Precio:</strong> {producto.precio} € <br />
                <strong>Cantidad:</strong> {producto.cantidad}
                <hr />
              </li>
            ))}
          </ul>

          <div>
            <a href="/admin/admin/dashboard" className="boton-volver">Volver al dashboard</a>
            <a href="/admin/admin/inventory/add" className="boton-anadir">Añadir un producto</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryScreen;
