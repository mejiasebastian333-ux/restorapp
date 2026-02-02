import { obtenerSesion } from "../utils/storage.js";

// Verifica si el usuario tiene el rol requerido
export function verificarRol(rolPermitido) {
  const sesion = obtenerSesion();

  if (!sesion || sesion.role !== rolPermitido) {
    // Si el rol no coincide, redirigir
    if (sesion?.role === "admin") {
      window.location.href = "../admin/dashboard.html";
    } else {
      window.location.href = "../user/menu.html";
    }
  }
}
