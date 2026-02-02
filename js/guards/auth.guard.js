import { obtenerSesion } from "../utils/storage.js";

// Verifica si el usuario está logueado
export function verificarSesion() {
  const sesion = obtenerSesion();

  if (!sesion) {
    // Si no hay sesión, volver al login
    window.location.href = "../../index.html";
  }
}
