import { API_URL } from "../config/api.js";
import { guardarSesion } from "../utils/storage.js";

// Iniciar sesión
export async function login(correo, contrasena) {
  const respuesta = await fetch(
    `${API_URL}/users?email=${correo}&password=${contrasena}`
  );

  const usuarios = await respuesta.json();

  if (usuarios.length === 0) {
    return null; // Credenciales incorrectas
  }

  const usuario = usuarios[0];
  guardarSesion(usuario);
  return usuario;
}

// Registrar usuario nuevo
export async function registrar(nombre, correo, contrasena) {
  const nuevoUsuario = {
    name: nombre,
    email: correo,
    password: contrasena,
    role: "user"
  };

  const respuesta = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoUsuario)
  });

  return await respuesta.json();
}
