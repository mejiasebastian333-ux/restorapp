import { obtenerSesion, guardarSesion } from "../utils/storage.js";
import {
  obtenerUsuarioPorId,
  actualizarUsuario
} from "../services/user.service.js";

const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const formPerfil = document.getElementById("form-perfil");
const mensaje = document.getElementById("mensaje");

const sesion = obtenerSesion();

// Cargar datos del usuario
cargarPerfil();

async function cargarPerfil() {
  const usuario = await obtenerUsuarioPorId(sesion.id);

  inputNombre.value = usuario.name;
  inputCorreo.value = usuario.email;
}

// Guardar cambios
formPerfil.addEventListener("submit", async (e) => {
  e.preventDefault();

  const datosActualizados = {
    name: inputNombre.value,
    email: inputCorreo.value
  };

  const usuarioActualizado = await actualizarUsuario(
    sesion.id,
    datosActualizados
  );

  // Actualizar sesión local
  guardarSesion(usuarioActualizado);

  mensaje.classList.remove("hidden");

  setTimeout(() => {
    mensaje.classList.add("hidden");
  }, 3000);
});
