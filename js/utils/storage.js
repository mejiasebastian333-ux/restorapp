const CLAVE_SESION = "usuario_logeado";

// Guardar sesión
export function guardarSesion(usuario) {
  localStorage.setItem(CLAVE_SESION, JSON.stringify(usuario));
}

// Obtener sesión
export function obtenerSesion() {
  const data = localStorage.getItem(CLAVE_SESION);
  return data ? JSON.parse(data) : null;
}

// Cerrar sesión
export function cerrarSesion() {
  localStorage.removeItem(CLAVE_SESION);
}
