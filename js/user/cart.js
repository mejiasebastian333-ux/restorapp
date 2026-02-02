const CLAVE_CARRITO = "pedido_actual";

// Obtener carrito
export function obtenerCarrito() {
  const data = localStorage.getItem(CLAVE_CARRITO);
  return data ? JSON.parse(data) : [];
}

// Guardar carrito
function guardarCarrito(carrito) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

// Agregar una unidad
export function agregarUnidad(producto) {
  const carrito = obtenerCarrito();
  const item = carrito.find(i => i.productId === producto.id);

  if (item) {
    item.quantity += 1;
  } else {
    carrito.push({
      productId: producto.id,
      name: producto.name,
      price: producto.price,
      quantity: 1
    });
  }

  guardarCarrito(carrito);
}

// Quitar una unidad
export function quitarUnidad(idProducto) {
  let carrito = obtenerCarrito();

  carrito = carrito
    .map(item => {
      if (item.productId === idProducto) {
        item.quantity -= 1;
      }
      return item;
    })
    .filter(item => item.quantity > 0);

  guardarCarrito(carrito);
}

// Vaciar carrito
export function vaciarCarrito() {
  localStorage.removeItem(CLAVE_CARRITO);
}

// Calcular subtotal
export function calcularSubtotal() {
  return obtenerCarrito().reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}
