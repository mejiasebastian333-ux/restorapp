import { login, registrar } from "./services/auth.service.js";
import { obtenerSesion } from "./utils/storage.js";
import { ROLES } from "./config/constants.js";

// ===== ELEMENTOS DEL DOM =====
const formLogin = document.getElementById("form-login");
const formRegistro = document.getElementById("form-registro");
const mensajeError = document.getElementById("mensaje-error");

// ===== VERIFICAR SI YA HAY SESIÓN =====
const sesion = obtenerSesion();

if (sesion) {
  redirigirSegunRol(sesion.role);
}

// ===== LOGIN =====
formLogin.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const usuario = await login(email, password);

  if (!usuario) {
    mostrarError("Correo o contraseña incorrectos");
    return;
  }

  redirigirSegunRol(usuario.role);
});

// ===== REGISTRO =====
formRegistro.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById("registro-nombre").value;
  const email = document.getElementById("registro-email").value;
  const password = document.getElementById("registro-password").value;

  if (!nombre || !email || !password) {
    mostrarError("Todos los campos son obligatorios");
    return;
  }

  await registrar(nombre, email, password);
  alert("Cuenta creada correctamente. Ahora puedes iniciar sesión.");
  formRegistro.reset();
});

// ===== FUNCIONES AUXILIARES =====
function redirigirSegunRol(rol) {
  if (rol === ROLES.ADMIN) {
    window.location.href = "./pages/admin/dashboard.html";
  } else {
    window.location.href = "./pages/user/menu.html";
  }
}

function mostrarError(mensaje) {
  mensajeError.textContent = mensaje;
  mensajeError.classList.remove("hidden");

  setTimeout(() => {
    mensajeError.classList.add("hidden");
  }, 3000);
}
