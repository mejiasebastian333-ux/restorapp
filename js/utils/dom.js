// Crear un elemento con clases
export function crearElemento(tag, clases = "") {
  const elemento = document.createElement(tag);
  elemento.className = clases;
  return elemento;
}

// Limpiar contenido de un contenedor
export function limpiarElemento(elemento) {
  elemento.innerHTML = "";
}
