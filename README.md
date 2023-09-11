## Hexagonal Architecture with TypeScript

This template serves as an example of the implementation of a Hexagonal Architecture using TypeScript.


The project features a simple REST API designed for product management, comprising two core entities: `User` and `Product`. The `User` entity serves the crucial role of facilitating authentication, while the `Product` entity demonstrates the implementation of Create, Read, Update, and Delete (CRUD) operations.

```
src/
|-- controllers/
|   |-- AuthController.ts   // Controladores relacionados con autenticación (login, registro)
|   |-- ProductController.ts // Controladores relacionados con productos
|
|-- models/
|   |-- User.ts             // Modelo de datos para la entidad Usuario
|   |-- Product.ts          // Modelo de datos para la entidad Producto
|
|-- routes/
|   |-- authRoutes.ts       // Rutas relacionadas con autenticación
|   |-- productRoutes.ts    // Rutas relacionadas con productos
|
|-- middleware/
|   |-- authMiddleware.ts    // Middleware de autenticación
|
|-- config/
|   |-- config.ts           // Configuración de la aplicación (por ejemplo, JWT secret)
|
|-- app.ts                   // Punto de entrada de la aplicación Express
|-- server.ts                // Inicialización del servidor Express
|-- index.ts                 // Punto de entrada principal para arrancar la aplicación
|-- types/                   // Tipos personalizados TypeScript
|
|-- utils/                   // Utilidades generales
|
|-- tests/                   // Directorio para pruebas unitarias y de integración
|
|-- package.json             // Archivo de configuración de npm
|-- tsconfig.json            // Configuración del compilador TypeScript
|-- ...
```