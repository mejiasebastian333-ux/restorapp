import { API_URL } from "../config/api.js";

// Obtener todos los productos
export async function obtenerProductos() {
  const respuesta = await fetch(`${API_URL}/products`);
  return await respuesta.json();
}

// Crear nuevo producto (admin)
export async function crearProducto(producto) {
  const respuesta = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto)
  });

  return await respuesta.json();
}
