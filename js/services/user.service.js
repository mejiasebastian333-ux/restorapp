import { API_URL } from "../config/api.js";

// Obtener usuario por id
export async function obtenerUsuarioPorId(idUsuario) {
  const respuesta = await fetch(`${API_URL}/users/${idUsuario}`);
  return await respuesta.json();
}

// Actualizar datos del usuario
export async function actualizarUsuario(idUsuario, datosActualizados) {
  const respuesta = await fetch(`${API_URL}/users/${idUsuario}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datosActualizados)
  });

  return await respuesta.json();
}
