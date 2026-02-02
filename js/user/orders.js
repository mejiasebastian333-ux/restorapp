import { obtenerSesion } from "../utils/storage.js";
import { obtenerOrdenesPorUsuario } from "../services/order.service.js";
import { formatearPrecio } from "../utils/format.js";

const contenedorPedidos = document.getElementById("lista-pedidos");
const mensajeVacio = document.getElementById("mensaje-vacio");

const sesion = obtenerSesion();

// Cargar pedidos al iniciar
cargarPedidos();

async function cargarPedidos() {
  const pedidos = await obtenerOrdenesPorUsuario(sesion.id);

  if (pedidos.length === 0) {
    mensajeVacio.classList.remove("hidden");
    return;
  }

  mostrarPedidos(pedidos);
}

function mostrarPedidos(pedidos) {
  contenedorPedidos.innerHTML = "";

  pedidos.forEach((pedido) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow p-4";

    card.innerHTML = `
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-semibold">
          Pedido #${pedido.id}
        </h3>

        <span class="text-sm px-3 py-1 rounded-full bg-gray-200">
          ${pedido.status}
        </span>
      </div>

      <p class="text-sm text-gray-600">
        Fecha: ${pedido.date}
      </p>

      <p class="font-bold mt-2">
        Total: ${formatearPrecio(pedido.total)}
      </p>
    `;

    contenedorPedidos.appendChild(card);
  });
}
