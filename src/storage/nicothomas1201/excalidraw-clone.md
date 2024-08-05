# Documentación del Proyecto "excalidraw-clone"

## 1. Introducción

### Descripción del Proyecto
"excalidraw-clone" es un clon de Excalidraw desarrollado con React y TypeScript. Utiliza Rough.js para el estilo de dibujo a mano alzada. Este proyecto fue creado con fines educativos.

### Tecnologías Utilizadas
- React
- React-DOM
- Rough.js
- Zustand
- @types/react
- @types/react-dom
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- @vitejs/plugin-react-swc
- ESLint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- TypeScript
- Vite
- vite-tsconfig-paths

## 2. Instalación

### Requisitos Previos
- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn (versión 1.22 o superior)

### Pasos de Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/excalidraw-clone.git
   cd excalidraw-clone
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar la aplicación en modo de desarrollo:
   ```bash
   npm run dev
   ```

## 3. Estructura del Proyecto

### Descripción General
El proyecto está estructurado en varios directorios y archivos principales:
- `src/`: Contiene el código fuente de la aplicación.
- `public/`: Contiene archivos estáticos como `index.html`.
- `.eslintrc.cjs`: Configuración de ESLint.
- `.gitignore`: Archivos y directorios ignorados por Git.
- `package.json`: Dependencias y scripts del proyecto.
- `README.md`: Documentación del proyecto.

### Componentes Principales
- `App.tsx`: Componente principal de la aplicación.
- `Canvas.tsx`: Componente que maneja el lienzo de dibujo.
- `Tools.tsx`: Componente que maneja las herramientas de dibujo.
- `useCanvas.ts`: Hook personalizado para manejar la lógica del lienzo.
- `useCurrentTool.ts`: Hook personalizado para manejar la herramienta actual.

## 4. Guía de Uso

### Navegación por la Aplicación
La aplicación permite mover el lienzo, hacer zoom, dibujar rectángulos y líneas, y redimensionar elementos.
- **Zoom**: Utiliza la rueda del mouse para hacer zoom.
- **Pan**: Presiona la tecla `Alt` y haz clic y arrastra para mover el lienzo.
- **Cambio de Herramienta**: Utiliza las teclas numéricas para cambiar de herramienta:
  - `1`: Pan
  - `2`: Seleccionar
  - `3`: Rectángulo
  - `4`: Línea

### Capturas de Pantalla
![Captura de Pantalla](ruta/a/la/captura.png)

## 5. Desarrollo

### Configuración del Entorno de Desarrollo
1. Asegúrate de tener Node.js y npm instalados.
2. Clona el repositorio y navega al directorio del proyecto.
3. Instala las dependencias con `npm install`.
4. Ejecuta la aplicación en modo de desarrollo con `npm run dev`.

### Scripts de npm
- `dev`: Ejecuta la aplicación en modo de desarrollo.
- `build`: Compila la aplicación para producción.
- `lint`: Ejecuta ESLint para verificar el código.
- `preview`: Previsualiza la aplicación compilada.

## 6. Componentes y Páginas

### Descripción de Componentes
- `App.tsx`: Componente principal que renderiza `Tools` y `Canvas`.
- `Canvas.tsx`: Componente que maneja el lienzo de dibujo.
- `Tools.tsx`: Componente que maneja las herramientas de dibujo.
- `IconEllipse.tsx`, `IconLine.tsx`, `IconPan.tsx`, `IconRectangle.tsx`, `IconSelect.tsx`: Componentes de iconos para las herramientas.

### Páginas
La aplicación no tiene múltiples páginas, sino que se centra en una única interfaz de usuario para dibujar.

## 7. Estilos y Temas

### Sistema de Estilos
Los estilos se manejan principalmente con CSS modules y archivos CSS.
- `App.css`: Estilos para el contenedor de herramientas.
- `index.css`: Estilos globales para la aplicación.

### Temas
La aplicación no implementa temas dinámicos.

## 8. Gestión del Estado

### Contexto o Redux
La gestión del estado se realiza utilizando Zustand.

### Hooks Personalizados
- `useCanvas.ts`: Hook para manejar la lógica del lienzo.
- `useCurrentTool.ts`: Hook para manejar la herramienta actual.

## 9. API y Servicios

### Interacción con APIs
La aplicación no interactúa con APIs externas.

## 10. Pruebas

### Pruebas Unitarias y de Integración
El proyecto no incluye pruebas unitarias o de integración.

### Cobertura de Pruebas
No se utilizan herramientas de cobertura de pruebas.

## 11. Despliegue

### Procesos de Construcción y Despliegue
1. Compila la aplicación con `npm run build`.
2. Despliega los archivos generados en el servidor de tu elección.

## 12. Contribución

### Guía para Contribuidores
1. Clona el repositorio y crea una nueva rama para tu contribución.
2. Realiza tus cambios y asegúrate de que el código cumple con las reglas de estilo.
3. Ejecuta `npm run lint` para verificar el código.
4. Crea un pull request con una descripción clara de tus cambios.

### Roadmap
- Mejorar la interfaz de usuario.
- Añadir más herramientas de dibujo.
- Implementar pruebas unitarias y de integración.

## 13. FAQ

### Preguntas Frecuentes
- **¿Cómo puedo cambiar de herramienta?**
  Utiliza las teclas numéricas (1, 2, 3, 4) para cambiar de herramienta.

- **¿Cómo puedo mover el lienzo?**
  Presiona la tecla `Alt` y haz clic y arrastra para mover el lienzo.

## 14. Contactos

### Equipo de Desarrollo
Para cualquier pregunta o soporte, por favor contacta a [tu-correo@example.com].

---

Esta documentación proporciona una visión general del proyecto "excalidraw-clone", incluyendo su estructura, componentes, estilos, gestión del estado, y guías de uso y desarrollo.