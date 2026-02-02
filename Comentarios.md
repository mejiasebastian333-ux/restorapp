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