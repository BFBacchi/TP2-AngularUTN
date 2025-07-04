# 🛍️ Mi Aplicación Angular - TP1

Una aplicación web moderna construida con **Angular 17** y **Tailwind CSS v4** que incluye un catálogo de productos integrado con **FakeStore API**, sistema de filtros avanzado, paginación dinámica y cambio de tema dinámico.

## 🚀 Características

### ✨ **Funcionalidades Principales**
- **🏠 Página de Inicio** - Landing page con estadísticas y características
- **📦 Catálogo de Productos** - Grid responsive con filtros avanzados y paginación
- **🔍 Detalle de Productos** - Vista detallada con características y galería
- **🔐 Sistema de Autenticación** - Login y registro con validaciones
- **🌙 Tema Dinámico** - Cambio entre modo claro y oscuro
- **📱 Diseño Responsive** - Optimizado para todos los dispositivos

### 🎯 **Nuevas Funcionalidades Implementadas**
- **🛒 Integración con FakeStore API** - Productos reales desde `https://fakestoreapi.com`
- **🔍 Sistema de Filtros Avanzado** - Por categoría, precio y ordenamiento
- **📄 Paginación Inteligente** - Navegación dinámica con 12 productos por página
- **⚡ Cache de Datos** - Mejor rendimiento con datos cacheados
- **🔄 Estados de Carga** - Indicadores visuales durante operaciones
- **❌ Manejo de Errores** - Recuperación automática y botones de reintento
- **🎨 Tema Oscuro Mejorado** - Panel de filtros con tema oscuro corregido

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: Angular 17 (Standalone Components)
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite (Angular CLI)
- **Package Manager**: npm
- **Language**: TypeScript
- **State Management**: RxJS BehaviorSubject
- **HTTP Client**: Angular HttpClient
- **API Integration**: FakeStore API

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm (incluido con Node.js)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd tp1-angular
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   # o
   ng serve
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

## 🏗️ Estructura del Proyecto

```
tp1-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/           # Página de inicio
│   │   │   ├── catalogo/       # Catálogo con filtros y paginación
│   │   │   ├── detalle/        # Detalle de productos
│   │   │   ├── login/          # Formulario de login
│   │   │   └── registro/       # Formulario de registro
│   │   ├── services/
│   │   │   ├── producto.service.ts    # Gestión de productos + FakeStore API
│   │   │   └── theme.service.ts       # Gestión de tema
│   │   ├── app.component.ts    # Componente principal
│   │   ├── app.component.html  # Template principal
│   │   └── app.routes.ts       # Configuración de rutas
│   ├── styles.css              # Estilos globales + Tailwind v4
│   └── main.ts                 # Punto de entrada
├── .postcssrc.json             # Configuración PostCSS
└── package.json                # Dependencias del proyecto
```

## 🎯 Componentes Principales

### **App Component**
- Layout principal con header, navegación y footer
- Sistema de rutas con `router-outlet`
- Botón de cambio de tema
- Compatibilidad con SSR (Server-Side Rendering)

### **Home Component**
- Página de bienvenida con estadísticas
- Sección de características destacadas
- Diseño con gradientes y animaciones

### **Catálogo Component** ⭐ **ACTUALIZADO**
- **Grid responsive** de productos desde FakeStore API
- **Sistema de filtros avanzado**:
  - Filtro por categoría (dinámico desde API)
  - Filtro por rango de precio (mínimo y máximo)
  - Ordenamiento (precio ascendente/descendente, nombre A-Z/Z-A)
- **Paginación inteligente**:
  - 12 productos por página
  - Navegación con botones Anterior/Siguiente
  - Rango de páginas dinámico
  - Reset automático al aplicar filtros
- **Estados de carga** y manejo de errores
- **Cache de datos** para mejor rendimiento

### **Detalle Component** ⭐ **ACTUALIZADO**
- Vista completa del producto desde FakeStore API
- Información detallada: título, precio, descripción, categoría
- Sistema de calificaciones con estrellas
- Contador de reseñas
- Galería de imágenes
- Botones de acción (comprar, agregar al carrito)

### **Login Component**
- Formulario de autenticación
- Validaciones en tiempo real
- Opciones de login social
- Enlace a registro

### **Registro Component**
- Formulario de registro completo
- Validaciones de contraseña
- Términos y condiciones
- Enlace a login

## 🔌 Integración con FakeStore API

### **Estructura de Datos**
```typescript
interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
```

### **Endpoints Utilizados**
- `GET /products` - Obtener todos los productos
- `GET /products/{id}` - Obtener producto específico
- `GET /products/categories` - Obtener categorías disponibles
- `GET /products/category/{category}` - Productos por categoría

### **Funcionalidades de la API**
- ✅ **Productos reales** con imágenes y descripciones
- ✅ **Categorías dinámicas** (electronics, clothing, etc.)
- ✅ **Sistema de calificaciones** con estrellas y contador
- ✅ **Información completa** de cada producto
- ✅ **Cache automático** para mejor rendimiento

## 🔍 Sistema de Filtros y Paginación

### **Filtros Implementados**
- **Por Categoría**: Filtra productos por categorías de FakeStore
- **Por Precio**: Rango mínimo y máximo configurable
- **Por Ordenamiento**:
  - Precio: Menor a Mayor
  - Precio: Mayor a Menor
  - Nombre A-Z
  - Nombre Z-A

### **Paginación Inteligente**
- **12 productos por página** (configurable)
- **Navegación intuitiva** con botones Anterior/Siguiente
- **Rango de páginas** que se adapta al total de resultados
- **Reset automático** a página 1 al aplicar filtros
- **Estados deshabilitados** para botones cuando no aplica

### **Estados de la Interfaz**
- **Carga**: Spinner animado durante peticiones
- **Error**: Mensaje de error con botón de reintento
- **Vacío**: Mensaje cuando no hay productos que coincidan
- **Contador**: Muestra "X de Y productos"

## 🎨 Sistema de Tema

### **Configuración Tailwind CSS v4**
```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

### **Clases de Tema Oscuro**
- **Fondos**: `dark:bg-gray-900`, `dark:bg-gray-800`
- **Textos**: `dark:text-white`, `dark:text-gray-300`
- **Bordes**: `dark:border-gray-600`
- **Inputs**: `dark:bg-gray-700`
- **Botones**: `dark:bg-blue-700`

### **Servicio de Tema**
- Gestión de estado con RxJS
- Persistencia en localStorage
- Detección de preferencia del sistema
- Compatibilidad con SSR
- **Corrección del tema oscuro** en panel de filtros

## 📱 Diseño Responsive

La aplicación está optimizada para diferentes tamaños de pantalla:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Breakpoints Utilizados**
- `sm:` - 640px y superior
- `md:` - 768px y superior
- `lg:` - 1024px y superior
- `xl:` - 1280px y superior

## 🔧 Scripts Disponibles

```bash
# Servidor de desarrollo
npm start
ng serve

# Build de producción
npm run build
ng build

# Tests unitarios
npm test
ng test

# Tests e2e
npm run e2e
ng e2e

# Linting
npm run lint
ng lint
```

## 🚀 Despliegue

### **Build de Producción**
```bash
ng build --configuration production
```

### **Servidor de Producción**
```bash
ng serve --configuration production
```

## 🎯 Funcionalidades Implementadas

### ✅ **Completadas**
- [x] **Integración con FakeStore API** - Productos reales
- [x] **Sistema de Filtros Avanzado** - Categoría, precio, ordenamiento
- [x] **Paginación Inteligente** - Navegación dinámica
- [x] **Cache de Datos** - Mejor rendimiento
- [x] **Estados de Carga** - Indicadores visuales
- [x] **Manejo de Errores** - Recuperación automática
- [x] **Tema Oscuro Corregido** - Panel de filtros funcional
- [x] **Accesibilidad** - Aria-labels y navegación por teclado
- [x] **Responsive Design** - Optimizado para todos los dispositivos
- [x] **SSR Compatible** - Server-Side Rendering

### 📋 **Funcionalidades Futuras**
- [ ] **Carrito de Compras** - Gestión de productos seleccionados
- [ ] **Sistema de Pagos** - Integración con pasarelas de pago
- [ ] **Panel de Administración** - Gestión de productos y usuarios
- [ ] **Búsqueda Avanzada** - Filtros y búsqueda por texto
- [ ] **Notificaciones** - Sistema de alertas y notificaciones
- [ ] **PWA** - Progressive Web App
- [ ] **Internacionalización** - Soporte multiidioma
- [ ] **Favoritos** - Lista de productos favoritos
- [ ] **Historial de Compras** - Seguimiento de pedidos

## 🐛 Solución de Problemas

### **Tema Oscuro no funciona**
- Verificar que el servicio de tema esté inyectado correctamente
- Comprobar que las clases `dark:` estén aplicadas
- Revisar la configuración de Tailwind CSS v4

### **Productos no cargan**
- Verificar conexión a internet
- Comprobar que FakeStore API esté disponible
- Revisar la consola del navegador para errores

### **Filtros no funcionan**
- Verificar que FormsModule esté importado
- Comprobar que los métodos de filtrado estén implementados
- Revisar la lógica de cache de datos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

**Desarrollado con ❤️ usando Angular 17 y Tailwind CSS v4**
