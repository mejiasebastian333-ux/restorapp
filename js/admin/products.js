import { obtenerProductos, crearProducto } from "../services/product.service.js";

const form = document.getElementById("form-producto");
const lista = document.getElementById("lista-productos");

cargarProductos();

async function cargarProductos() {
  const productos = await obtenerProductos();
  lista.innerHTML = "";

  productos.forEach(p => {
    const div = document.createElement("div");
    div.className = "bg-white p-3 rounded shadow";
    div.textContent = `${p.name} - $${p.price}`;
    lista.appendChild(div);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const producto = {
    name: nombre.value,
    price: Number(precio.value),
    image: imagen.value,
    description: ""
  };

  await crearProducto(producto);
  alert("Producto creado");
  form.reset();
  cargarProductos();
});
