// Formatear número a precio ($)
export function formatearPrecio(valor) {
  return `$ ${valor.toFixed(2)}`;
}

// Obtener fecha actual (YYYY-MM-DD)
export function obtenerFechaActual() {
  const fecha = new Date();
  return fecha.toISOString().split("T")[0];
}
