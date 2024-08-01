# Documentación del Proyecto "joke-generator-hackathon"

## 1. Introducción

### Descripción del Proyecto
Jokes Generator es una página que genera chistes aleatorios en inglés. Fue creada para participar en la hackathon del dev. Su principal atractivo es el frontend, el cual tratamos de hacerlo lo más hermoso y original posible.

### Tecnologías Utilizadas
- Astro
- React
- TypeScript
- ESLint
- Prettier
- Vercel (para despliegue)

## 2. Instalación

### Requisitos Previos
- Node.js
- npm

### Pasos de Instalación
1. Clonar el repositorio:
   ```sh
   $ git clone https://github.com/Ye1der/Routine-Editor.git
   ```
2. Ubicarse en la raíz del repositorio y ejecutar los siguientes comandos:
   ```sh
   $ npm install
   ```
   ```sh
   $ npm run dev
   ```

## 3. Estructura del Proyecto

### Descripción General
El proyecto está organizado en varios directorios y archivos principales:
- `.env.example`: Archivo de ejemplo para variables de entorno.
- `.eslintignore`, `.eslintrc.cjs`, `.prettierignore`, `.prettierrc`: Configuraciones para ESLint y Prettier.
- `.gitignore`: Archivos y directorios ignorados por Git.
- `package.json`: Dependencias y scripts del proyecto.
- `astro.config.mjs`: Configuración de Astro.
- `src/`: Directorio principal de código fuente.
- `components/`: Componentes de Astro y React.
- `icons/`: Iconos utilizados en la aplicación.
- `styles/`: Estilos CSS.
- `utils/`: Utilidades y funciones auxiliares.

### Componentes Principales
- `Card.astro`: Componente de tarjeta con animaciones.
- `Footer.astro`: Pie de página con información de los desarrolladores.
- `Header.astro`: Encabezado de la página.
- `JokeCard.tsx`: Componente de React que muestra y genera chistes.
- `Layout.astro`: Plantilla principal del layout de la aplicación.

## 4. Guía de Uso

### Navegación por la Aplicación
La aplicación es sencilla de usar. Al cargar la página, se muestra un chiste aleatorio. Puedes generar un nuevo chiste haciendo clic en el botón "Generate".

### Capturas de Pantalla
![Captura de Pantalla](URL_DE_LA_CAPTURA)

## 5. Desarrollo

### Configuración del Entorno de Desarrollo
1. Clonar el repositorio.
2. Instalar las dependencias con `npm install`.
3. Ejecutar el servidor de desarrollo con `npm run dev`.

### Scripts de npm
- `dev`: Inicia el servidor de desarrollo.
- `start`: Inicia el servidor de desarrollo.
- `build`: Construye la aplicación para producción.
- `preview`: Previsualiza la aplicación construida.
- `astro`: Ejecuta comandos de Astro.

## 6. Componentes y Páginas

### Descripción de Componentes
- `Card.astro`: Componente de tarjeta con animaciones.
- `Footer.astro`: Pie de página con información de los desarrolladores.
- `Header.astro`: Encabezado de la página.
- `JokeCard.tsx`: Componente de React que muestra y genera chistes.
- `Layout.astro`: Plantilla principal del layout de la aplicación.

### Páginas
- `index.astro`: Página principal que muestra el generador de chistes.

## 7. Estilos y Temas

### Sistema de Estilos
Los estilos se gestionan utilizando CSS en los componentes de Astro y en archivos CSS separados.

### Temas
No se implementan temas específicos en esta versión.

## 8. Gestión del Estado

### Contexto o Redux
La gestión del estado se realiza utilizando el estado local de React (`useState`).

### Hooks Personalizados
- `writtingEffect`: Hook personalizado para el efecto de escritura del chiste.

## 9. API y Servicios

### Interacción con APIs
La aplicación realiza llamadas a una API de chistes para obtener chistes aleatorios. La URL de la API se configura en las variables de entorno (`API_JOKE`).

## 10. Pruebas

### Pruebas Unitarias y de Integración
No se incluyen pruebas en esta versión del proyecto.

### Cobertura de Pruebas
No se incluyen herramientas de cobertura de pruebas en esta versión.

## 11. Despliegue

### Procesos de Construcción y Despliegue
1. Construir la aplicación con `npm run build`.
2. Desplegar la aplicación en Vercel utilizando la configuración de `astro.config.mjs`.

## 12. Contribución

### Guía para Contribuidores
1. Haz un fork del repositorio.
2. Crea una nueva rama con los cambios o arreglos que quieras realizar:
   ```sh
   $ git switch -c nombre-de-la-rama
   ```
3. Realiza tus commits con los cambios.
4. Abre una pull request para fusionar tus cambios con la rama principal.

### Roadmap
- Añadir más funcionalidades al generador de chistes.
- Mejorar la interfaz de usuario.
- Implementar pruebas unitarias y de integración.

## 13. FAQ

### Preguntas Frecuentes
- **¿Cómo puedo contribuir al proyecto?**
  - Sigue la guía de contribución en la sección 12.
- **¿Qué tecnologías se utilizan en el proyecto?**
  - Astro, React, TypeScript, entre otras.

## 14. Contactos

### Equipo de Desarrollo
- Yeider: [GitHub](https://github.com/Ye1der)
- Nicolas: [GitHub](https://github.com/nicothomas1201)

---

Esta documentación proporciona una visión general del proyecto "joke-generator-hackathon" y cómo contribuir a él. Si tienes alguna pregunta adicional, no dudes en contactarnos.