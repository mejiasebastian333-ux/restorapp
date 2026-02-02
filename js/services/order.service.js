import { API_URL } from "../config/api.js";

// Crear nueva orden
export async function crearOrden(orden) {
  const respuesta = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orden)
  });

  return await respuesta.json();
}

// Obtener órdenes por usuario
export async function obtenerOrdenesPorUsuario(userId) {
  const respuesta = await fetch(`${API_URL}/orders?userId=${userId}`);
  return await respuesta.json();
}

// Obtener todas las órdenes (admin)
export async function obtenerTodasLasOrdenes() {
  const respuesta = await fetch(`${API_URL}/orders`);
  return await respuesta.json();
}

// Cambiar estado de una orden
export async function cambiarEstadoOrden(idOrden, nuevoEstado) {
  const respuesta = await fetch(`${API_URL}/orders/${idOrden}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: nuevoEstado })
  });

  return await respuesta.json();
}
