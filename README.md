restorapp/
│
├── index.html                     # Login / Registro
│
├── pages/
│   ├── user/
│   │   ├── menu.html              # Menú de productos
│   │   ├── orders.html            # Mis pedidos
│   │   └── profile.html           # Perfil usuario
│   │
│   └── admin/
│       ├── dashboard.html         # Dashboard admin
│       ├── orders.html            # Gestión de pedidos
│       └── products.html          # Gestión de productos
│
├── js/
│   ├── config/
│   │   ├── api.js                 # URL base JSON Server
│   │   └── constants.js           # Roles, estados, impuestos
│   │
│   ├── services/
│   │   ├── auth.service.js        # Login / register / logout
│   │   ├── user.service.js        # Usuarios
│   │   ├── product.service.js     # Productos
│   │   └── order.service.js       # Órdenes
│   │
│   ├── guards/
│   │   ├── auth.guard.js          # Verifica sesión
│   │   └── role.guard.js          # Verifica rol
│   │
│   ├── utils/
│   │   ├── storage.js             # LocalStorage / Session
│   │   ├── format.js              # Precios, fechas
│   │   └── dom.js                 # Helpers DOM
│   │
│   ├── user/
│   │   ├── menu.js                # Lógica menú
│   │   ├── cart.js                # Pedido actual
│   │   ├── orders.js              # Mis pedidos
│   │   └── profile.js             # Perfil usuario
│   │
│   ├── admin/
│   │   ├── dashboard.js           # Métricas admin
│   │   ├── orders.js              # Cambiar estado pedidos
│   │   └── products.js            # CRUD productos
│   │
│   └── main.js                    # Inicialización global
│
├── assets/
│   ├── images/                    # Imágenes del menú
│   └── avatars/
│
├── db.json                        # JSON Server
├── README.md


🥇 ORDEN GLOBAL DE DESARROLLO (de principio a fin)
1️⃣ db.json

📄 db.json

👉 SIEMPRE PRIMERO

Define qué datos existen

Define campos, relaciones y estados

Todo el JS depende de esto

✔ users
✔ products
✔ orders

2️⃣ Configuración base JS

📁 js/config/

api.js
constants.js


👉 Aquí defines:

URL base

Roles

Estados de órdenes

Impuestos

Nada visual todavía.

3️⃣ Utils (helpers generales)

📁 js/utils/

storage.js
format.js
dom.js


👉 Funciones reutilizables:

Guardar sesión

Formatear precios

Crear nodos DOM

4️⃣ Servicios (API / lógica de datos)

📁 js/services/

auth.service.js
user.service.js
product.service.js
order.service.js


👉 Fetch, POST, PATCH, GET
👉 Sin tocar el DOM

Esto es cerebro, no interfaz.

5️⃣ HTML base de todas las vistas

📄
index.html
menu.html
orders.html
dashboard.html

👉 Solo:

Estructura

Tailwind

IDs y contenedores

❌ Sin JS complejo aún.

6️⃣ Guards (seguridad y roles)

📁 js/guards/

auth.guard.js
role.guard.js


👉 Se apoyan en:

storage

constants

Aquí ya puedes:

Bloquear vistas

Redirigir

7️⃣ Lógica USER

📁 js/user/

menu.js
cart.js
orders.js
profile.js


👉 Flujo:

Listar productos

Crear pedido

Ver pedidos

8️⃣ Lógica ADMIN

📁 js/admin/

dashboard.js
orders.js
products.js


👉 Métricas
👉 Cambios de estado
👉 CRUD productos

9️⃣ main.js (orquestador)

📄 js/main.js

👉 Detecta:

En qué página estás

Qué JS cargar

Inicializa la app



db.json
↓
config
↓
utils
↓
services
↓
html
↓
guards
↓
user
↓
admin
↓
main.js
