# Documentación del Proyecto "excalidraw-clone"

## 1. Introducción

### Descripción del Proyecto
"excalidraw-clone" es un clon de Excalidraw desarrollado con React y TypeScript. Utiliza la librería Rough.js para proporcionar un estilo de dibujo a mano alzada. Este proyecto fue creado con fines educativos para aprender y practicar el desarrollo de aplicaciones con React y TypeScript.

### Tecnologías Utilizadas
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React-DOM**: Paquete que proporciona métodos específicos del DOM para React.
- **Rough.js**: Librería para crear gráficos con un estilo de dibujo a mano alzada.
- **Zustand**: Biblioteca de gestión de estado para React.
- **@types/react**: Tipos TypeScript para React.
- **@types/react-dom**: Tipos TypeScript para React-DOM.
- **@typescript-eslint/eslint-plugin**: Plugin ESLint para TypeScript.
- **@typescript-eslint/parser**: Parser ESLint para TypeScript.
- **@vitejs/plugin-react-swc**: Plugin Vite para React con SWC.
- **eslint**: Herramienta para identificar y reportar patrones en JavaScript.
- **eslint-plugin-react-hooks**: Plugin ESLint para reglas de hooks de React.
- **eslint-plugin-react-refresh**: Plugin ESLint para React Refresh.
- **typescript**: Lenguaje de programación que es un superconjunto tipado de JavaScript.
- **vite**: Herramienta de construcción rápida para aplicaciones web modernas.
- **vite-tsconfig-paths**: Plugin Vite para soportar rutas de tsconfig.

## 2. Instalación

### Requisitos Previos
- **Node.js**: Versión 14 o superior.
- **npm** o **yarn**: Gestores de paquetes de Node.js.

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
El proyecto sigue una estructura de directorios típica para aplicaciones React:
- **src**: Contiene el código fuente de la aplicación.
  - **components**: Componentes reutilizables.
  - **hooks**: Hooks personalizados.
  - **store**: Gestión de estado con Zustand.
  - **utils**: Funciones utilitarias.
- **public**: Contiene archivos estáticos como `index.html`.
- **.eslintrc.cjs**: Configuración de ESLint.
- **.gitignore**: Archivos y directorios ignorados por Git.
- **package.json**: Configuración del proyecto y dependencias.
- **README.md**: Documentación del proyecto.

### Componentes Principales
- **App.tsx**: Componente principal de la aplicación.
- **Canvas.tsx**: Componente que maneja el lienzo de dibujo.
- **Tools.tsx**: Componente que muestra las herramientas de dibujo.
- **IconEllipse.tsx**, **IconLine.tsx**, **IconPan.tsx**, **IconRectangle.tsx**, **IconSelect.tsx**: Componentes de iconos para las herramientas de dibujo.

## 4. Guía de Uso

### Navegación por la Aplicación
La aplicación permite dibujar en un lienzo utilizando diferentes herramientas. Las herramientas disponibles son:
- **Pan**: Mover el lienzo.
- **Select**: Seleccionar elementos.
- **Rectangle**: Dibujar un rectángulo.
- **Line**: Dibujar una línea.

### Capturas de Pantalla
![Captura de Pantalla](ruta/a/la/captura.png)

## 5. Desarrollo

### Configuración del Entorno de Desarrollo
1. Instalar Node.js y npm.
2. Clonar el repositorio y navegar al directorio del proyecto.
3. Instalar dependencias con `npm install`.
4. Ejecutar la aplicación en modo de desarrollo con `npm run dev`.

### Scripts de npm
- **dev**: Ejecuta la aplicación en modo de desarrollo.
- **build**: Compila la aplicación para producción.
- **lint**: Ejecuta ESLint para verificar el código.
- **preview**: Previsualiza la aplicación compilada.

## 6. Componentes y Páginas

### Descripción de Componentes
- **App.tsx**: Componente principal que renderiza los componentes `Tools` y `Canvas`.
- **Canvas.tsx**: Componente que maneja el lienzo de dibujo y los eventos del mouse.
- **Tools.tsx**: Componente que muestra las herramientas de dibujo y maneja la selección de herramientas.
- **IconEllipse.tsx**, **IconLine.tsx**, **IconPan.tsx**, **IconRectangle.tsx**, **IconSelect.tsx**: Componentes de iconos para las herramientas de dibujo.

### Páginas
La aplicación no tiene múltiples páginas, sino que es una aplicación de una sola página (SPA) que renderiza el componente `App`.

## 7. Estilos y Temas

### Sistema de Estilos
Los estilos se manejan utilizando archivos CSS y CSS modules. El archivo principal de estilos es `index.css` y `App.css`.

### Temas
La aplicación no implementa temas dinámicos.

## 8. Gestión del Estado

### Contexto o Redux
La gestión del estado se realiza utilizando Zustand. El archivo `toolsStore.ts` contiene la configuración del estado global.

### Hooks Personalizados
- **useCanvas.ts**: Hook personalizado para manejar el estado y los eventos del lienzo de dibujo.
- **useCurrentTool.ts**: Hook personalizado para manejar la herramienta de dibujo actual.

## 9. API y Servicios

### Interacción con APIs
La aplicación no realiza llamadas a APIs externas.

## 10. Pruebas

### Pruebas Unitarias y de Integración
La aplicación no incluye pruebas unitarias o de integración.

### Cobertura de Pruebas
No se han configurado herramientas para verificar la cobertura de las pruebas.

## 11. Despliegue

### Procesos de Construcción y Despliegue
1. Compilar la aplicación para producción:
   ```bash
   npm run build
   ```
2. Desplegar la aplicación en un servidor web.

## 12. Contribución

### Guía para Contribuidores
1. Fork el repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

### Roadmap
- Añadir más herramientas de dibujo.
- Implementar guardado y carga de dibujos.
- Mejorar la interfaz de usuario.

## 13. FAQ

### Preguntas Frecuentes
- **¿Cómo cambio la herramienta de dibujo?**
  - Puedes cambiar la herramienta de dibujo utilizando los botones en la barra de herramientas o presionando las teclas numéricas (1-4).

## 14. Contactos

### Equipo de Desarrollo
- **Nombre**: [Tu Nombre]
- **Email**: [tu-email@example.com]
- **GitHub**: [tu-usuario](https://github.com/tu-usuario)

---

Esta documentación proporciona una visión general del proyecto "excalidraw-clone" y cómo utilizarlo, desarrollarlo y contribuir a él.