import { FunctionComponent } from "preact";

const FormAddProduct: FunctionComponent = () => {
  return (
    <div class="fondoinventario">
      <h1 class="titulo-inventario">Añadir Producto</h1>
      <form
        class="formulario-inventario"
        action="/admin/admin/inventory/add"
        method="post"
      >
        <label for="nombre">Nombre del producto:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          required
        />

        <label for="precio">Precio unidad:</label>
        <input
          type="number"
          id="precio"
          name="precio"
          placeholder="Precio"
          step="0.01"
          required
        />

        <label for="cantidad">Cantidad del producto:</label>
        <input
          type="number"
          id="cantidad"
          name="cantidad"
          placeholder="Cantidad"
          required
        />

        <button type="submit" class="boton-formulario">Añadir producto</button>

        <a href="/admin/admin/inventory" class="boton-volver">
          Volver al Inventario
        </a>
      </form>
    </div>
  );
};

export default FormAddProduct;
