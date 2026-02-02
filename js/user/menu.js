import { obtenerProductos } from "../services/product.service.js";
import {
  agregarUnidad,
  quitarUnidad,
  obtenerCarrito,
  calcularSubtotal,
  vaciarCarrito
} from "./cart.js";
import { crearOrden } from "../services/order.service.js";
import { obtenerSesion, cerrarSesion } from "../utils/storage.js";
import { formatearPrecio, obtenerFechaActual } from "../utils/format.js";

const contenedorProductos = document.getElementById("lista-productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");
const btnConfirmar = document.getElementById("btn-confirmar-pedido");
const btnVaciar = document.getElementById("btn-vaciar-carrito");
const btnLogout = document.getElementById("btn-logout");

cargarProductos();
renderizarCarrito();

// LOGOUT
btnLogout.addEventListener("click", () => {
  cerrarSesion();
  window.location.href = "../../index.html";
});

// CARGAR PRODUCTOS
async function cargarProductos() {
  const productos = await obtenerProductos();
  contenedorProductos.innerHTML = "";

  productos.forEach(producto => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-xl shadow";

    card.innerHTML = `
      <img
        src="../../assets/images/${producto.image}"
        class="w-full h-40 object-cover rounded"
      />
      <h3 class="font-semibold mt-2">${producto.name}</h3>
      <p class="text-sm text-gray-600">${producto.description}</p>
      <p class="font-bold mt-2">${formatearPrecio(producto.price)}</p>
      <button class="mt-3 w-full bg-blue-600 text-white py-2 rounded">
        Agregar
      </button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      agregarUnidad(producto);
      renderizarCarrito();
    });

    contenedorProductos.appendChild(card);
  });
}

// RENDERIZAR CARRITO
function renderizarCarrito() {
  const carrito = obtenerCarrito();
  listaCarrito.innerHTML = "";

  carrito.forEach(item => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center";

    li.innerHTML = `
      <div>
        <p>${item.name}</p>
        <p class="text-xs text-gray-500">
          ${item.quantity} x ${formatearPrecio(item.price)}
        </p>
      </div>

      <div class="flex items-center space-x-2">
        <button class="btn-restar bg-gray-200 px-2 rounded">-</button>
        <span>${item.quantity}</span>
        <button class="btn-sumar bg-gray-200 px-2 rounded">+</button>
      </div>
    `;

    li.querySelector(".btn-sumar").addEventListener("click", () => {
      agregarUnidad({
        id: item.productId,
        name: item.name,
        price: item.price
      });
      renderizarCarrito();
    });

    li.querySelector(".btn-restar").addEventListener("click", () => {
      quitarUnidad(item.productId);
      renderizarCarrito();
    });

    listaCarrito.appendChild(li);
  });

  totalCarrito.textContent = formatearPrecio(calcularSubtotal());
}

// VACIAR CARRITO
btnVaciar.addEventListener("click", () => {
  vaciarCarrito();
  renderizarCarrito();
});

// CONFIRMAR PEDIDO
btnConfirmar.addEventListener("click", async () => {
  const carrito = obtenerCarrito();
  if (carrito.length === 0) {
    alert("Tu pedido está vacío");
    return;
  }

  const sesion = obtenerSesion();
  const subtotal = calcularSubtotal();
  const impuesto = subtotal * 0.08;

  await crearOrden({
    userId: sesion.id,
    items: carrito,
    status: "pending",
    subtotal,
    tax: impuesto,
    total: subtotal + impuesto,
    date: obtenerFechaActual()
  });

  vaciarCarrito();
  alert("Pedido realizado con éxito");
  window.location.href = "./orders.html";
});
