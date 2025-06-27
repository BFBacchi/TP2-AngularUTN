# 🛍️ Mi Aplicación Angular - TP1

Una aplicación web moderna construida con **Angular 17** y **Tailwind CSS v4** que incluye un catálogo de productos, sistema de autenticación y cambio de tema dinámico.

## 🚀 Características

### ✨ **Funcionalidades Principales**
- **🏠 Página de Inicio** - Landing page con estadísticas y características
- **📦 Catálogo de Productos** - Grid responsive con filtros y paginación
- **🔍 Detalle de Productos** - Vista detallada con características y galería
- **🔐 Sistema de Autenticación** - Login y registro con validaciones
- **🌙 Tema Dinámico** - Cambio entre modo claro y oscuro
- **📱 Diseño Responsive** - Optimizado para todos los dispositivos

### 🎨 **Sistema de Tema**
- **Botón de cambio de tema** en el header
- **Detección automática** de preferencia del sistema
- **Persistencia** en localStorage
- **Transiciones suaves** entre temas
- **Compatibilidad SSR** con Angular Universal

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: Angular 17 (Standalone Components)
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite (Angular CLI)
- **Package Manager**: npm
- **Language**: TypeScript
- **State Management**: RxJS BehaviorSubject

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
│   │   │   ├── catalogo/       # Catálogo de productos
│   │   │   ├── detalle/        # Detalle de productos
│   │   │   ├── login/          # Formulario de login
│   │   │   └── registro/       # Formulario de registro
│   │   ├── services/
│   │   │   ├── producto.service.ts    # Gestión de productos
│   │   │   └── theme.service.ts       # Gestión de tema
│   │   ├── app.component.ts    # Componente principal
│   │   ├── app.component.html  # Template principal
│   │   └── app.routes.ts       # Configuración de rutas
│   ├── styles.css              # Estilos globales
│   └── main.ts                 # Punto de entrada
├── .postcssrc.json             # Configuración PostCSS
└── package.json                # Dependencias del proyecto
```

## 🎯 Componentes Principales

### **App Component**
- Layout principal con header, navegación y footer
- Sistema de rutas con `router-outlet`
- Botón de cambio de tema

### **Home Component**
- Página de bienvenida con estadísticas
- Sección de características destacadas
- Diseño con gradientes y animaciones

### **Catálogo Component**
- Grid responsive de productos
- Filtros por categoría y ordenamiento
- Paginación
- Enlaces a detalle de productos

### **Detalle Component**
- Vista completa del producto seleccionado
- Galería de imágenes
- Características y especificaciones
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

## 📋 Funcionalidades Futuras

- [ ] **Carrito de Compras** - Gestión de productos seleccionados
- [ ] **Sistema de Pagos** - Integración con pasarelas de pago
- [ ] **Panel de Administración** - Gestión de productos y usuarios
- [ ] **Búsqueda Avanzada** - Filtros y búsqueda por texto
- [ ] **Notificaciones** - Sistema de alertas y notificaciones
- [ ] **PWA** - Progressive Web App
- [ ] **Internacionalización** - Soporte multiidioma

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- Email: tu.email@ejemplo.com
- LinkedIn: [Tu LinkedIn](https://linkedin.com/in/tu-perfil)
- GitHub: [@tu-usuario](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- **Angular Team** por el framework
- **Tailwind CSS** por el sistema de diseño
- **Heroicons** por los iconos
- **Comunidad Angular** por el soporte

---

⭐ **¡Si te gusta este proyecto, dale una estrella!**
