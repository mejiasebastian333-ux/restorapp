import {
  obtenerTodasLasOrdenes,
  cambiarEstadoOrden
} from "../services/order.service.js";

const contenedor = document.getElementById("lista-pedidos");

cargarPedidos();

async function cargarPedidos() {
  const pedidos = await obtenerTodasLasOrdenes();
  contenedor.innerHTML = "";

  pedidos.forEach(pedido => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-xl shadow";

    card.innerHTML = `
      <p class="font-semibold">Pedido #${pedido.id}</p>
      <p>Estado: ${pedido.status}</p>

      <select class="border mt-2 p-1 rounded">
        <option value="pending">pending</option>
        <option value="preparing">preparing</option>
        <option value="delivered">delivered</option>
        <option value="cancelled">cancelled</option>
      </select>
    `;

    const select = card.querySelector("select");
    select.value = pedido.status;

    select.addEventListener("change", async () => {
      await cambiarEstadoOrden(pedido.id, select.value);
      alert("Estado actualizado");
    });

    contenedor.appendChild(card);
  });
}
