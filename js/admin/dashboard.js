import { obtenerTodasLasOrdenes } from "../services/order.service.js";
import { formatearPrecio, obtenerFechaActual } from "../utils/format.js";

const totalPedidos = document.getElementById("total-pedidos");
const pedidosPendientes = document.getElementById("pedidos-pendientes");
const totalDia = document.getElementById("total-dia");

cargarDashboard();

async function cargarDashboard() {
  const ordenes = await obtenerTodasLasOrdenes();

  totalPedidos.textContent = ordenes.length;

  const pendientes = ordenes.filter(o => o.status === "pending");
  pedidosPendientes.textContent = pendientes.length;

  const hoy = obtenerFechaActual();
  const totalHoy = ordenes
    .filter(o => o.date === hoy)
    .reduce((suma, o) => suma + o.total, 0);

  totalDia.textContent = formatearPrecio(totalHoy);
}

import { cerrarSesion } from "../utils/storage.js";

document.getElementById("btn-logout").addEventListener("click", () => {
  cerrarSesion();
  window.location.href = "../../index.html";
});
