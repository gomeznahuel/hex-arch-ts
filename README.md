## Hexagonal Architecture with TypeScript

This template serves as an example of the implementation of a Hexagonal Architecture using TypeScript.


The project features a simple REST API designed for product management, comprising two core entities: `User` and `Product`. The `User` entity serves the crucial role of facilitating authentication, while the `Product` entity demonstrates the implementation of Create, Read, Update, and Delete (CRUD) operations.

```
my-api/
│
├── src/
│   ├── application/
│   │   ├── services/
│   │   │   ├── AuthService.ts    // Servicio de autenticación
│   │   │   ├── UserService.ts   // Servicio de usuario
│   │   │   └── ProductService.ts // Servicio de productos
│   │   │
│   │   ├── usecases/
│   │   │   ├── AuthUseCases.ts    // Casos de uso de autenticación
│   │   │   ├── UserUseCases.ts   // Casos de uso de usuario
│   │   │   └── ProductUseCases.ts // Casos de uso de productos
│   │   │
│   │   └── adapters/
│   │       ├── controllers/
│   │       │   ├── AuthController.ts    // Controlador de autenticación
│   │       │   ├── UserController.ts   // Controlador de usuario
│   │       │   └── ProductController.ts // Controlador de productos
│   │       │
│   │       ├── repositories/
│   │       │   ├── UserRepository.ts   // Repositorio de usuarios
│   │       │   └── ProductRepository.ts // Repositorio de productos
│   │       │
│   │       ├── config/
│   │       │   ├── express.ts // Configuración de Express.js
│   │       │   └── routes.ts  // Definición de rutas
│   │       │
│   │       └── errors/
│   │           ├── AppError.ts // Clase para manejar errores
│   │           ├── ErrorHandler.ts // Manejador de errores
│   │           └── ...
│   │
│   ├── domain/
│   │   ├── entities/
│   │   │   ├── User.ts    // Modelo de usuario
│   │   │   ├── Product.ts // Modelo de producto
│   │   │   └── ...
│   │   │
│   │   ├── repositories/
│   │   │   ├── UserRepositoryInterface.ts   // Interfaz de repositorio de usuarios
│   │   │   ├── ProductRepositoryInterface.ts // Interfaz de repositorio de productos
│   │   │   └── ...
│   │   │
│   │   ├── services/
│   │   │   ├── AuthServiceInterface.ts // Interfaz de servicio de autenticación
│   │   │   ├── UserServiceInterface.ts // Interfaz de servicio de usuario
│   │   │   └── ...
│   │   │
│   │   └── ...
│   │
│   ├── infrastructure/
│   │   ├── persistence/
│   │   │   ├── UserRepositoryImpl.ts   // Implementación del repositorio de usuarios
│   │   │   ├── ProductRepositoryImpl.ts // Implementación del repositorio de productos
│   │   │   └── ...
│   │   │
│   │   ├── auth/
│   │   │   ├── AuthProvider.ts   // Proveedor de autenticación (JWT, por ejemplo)
│   │   │   └── ...
│   │   │
│   │   └── ...
│   │
│   └── index.ts // Punto de entrada de la aplicación
│
├── package.json
├── tsconfig.json
├── nodemon.json
└── ...

```