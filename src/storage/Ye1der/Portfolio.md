 
 # Introducción

## Descripción del Proyecto

Portafolio web hecho en Next.js es un proyecto diseñado para mostrar el trabajo y habilidades de un desarrollador o diseñador. Utiliza una combinación de tecnologías modernas para ofrecer una experiencia de usuario fluida y atractiva.

## Tecnologías Utilizadas

### Lucide-React
Lucide-React es una biblioteca de iconos que proporciona una amplia variedad de iconos SVG que se pueden utilizar en proyectos de React. En este proyecto, se utiliza para mejorar la interfaz de usuario con iconos visualmente atractivos y escalables.

### Next.js
Next.js es un framework de React que permite la creación de aplicaciones web de alto rendimiento. En este proyecto, se utiliza para manejar el enrutamiento, el renderizado del lado del servidor (SSR) y la generación de sitios estáticos (SSG), lo que mejora la velocidad y la eficiencia de la aplicación.

### React y React-DOM
React es una biblioteca de JavaScript para construir interfaces de usuario. React-DOM es el paquete que permite a React interactuar con el DOM. En este proyecto, se utilizan para construir componentes reutilizables y manejar el estado de la aplicación.

### @types/node, @types/react, @types/react-dom
Estos paquetes proporcionan definiciones de tipos para Node.js, React y React-DOM, respectivamente. En este proyecto, se utilizan para mejorar la experiencia de desarrollo con TypeScript, proporcionando autocompletado y verificación de tipos.

### ESLint y eslint-config-next
ESLint es una herramienta para identificar y reportar patrones en el código JavaScript. eslint-config-next es una configuración de ESLint específica para proyectos de Next.js. En este proyecto, se utilizan para mantener la calidad del código y asegurar que se sigan las mejores prácticas de desarrollo.

### PostCSS y TailwindCSS
PostCSS es una herramienta para transformar CSS con plugins de JavaScript. TailwindCSS es un framework de utilidades CSS que permite construir interfaces de usuario rápidamente. En este proyecto, se utilizan para estilizar la aplicación de manera eficiente y mantenible.

### TypeScript
TypeScript es un superconjunto de JavaScript que añade tipos estáticos. En este proyecto, se utiliza para mejorar la robustez del código y facilitar el mantenimiento a largo plazo.

## Scripts en package.json

### dev
El script `dev` se utiliza para iniciar el servidor de desarrollo de Next.js. Este script permite a los desarrolladores ver los cambios en tiempo real mientras trabajan en el proyecto.

```bash
npm run dev
```

### build
El script `build` se utiliza para compilar la aplicación para producción. Este script genera una versión optimizada de la aplicación que puede ser desplegada en un servidor.

```bash
npm run build
```

### start
El script `start` se utiliza para iniciar el servidor de producción de Next.js. Este script sirve la aplicación compilada y optimizada.

```bash
npm run start
```

### lint
El script `lint` se utiliza para ejecutar ESLint en el proyecto. Este script verifica el código en busca de errores y problemas de estilo, ayudando a mantener la calidad del código.

```bash
npm run lint
```

Esta documentación proporciona una visión general del proyecto Portafolio web hecho en Next.js, detallando las tecnologías utilizadas y los scripts disponibles en el `package.json`. 
 # Estructura

```
project-root/
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── .vscode/
    │   └── settings.json
    ├── README.md
    ├── animation.html
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── styles/
    │   │   ├── button.module.css
    │   │   └── navbar.css
    │   └── ui/
    │       ├── Aboutme.tsx
    │       ├── Button.tsx
    │       ├── Logo.tsx
    │       ├── Navbar.tsx
    │       ├── Presentation.tsx
    │       ├── Project.tsx
    │       ├── Projects.tsx
    │       ├── Skills.tsx
    │       └── Socials.tsx
    ├── next.config.mjs
    ├── postcss.config.mjs
    ├── public/
    │   ├── logos/
    │   │   └── linux_files/
    │   │       └── vips-properties.xml
    │   └── utils/
    │       ├── navIntObs.js
    │       └── toggleTheme.js
    └── tsconfig.json
```

# Archivos

- **.eslintrc.json**: Configuración de ESLint para el proyecto. ESLint es una herramienta para identificar y reportar patrones en JavaScript.
- **.gitignore**: Archivo que especifica los archivos y directorios que Git debe ignorar.
- **.prettierignore**: Archivo que especifica los archivos y directorios que Prettier debe ignorar. Prettier es una herramienta de formateo de código.
- **.prettierrc**: Configuración de Prettier para el proyecto.
- **.vscode/settings.json**: Configuración específica de Visual Studio Code para el proyecto.
- **README.md**: Archivo de documentación principal del proyecto, generalmente contiene información sobre cómo configurar, usar y contribuir al proyecto.
- **animation.html**: Archivo HTML que probablemente contiene animaciones o efectos visuales.
- **app/**: Directorio que contiene la aplicación principal.
  - **globals.css**: Archivo de estilos globales para la aplicación.
  - **layout.tsx**: Componente de diseño principal de la aplicación.
  - **page.tsx**: Componente de página principal de la aplicación.
  - **styles/**: Directorio que contiene archivos de estilos específicos.
    - **button.module.css**: Estilos específicos para botones.
    - **navbar.css**: Estilos específicos para la barra de navegación.
  - **ui/**: Directorio que contiene componentes de la interfaz de usuario.
    - **Aboutme.tsx**: Componente que muestra información sobre el autor.
    - **Button.tsx**: Componente de botón.
    - **Logo.tsx**: Componente de logo.
    - **Navbar.tsx**: Componente de barra de navegación.
    - **Presentation.tsx**: Componente de presentación.
    - **Project.tsx**: Componente de proyecto individual.
    - **Projects.tsx**: Componente que lista los proyectos.
    - **Skills.tsx**: Componente que muestra las habilidades del autor.
    - **Socials.tsx**: Componente que muestra enlaces a redes sociales.
- **next.config.mjs**: Configuración de Next.js para el proyecto.
- **postcss.config.mjs**: Configuración de PostCSS para el proyecto. PostCSS es una herramienta para transformar CSS con plugins de JavaScript.
- **public/**: Directorio que contiene archivos estáticos que se sirven directamente.
  - **logos/**: Directorio que contiene logos.
    - **linux_files/vips-properties.xml**: Archivo de propiedades específico para Linux.
  - **utils/**: Directorio que contiene utilidades.
    - **navIntObs.js**: Script de observación de intersección de navegación.
    - **toggleTheme.js**: Script para cambiar el tema de la aplicación.
- **tsconfig.json**: Configuración de TypeScript para el proyecto. 
 ## README.md

El archivo `README.md` es un documento de texto en formato Markdown que proporciona información sobre un proyecto de Next.js. Este proyecto fue creado utilizando la herramienta `create-next-app`.

### Getting Started

Esta sección explica cómo iniciar el servidor de desarrollo del proyecto. Se pueden usar diferentes gestores de paquetes para ejecutar el servidor:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Después de ejecutar uno de estos comandos, se puede abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver el resultado.

### Editing the Page

Se puede empezar a editar la página modificando el archivo `app/page.tsx`. Este archivo se actualiza automáticamente mientras se edita.

### Font Optimization

Este proyecto utiliza la librería `next/font` para optimizar y cargar automáticamente la fuente Inter de Google Fonts.

### Learn More

Esta sección proporciona recursos adicionales para aprender más sobre Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - Documentación oficial de Next.js.
- [Learn Next.js](https://nextjs.org/learn) - Tutorial interactivo de Next.js.

### Deploy on Vercel

La forma más sencilla de desplegar una aplicación Next.js es utilizando la [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Vercel es la plataforma creada por los desarrolladores de Next.js.

Para más detalles, se puede consultar la [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment).

## animation.html

El archivo `animation.html` es un documento HTML que implementa una transición de clip-path en un círculo para cambiar entre el modo claro y el modo oscuro.

### HTML Structure

El archivo HTML tiene una estructura básica con un `<head>` y un `<body>`. En el `<head>`, se definen los estilos CSS y en el `<body>`, se incluye el contenido y un botón para alternar entre los modos claro y oscuro.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Circle ClipPath Transition</title>
  <style>
    /* Estilos CSS */
  </style>
</head>
<body>
  <div class="content">Hello, World!</div>
  <button class="toggle-button" id="toggleButton">Toggle Dark Mode</button>

  <script>
    /* JavaScript */
  </script>
</body>
</html>
```

### CSS Styles

Los estilos CSS definen variables para los colores de fondo y texto en los modos claro y oscuro. También se definen estilos para el contenido y el botón de alternancia.

```css
:root {
  --bg-color-light: white;
  --bg-color-dark: black;
  --text-color-light: black;
  --text-color-dark: white;
}

body {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color-light);
  color: var(--text-color-light);
  transition: background-color 0.3s, color 0.3s;
  font-family: sans-serif;
  font-weight: 700;
}

.content {
  font-size: 2rem;
}

.toggle-button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-family: sans-serif;
  background-color: #111;
  color: white;
}

body.dark {
  background-color: var(--bg-color-dark);
  color: var(--text-color-dark);

  .toggle-button {
    background-color: white;
    color: black;
  }
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
```

### JavaScript

El script JavaScript maneja la lógica para alternar entre los modos claro y oscuro. Utiliza la API experimental `startViewTransition` para realizar la transición de clip-path.

```javascript
const toggleButton = document.getElementById('toggleButton');
let isDark = false;

function nextTick() {
  return new Promise(resolve => setTimeout(resolve, 0));
}

toggleButton.addEventListener('click', async (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )}px at ${x}px ${y}px)`
  ];

  // Start view transition
  // @ts-expect-error Missing types as it's experimental
  await document.startViewTransition(async () => {
    isDark = !isDark;
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.type = 'text/css';

    const css = `
      ::view-transition-old(root),
      .dark ::view-transition-new(root) {
        z-index: ${isDark ? 9999 : 1};
      }

      ::view-transition-new(root),
      .dark ::view-transition-old(root) {
        z-index: ${isDark ? 1 : 9999};
      }
    `;

    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css)); // Otros navegadores
    }

    head.appendChild(style);

    document.body.classList.toggle('dark', isDark)
    await nextTick()
  }).ready

  // Animate the clip path
  document.documentElement.animate(
    { clipPath: isDark ? clipPath.reverse() : clipPath },
    {
      duration: 500,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark ? 'old' : 'new'}(root)`
    }
  );
});
```

### Explicación de la API `startViewTransition`

La API `startViewTransition` es una API experimental que permite realizar transiciones de vista en la página. En este caso, se utiliza para realizar una transición de clip-path en un círculo que se expande desde el punto donde se hizo clic en el botón.

### Librerías Utilizadas

En este archivo no se utilizan librerías externas. Todo el código es nativo de HTML, CSS y JavaScript. 
 ## layout.tsx

El archivo `layout.tsx` define la estructura básica de la aplicación. Este archivo es fundamental porque establece el esqueleto HTML y aplica estilos globales y configuraciones iniciales.

### Importaciones

```typescript
import './globals.css'
import { poppins } from './ui/fonts'
```

- `'./globals.css'`: Importa los estilos globales de la aplicación.
- `{ poppins } from './ui/fonts'`: Importa la fuente `poppins` desde el archivo `fonts`.

### Definición del Componente `RootLayout`

```typescript
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" />
        <title> Yeider Portfolio </title>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (typeof window != 'undefined') {
              if (localStorage.getItem('theme') === 'light') {
                document.querySelector('html').classList.remove('dark')
              } else {
                document.querySelector('html').classList.add('dark')
              }
            }`
          }}
        />
      </head>
      <body
        className={`${poppins.className} flex flex-col justify-center items-center dark:text-white text-black`}
      >
        {children}
      </body>
    </html>
  )
}
```

- `RootLayout`: Es un componente funcional que recibe `children` como propiedad.
- `<html lang="es">`: Define el idioma del documento HTML como español.
- `<head>`: Contiene metadatos y scripts.
  - `<link rel="icon" href="/favicon.png" />`: Define el icono de la página.
  - `<title> Yeider Portfolio </title>`: Establece el título de la página.
  - `<script>`: Contiene un script que verifica el tema almacenado en `localStorage` y aplica la clase `dark` o la elimina según corresponda.
- `<body>`: Contiene el contenido principal de la página.
  - `className={`${poppins.className} flex flex-col justify-center items-center dark:text-white text-black`}`: Aplica la fuente `poppins` y estilos de Tailwind CSS para centrar el contenido y cambiar el color del texto según el tema.
  - `{children}`: Renderiza los componentes hijos pasados a `RootLayout`.

## page.tsx

El archivo `page.tsx` define la página principal de la aplicación. Esta página incluye varios componentes que representan diferentes secciones del portafolio.

### Importaciones

```typescript
import { Presentation } from './ui/Presentation'
import { Skills } from './ui/Skills'
import { Projects } from './ui/Projects'
import { Socials } from './ui/Socials'
import { Navbar } from './ui/Navbar'
import { Aboutme } from './ui/Aboutme'
```

- `{ Presentation } from './ui/Presentation'`: Importa el componente `Presentation`.
- `{ Skills } from './ui/Skills'`: Importa el componente `Skills`.
- `{ Projects } from './ui/Projects'`: Importa el componente `Projects`.
- `{ Socials } from './ui/Socials'`: Importa el componente `Socials`.
- `{ Navbar } from './ui/Navbar'`: Importa el componente `Navbar`.
- `{ Aboutme } from './ui/Aboutme'`: Importa el componente `Aboutme`.

### Definición del Componente `Home`

```typescript
export default function Home() {
  return (
    <main className="mt-32 pb-40 max-lg:flex max-lg:flex-col max-lg:items-center">
      <Navbar />

      <Presentation />

      <Projects />

      <Skills />

      <Socials />

      <Aboutme />
    </main>
  )
}
```

- `Home`: Es un componente funcional que define la estructura de la página principal.
- `<main className="mt-32 pb-40 max-lg:flex max-lg:flex-col max-lg:items-center">`: Define el contenedor principal con estilos de Tailwind CSS para margen superior, padding inferior y alineación centrada en dispositivos pequeños.
- `<Navbar />`: Renderiza el componente `Navbar`.
- `<Presentation />`: Renderiza el componente `Presentation`.
- `<Projects />`: Renderiza el componente `Projects`.
- `<Skills />`: Renderiza el componente `Skills`.
- `<Socials />`: Renderiza el componente `Socials`.
- `<Aboutme />`: Renderiza el componente `Aboutme`.

## [object Object]

El archivo `[object Object]` no proporciona información suficiente para una explicación detallada. Si tienes más detalles sobre este archivo, por favor proporciona el contenido para que pueda explicarlo adecuadamente. 
 ## navbar.css

### Descripción General
Este archivo contiene estilos CSS para la barra de navegación (navbar) de una aplicación web. Los estilos incluyen configuraciones para la barra de navegación en general, los enlaces de navegación (`.navlink`), y estilos específicos para el modo oscuro (`.dark`). También se definen animaciones para cambiar el fondo de la barra de navegación según el desplazamiento de la página.

### Bloques de Código

#### Estilos para la Barra de Navegación
```css
nav {
  padding: 10px 20px;
  border-radius: 15px;
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
  backdrop-filter: blur(10px);
  z-index: 10;
  animation: showBackground auto linear;
  animation-timeline: scroll(root block);
}
```
- **padding**: Añade espacio interno alrededor del contenido de la barra de navegación.
- **border-radius**: Redondea las esquinas de la barra de navegación.
- **position**: Fija la barra de navegación en la parte superior de la página.
- **top y left**: Posiciona la barra de navegación en el centro de la parte superior de la página.
- **transform**: Centra la barra de navegación horizontalmente.
- **display**: Organiza los elementos dentro de la barra de navegación en una fila.
- **gap**: Añade espacio entre los elementos dentro de la barra de navegación.
- **backdrop-filter**: Aplica un efecto de desenfoque al fondo de la barra de navegación.
- **z-index**: Asegura que la barra de navegación esté por encima de otros elementos.
- **animation**: Aplica una animación para cambiar el fondo de la barra de navegación según el desplazamiento de la página.

#### Estilos para los Enlaces de Navegación
```css
.navlink {
  transition: color;
  transition-duration: 0.1s;
  font-size: 14px;
  white-space: nowrap;

  &.active {
    color: #d940ff;
  }

  &:hover {
    color: #d940ff;
  }
}
```
- **transition**: Anima el cambio de color del enlace.
- **transition-duration**: Define la duración de la animación.
- **font-size**: Establece el tamaño de la fuente del enlace.
- **white-space**: Evita que el texto del enlace se divida en varias líneas.
- **&.active**: Cambia el color del enlace cuando está activo.
- **&:hover**: Cambia el color del enlace cuando el usuario pasa el cursor sobre él.

#### Estilos para el Modo Oscuro
```css
.dark {
  nav {
    animation: showBackgroundDark auto linear both;
    animation-timeline: scroll(root block);
  }
}
```
- **animation**: Aplica una animación específica para el modo oscuro.
- **animation-timeline**: Define la línea de tiempo de la animación según el desplazamiento de la página.

#### Animaciones
```css
@keyframes showBackgroundDark {
  0% {
    background-color: transparent;
  }

  10% {
    background-color: rgb(40, 40, 40, 0.5);
  }

  100% {
    background-color: rgb(40, 40, 40, 0.5);
  }
}

@keyframes showBackground {
  0% {
    background-color: transparent;
  }

  10% {
    background-color: rgb(220, 220, 220, 0.5);
  }

  100% {
    background-color: rgb(220, 220, 220, 0.5);
  }
}
```
- **@keyframes showBackgroundDark**: Define la animación para cambiar el fondo de la barra de navegación en el modo oscuro.
- **@keyframes showBackground**: Define la animación para cambiar el fondo de la barra de navegación en el modo claro.

#### Estilos para Pantallas Pequeñas
```css
@media (max-width: 900px) {
  nav {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    border-radius: 15px;
    background-color: rgb(10, 10, 10, 0.5);
    backdrop-filter: blur(10px);
    display: flex;
    gap: 25px;
    z-index: 10;
  }

  .navlink {
    font-weight: 500;
    transition: all;
    font-size: 13px;
    transition-duration: 0.3s;

    &.active {
      color: #d940ff;
    }

    &:hover {
      color: #d940ff;
    }
  }
}
```
- **@media (max-width: 900px)**: Aplica estilos específicos para pantallas con un ancho máximo de 900px.
- **nav**: Ajusta los estilos de la barra de navegación para pantallas pequeñas.
- **.navlink**: Ajusta los estilos de los enlaces de navegación para pantallas pequeñas.

## Aboutme.tsx

### Descripción General
Este archivo contiene un componente React llamado `Aboutme` que muestra información sobre el autor de la página. Utiliza la biblioteca `lucide-react` para iconos y `next/image` para cargar imágenes.

### Bloques de Código

#### Importaciones
```tsx
import { BookUser } from 'lucide-react'
import Image from 'next/image'
```
- **BookUser**: Importa el icono `BookUser` de la biblioteca `lucide-react`.
- **Image**: Importa el componente `Image` de la biblioteca `next/image` para cargar imágenes de manera eficiente.

#### Componente Aboutme
```tsx
export function Aboutme() {
  return (
    <section id="aboutme" className="pt-32">
      <span className="flex items-center gap-3 ">
        <h1 className="text-4xl font-semibold">Sobre mi</h1>
        <BookUser size={38} />
      </span>

      <div className="flex max-lg:flex-col gap-5 items-center max-w-[890px]">
        <div className="text-lg max-lg:w-[380px] max-lg:mt-8 text-black dark:text-white font-[500] flex flex-col gap-5 text-opacity-80">
          <p>
            Me llamo Yeider Peña y{' '}
            <span className="text-customPurple">
              me adentre en el mundo de la programación hace poco mas de 2 años
            </span>
            , desde entonces he estado empeñado en estudiar, practicar y ayudar
            a quienes también les apasiona este mundo.
          </p>

          <p>
            He cursado cuatro semestres de ingeniería en sistemas, dentro de los
            cuales he participado en varios proyectos en grupo y también{' '}
            <span className="text-customPurple">
              he dado tutorías sobre programación web y programación orientada a
              objetos con java
            </span>
            .
          </p>
        </div>

        <Image
          id="aboutmeImage"
          src={'/aboutme.avif'}
          alt="foto mia"
          width={437}
          height={571}
          className="w-[250px] rounded-2xl rotate-3"
        />
      </div>
    </section>
  )
}
```
- **section**: Define una sección con el identificador `aboutme` y aplica un margen superior.
- **span**: Contiene el título "Sobre mi" y el icono `BookUser`.
- **div**: Contiene el texto descriptivo y la imagen del autor.
  - **div (texto)**: Contiene dos párrafos con información sobre el autor.
  - **Image**: Carga la imagen del autor con estilos específicos.

### Librerías Utilizadas

#### lucide-react
- **Propósito**: Proporciona iconos SVG que se pueden utilizar en aplicaciones React.
- **Uso**: Se utiliza para mostrar el icono `BookUser` junto al título "Sobre mi".

#### next/image
- **Propósito**: Optimiza la carga de imágenes en aplicaciones Next.js.
- **Uso**: Se utiliza para cargar la imagen del autor de manera eficiente.

### Ejemplos

#### Ejemplo de Uso de `lucide-react`
```tsx
import { BookUser } from 'lucide-react'

<BookUser size={38} />
```
- **size**: Define el tamaño del icono.

#### Ejemplo de Uso de `next/image`
```tsx
import Image from 'next/image'

<Image
  id="aboutmeImage"
  src={'/aboutme.avif'}
  alt="foto mia"
  width={437}
  height={571}
  className="w-[250px] rounded-2xl rotate-3"
/>
```
- **src**: Define la ruta de la imagen.
- **alt**: Proporciona un texto alternativo para la imagen.
- **width y height**: Definen las dimensiones de la imagen.
- **className**: Aplica estilos adicionales a la imagen. 
 ## Logo.tsx

### Importaciones
```typescript
import Image from 'next/image'
```
- **Image**: Esta importación es de la librería `next/image`, que se utiliza para optimizar y mostrar imágenes en aplicaciones Next.js.

### Definición del Componente `Logo`
```typescript
export function Logo({ name }: { name: string }) {
```
- **Logo**: Este es un componente funcional que recibe una propiedad `name` de tipo `string`.

### Estructura del Componente
```typescript
return (
  <div
    className={`group bg-[#d8d8d8] dark:bg-[#111] h-[60px] w-[60px] rounded-2xl flex items-center justify-center relative`}
  >
```
- **div**: Este `div` actúa como contenedor principal del logo. Utiliza clases de Tailwind CSS para estilizar el fondo, tamaño, redondeo, alineación y posicionamiento.

### Imágenes del Logo
```typescript
<Image
  src={`/logos/${name.replace('_dark', '')}.svg`}
  alt="logo"
  width={40}
  height={40}
  className={`m-0 max-w-[32px] block max-h-[32px] ${
    name.includes('_dark') ? 'dark:hidden' : ''
  }`}
/>

<Image
  src={`/logos/${name}.svg`}
  alt="logo"
  width={40}
  height={40}
  className={`m-0 max-w-[32px] max-h-[32px] hidden ${
    name.includes('_dark') ? 'dark:block' : ''
  }`}
/>
```
- **Image**: Estos componentes `Image` muestran dos versiones del logo: una para el modo claro y otra para el modo oscuro. Utilizan clases condicionales para mostrar u ocultar las imágenes según el modo de la aplicación.

### Tooltip del Logo
```typescript
<div className="absolute flex flex-col items-center top-0 -translate-y-full -mt-1 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 duration-200">
  <p
    id="logo"
    className="z-[5] text-sm text-white dark:text-black bg-black dark:bg-white font-semibold px-2 py-[2px] rounded-lg whitespace-nowrap"
  >
    {(name[0].toUpperCase() + name.slice(1))
      .replace('dark', '')
      .replace('_', ' ')}
  </p>

  <span className="-mt-[4px] w-0 h-0 border-r-[7px] border-r-transparent border-l-[7px] border-l-transparent border-t-[10px] border-t-black dark:border-t-white"></span>
</div>
```
- **div**: Este `div` actúa como un tooltip que se muestra al pasar el ratón sobre el logo. Contiene un texto que muestra el nombre del logo y un pequeño triángulo que apunta hacia el logo.

## Navbar.tsx

### Importaciones
```typescript
import '../styles/navbar.css'
import { Moon, Sun } from 'lucide-react'
import Script from 'next/script'
```
- **navbar.css**: Este archivo CSS contiene estilos específicos para la barra de navegación.
- **Moon, Sun**: Estos son iconos de la librería `lucide-react`, que se utilizan para representar los modos oscuro y claro.
- **Script**: Esta importación es de la librería `next/script`, que se utiliza para cargar scripts externos en aplicaciones Next.js.

### Definición del Componente `Navbar`
```typescript
export function Navbar() {
```
- **Navbar**: Este es un componente funcional que representa la barra de navegación de la aplicación.

### Estructura del Componente
```typescript
return (
  <nav>
    <a className={`navlink projects`} href="#projects">
      Proyectos
    </a>
    <a className={`navlink skills`} href="#skills">
      Habilidades
    </a>
    <a className={`navlink socials`} href="#socials">
      Redes
    </a>
    <a className={`navlink aboutme`} href="#aboutme">
      Sobre mi
    </a>
    <button id="toggleTheme">
      <Moon className="hover:text-customPurple transition-colors duration-300 lg:w-[17px] max-lg:w-[15px] lg:h-[17px] max-lg:h-[15px] hidden dark:block" />
      <Sun
        size={20}
        className="hover:text-customPurple transition-colors duration-300 lg:w-[17px] max-lg:w-[15px] lg:h-[17px] max-lg:h-[15px] block dark:hidden"
      />
    </button>
    {/* script to intersection observer */}
    <Script src="/utils/navIntObs.js" strategy="lazyOnload" />
    <Script src="/utils/toggleTheme.js" strategy="lazyOnload" />
  </nav>
)
```
- **nav**: Este elemento `nav` contiene los enlaces de navegación y el botón para cambiar el tema.
- **a**: Estos elementos `a` son enlaces de navegación que llevan a diferentes secciones de la página.
- **button**: Este botón contiene los iconos `Moon` y `Sun` para cambiar entre el modo oscuro y el modo claro.
- **Script**: Estos componentes `Script` cargan scripts externos que se utilizan para la observación de intersecciones y el cambio de tema.

### Scripts Externos
```typescript
<Script src="/utils/navIntObs.js" strategy="lazyOnload" />
<Script src="/utils/toggleTheme.js" strategy="lazyOnload" />
```
- **navIntObs.js**: Este script probablemente se utiliza para observar las intersecciones de los elementos de navegación y aplicar estilos o comportamientos específicos cuando estos elementos están en la vista.
- **toggleTheme.js**: Este script probablemente se utiliza para cambiar el tema de la aplicación entre el modo claro y el modo oscuro.

## [object Object]

### Descripción
```typescript
[object Object]
```
- **[object Object]**: Este es un objeto en JavaScript que se muestra de esta manera cuando se intenta convertir un objeto a una cadena sin especificar una representación más detallada. No se proporciona más información sobre este objeto en el contexto dado. 
 ## Project.tsx

### Importaciones

```typescript
import Image from 'next/image'
import { Button } from './Button'
import { Github, Link2 } from 'lucide-react'
```

- **Image**: Importa el componente `Image` de `next/image` para manejar imágenes de manera optimizada.
- **Button**: Importa el componente `Button` desde un archivo local `Button.tsx`.
- **Github, Link2**: Importa los iconos `Github` y `Link2` de la librería `lucide-react` para usarlos en los botones.

### Interfaz de Propiedades

```typescript
interface Props {
  name: string
  description: string
  image: string
  technologies: string[]
  github: string
  url: string
}
```

- Define una interfaz `Props` que especifica las propiedades que el componente `Project` espera recibir:
  - `name`: Nombre del proyecto.
  - `description`: Descripción del proyecto.
  - `image`: Ruta de la imagen del proyecto.
  - `technologies`: Arreglo de tecnologías utilizadas en el proyecto.
  - `github`: URL del repositorio de GitHub del proyecto.
  - `url`: URL del proyecto en vivo.

### Componente Project

```typescript
export function Project({
  name,
  description,
  technologies,
  image,
  url,
  github
}: Props) {
  return (
    <div className="flex max-lg:flex-col gap-8">
      <a href={url} target="_blank">
        <Image
          src={`/${image}`}
          alt="Project Photo"
          width={1003}
          height={627}
          className="max-lg:w-[380px] max-lg:h-[220ps] lg:w-[400px] lg:h-[250px] rounded-2xl hover:-rotate-2 hover:scale-[95%] cursor-pointer transition-transform duration-200 ease-out"
        />
      </a>

      <div className="flex flex-col gap-3">
        <a href={url} target="_blank" className="w-fit">
          <h1 className="text-3xl font-semibold hover:text-customPurple dark:hover:text-customPurple transition-colors duration-150 w-fit text-black dark:text-white">
            {name}
          </h1>
        </a>
        <p className="text-lg font-[500] text-black dark:text-white text-opacity-90 lg:w-[450px] max-lg:w-[380px]">
          {description}
        </p>

        <div className="mb-2 mt-1 flex gap-3">
          {technologies.map((tech, index) => {
            return (
              <div
                key={index}
                className="flex gap-2 items-center justify-center rounded-full px-3 py-1 bg-[#e4e4e4] dark:bg-[#111]"
              >
                <Image
                  src={`/logos/${tech.replace('_dark', '')}.svg`}
                  alt="logo"
                  width={50}
                  height={50}
                  className={`h-[20px] max-w-[20px] w-fit m-0 ${
                    tech.includes('_dark') ? 'dark:hidden' : ''
                  }`}
                />

                <Image
                  src={`/logos/${tech}.svg`}
                  alt="logo"
                  width={50}
                  height={50}
                  className={`h-[20px] max-w-[20px] w-fit m-0 hidden ${
                    tech.includes('_dark') ? 'dark:block' : ''
                  }`}
                />

                <h1 className="text-black dark:text-white">
                  {tech[0].replace('_dark', '').toUpperCase() +
                    tech.replace('_dark', '').slice(1)}
                </h1>
              </div>
            )
          })}
        </div>

        <div className="flex gap-3">
          <Button text="Github" icon={<Github />} href={github} />

          <Button text="Link" icon={<Link2 />} href={url} />
        </div>
      </div>
    </div>
  )
}
```

- **Estructura del Componente**:
  - **Imagen del Proyecto**: Un enlace que abre la URL del proyecto en una nueva pestaña y muestra la imagen del proyecto con efectos de hover.
  - **Nombre del Proyecto**: Un enlace que abre la URL del proyecto en una nueva pestaña y muestra el nombre del proyecto con efectos de hover.
  - **Descripción del Proyecto**: Un párrafo que muestra la descripción del proyecto.
  - **Tecnologías Utilizadas**: Un mapeo del arreglo de tecnologías que muestra cada tecnología con su logo correspondiente.
  - **Botones**: Dos botones, uno para el repositorio de GitHub y otro para la URL del proyecto en vivo.

## Projects.tsx

### Importaciones

```typescript
import { CodeXml } from 'lucide-react'
import { Project } from './Project'
```

- **CodeXml**: Importa el icono `CodeXml` de la librería `lucide-react` para usarlo en el título de la sección.
- **Project**: Importa el componente `Project` desde el archivo local `Project.tsx`.

### Componente Projects

```typescript
export function Projects() {
  return (
    <section id="projects" className="pt-32">
      <span className="flex items-center gap-3 mb-10">
        <h1 className="text-4xl font-semibold">Proyectos</h1>
        <CodeXml size={45} strokeWidth={2} />
      </span>

      <div className="flex flex-col gap-14">
        <Project
          name="CLI Convert Image"
          description="CLI de terminal que sirve para cambiar el formato de las imágenes, generando un nueva imagen con el formato elegido"
          url="https://www.npmjs.com/package/convert-image-yei"
          github="https://github.com/Ye1der/convert-image"
          image="imageTerm.avif"
          technologies={['nodejs', 'typescript', 'vitest']}
        />

        <Project
          name="Routine Editor"
          description="Plataforma para crear, editar y gestionar tus propias rutinas de
            ejercicio y ver tu mejora en ellas con el paso del tiempo"
          url="https://routine-editor.vercel.app"
          github="https://github.com/Ye1der/Routine-Editor"
          image="routine-editor.avif"
          technologies={['react', 'firebase', 'tailwind']}
        />

        <Project
          name="Jokes Generator"
          description="Pagina web que genera chistes de forma aleatoria, este proyecto participo en la hackathon del dev"
          url="https://joke-generator-hackathon.vercel.app/"
          github="https://github.com/nicothomas1201/joke-generator-hackathon"
          image="jokes-generator.avif"
          technologies={['astro_dark', 'react', 'typescript']}
        />

        <Project
          name="Celcuotas"
          description="Trabajo de la universidad para la materia de diseño web, es una pagina que permite vender el catalogo de celcuotas"
          url="https://celcuotas.netlify.app/"
          github="https://github.com/Ye1der/Celcuotas"
          image="celcuotas.avif"
          technologies={['react', 'tailwind', 'typescript']}
        />
      </div>
    </section>
  )
}
```

- **Estructura del Componente**:
  - **Sección de Proyectos**: Una sección con el ID `projects` que contiene un título con el icono `CodeXml`.
  - **Lista de Proyectos**: Un contenedor que lista varios componentes `Project`, cada uno con sus respectivas propiedades (nombre, descripción, URL, repositorio de GitHub, imagen y tecnologías utilizadas).

### Ejemplos de Uso

- **CLI Convert Image**:
  - **Nombre**: CLI Convert Image
  - **Descripción**: CLI de terminal que sirve para cambiar el formato de las imágenes, generando una nueva imagen con el formato elegido.
  - **URL**: [https://www.npmjs.com/package/convert-image-yei](https://www.npmjs.com/package/convert-image-yei)
  - **GitHub**: [https://github.com/Ye1der/convert-image](https://github.com/Ye1der/convert-image)
  - **Imagen**: imageTerm.avif
  - **Tecnologías**: nodejs, typescript, vitest

- **Routine Editor**:
  - **Nombre**: Routine Editor
  - **Descripción**: Plataforma para crear, editar y gestionar tus propias rutinas de ejercicio y ver tu mejora en ellas con el paso del tiempo.
  - **URL**: [https://routine-editor.vercel.app](https://routine-editor.vercel.app)
  - **GitHub**: [https://github.com/Ye1der/Routine-Editor](https://github.com/Ye1der/Routine-Editor)
  - **Imagen**: routine-editor.avif
  - **Tecnologías**: react, firebase, tailwind

- **Jokes Generator**:
  - **Nombre**: Jokes Generator
  - **Descripción**: Página web que genera chistes de forma aleatoria, este proyecto participó en la hackathon del dev.
  - **URL**: [https://joke-generator-hackathon.vercel.app/](https://joke-generator-hackathon.vercel.app/)
  - **GitHub**: [https://github.com/nicothomas1201/joke-generator-hackathon](https://github.com/nicothomas1201/joke-generator-hackathon)
  - **Imagen**: jokes-generator.avif
  - **Tecnologías**: astro_dark, react, typescript

- **Celcuotas**:
  - **Nombre**: Celcuotas
  - **Descripción**: Trabajo de la universidad para la materia de diseño web, es una página que permite vender el catálogo de celcuotas.
  - **URL**: [https://celcuotas.netlify.app/](https://celcuotas.netlify.app/)
  - **GitHub**: [https://github.com/Ye1der/Celcuotas](https://github.com/Ye1der/Celcuotas)
  - **Imagen**: celcuotas.avif
  - **Tecnologías**: react, tailwind, typescript

### Librerías Utilizadas

- **next/image**: Utilizada para optimizar y manejar imágenes de manera eficiente.
- **lucide-react**: Utilizada para proporcionar iconos SVG que se utilizan en los botones y en el título de la sección.
- **Button**: Un componente local que se utiliza para crear botones con iconos y enlaces.

### APIs y Servicios

- No se hace ningún llamado a una API en estos archivos. Los datos de los proyectos se proporcionan directamente en el código. 
 ## Socials.tsx

Este archivo define un componente de React llamado `Socials` que muestra una sección de redes sociales en una aplicación web. El componente utiliza varias librerías y componentes para lograr su funcionalidad.

### Importaciones

```typescript
import { AtSign } from 'lucide-react'
import Image from 'next/image'
```

- **`AtSign` de `lucide-react`**: Este es un icono de la librería `lucide-react`, que se utiliza para mostrar un símbolo de "@" junto al título de la sección.
- **`Image` de `next/image`**: Este componente de Next.js se utiliza para optimizar y mostrar imágenes en la aplicación.

### Componente `Socials`

```typescript
export function Socials() {
  return (
    <section id="socials" className="pt-32">
      <span className="flex items-center gap-3 mb-10">
        <h1 className="text-4xl font-semibold">Redes sociales</h1>
        <AtSign size={37} strokeWidth={2} />
      </span>

      <div className="flex flex-wrap max-lg:w-[380px] gap-5 ">
        <SocialButton
          name="linkedin"
          color="#0A66C2"
          url="https://www.linkedin.com/in/yeider-pe%C3%B1a-640311230/"
        />

        <SocialButton
          name="github_dark"
          color="white"
          url="https://github.com/Ye1der"
        />

        <SocialButton
          name="twitter"
          color="#55ACEE"
          url="https://x.com/Y117536434"
        />

        <SocialButton
          name="gmail"
          color="#EA4335"
          url="mailto:yeiderdev@gmail.com"
        />
      </div>
    </section>
  )
}
```

- **`section` con `id="socials"`**: Define una sección en la página con un identificador único.
- **`span` con `flex items-center gap-3 mb-10`**: Contiene el título "Redes sociales" y el icono `AtSign`.
- **`div` con `flex flex-wrap max-lg:w-[380px] gap-5`**: Contiene los botones de redes sociales, que se envuelven y se espacian adecuadamente.
- **`SocialButton`**: Componente reutilizable que se utiliza para cada botón de red social.

### Componente `SocialButton`

```typescript
function SocialButton({
  name,
  color,
  url
}: {
  name: string
  color: string
  url: string
}) {
  return (
    <a
      href={url}
      target="_blank"
      className="w-fit p-4 border-2 border-black dark:border-white dark:border-opacity-50 dark:hover:border-opacity-100 border-opacity-50 flex items-center gap-4 rounded-2xl hover:border-opacity-100 hover:-translate-y-1 transition-all duration-200"
    >
      <Image
        src={`/logos/${name.replace('_dark', '')}.svg`}
        alt="logo"
        width={100}
        height={100}
        className={`max-w-[30px] max-h-[30px] ${
          name.includes('_dark') ? 'dark:hidden' : ''
        }`}
      />

      <Image
        src={`/logos/${name}.svg`}
        alt="logo"
        width={100}
        height={100}
        className={`max-w-[30px] max-h-[30px] hidden ${
          name.includes('_dark') ? 'dark:block' : ''
        }`}
      />

      <h1
        style={color != 'white' && color != 'black' ? { color: color } : {}}
        className={`text-xl font-semibold ${
          color === 'white' || color === 'black'
            ? 'text-black dark:text-white'
            : ''
        }`}
      >
        {name[0].toUpperCase() + name.replace('_dark', '').slice(1)}
      </h1>
    </a>
  )
}
```

- **`a` con `href={url}`**: Enlace que redirige al usuario a la URL de la red social correspondiente.
- **`Image`**: Muestra el logo de la red social. Utiliza dos imágenes, una para el modo claro y otra para el modo oscuro.
- **`h1`**: Muestra el nombre de la red social, aplicando el color especificado.

## next.config.mjs

Este archivo configura la aplicación Next.js. En este caso, la configuración está vacía, lo que significa que se utilizan las configuraciones predeterminadas de Next.js.

### Configuración

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
```

- **`nextConfig`**: Objeto de configuración de Next.js. En este caso, está vacío, lo que significa que no se han personalizado las configuraciones.

### Explicación

- **`/** @type {import('next').NextConfig} */`**: Comentario que indica el tipo de la configuración de Next.js.
- **`const nextConfig = {};`**: Define un objeto de configuración vacío.
- **`export default nextConfig;`**: Exporta la configuración para que Next.js la utilice.

### Librerías Utilizadas

- **`lucide-react`**: Librería de iconos que proporciona una amplia variedad de iconos SVG.
- **`next/image`**: Componente de Next.js para optimizar y mostrar imágenes.

### Ejemplos

- **`AtSign` de `lucide-react`**:
  ```typescript
  import { AtSign } from 'lucide-react'
  <AtSign size={37} strokeWidth={2} />
  ```

- **`Image` de `next/image`**:
  ```typescript
  import Image from 'next/image'
  <Image
    src={`/logos/${name.replace('_dark', '')}.svg`}
    alt="logo"
    width={100}
    height={100}
    className={`max-w-[30px] max-h-[30px] ${
      name.includes('_dark') ? 'dark:hidden' : ''
    }`}
  />
  ```

### APIs

En este código no se realizan llamadas a APIs externas. Todas las funcionalidades se manejan localmente dentro del componente. 
 ## vips-properties.xml

El archivo `vips-properties.xml` es un archivo XML que contiene metadatos de una imagen procesada por la biblioteca VIPS (Vigra Image Processing System). Este archivo proporciona información detallada sobre las propiedades de la imagen.

### Estructura del Archivo

```xml
<?xml version="1.0"?>
<image xmlns="http://www.vips.ecs.soton.ac.uk//dzsave" date="2024-07-03T11:46:27.510040-05" version="8.15.1">
  <properties>
    <property>
      <name>width</name>
      <value type="gint">28</value>
    </property>
    <property>
      <name>height</name>
      <value type="gint">32</value>
    </property>
    <property>
      <name>bands</name>
      <value type="gint">4</value>
    </property>
    <property>
      <name>xoffset</name>
      <value type="gint">0</value>
    </property>
    <property>
      <name>yoffset</name>
      <value type="gint">0</value>
    </property>
    <property>
      <name>xres</name>
      <value type="gdouble">2.8346456692913389</value>
    </property>
    <property>
      <name>yres</name>
      <value type="gdouble">2.8346456692913389</value>
    </property>
    <property>
      <name>vips-loader</name>
      <value type="VipsRefString">svgload</value>
    </property>
    <property>
      <name>vips-sequential</name>
      <value type="gint">1</value>
    </property>
    <property>
      <name>orientation</name>
      <value type="gint">0</value>
    </property>
  </properties>
</image>
```

### Explicación de los Bloques de Código

1. **Declaración XML y Namespace**
   ```xml
   <?xml version="1.0"?>
   <image xmlns="http://www.vips.ecs.soton.ac.uk//dzsave" date="2024-07-03T11:46:27.510040-05" version="8.15.1">
   ```
   - `<?xml version="1.0"?>`: Declaración estándar de XML.
   - `<image xmlns="http://www.vips.ecs.soton.ac.uk//dzsave" date="2024-07-03T11:46:27.510040-05" version="8.15.1">`: Define el elemento raíz `image` con un namespace específico de VIPS, la fecha de creación y la versión de VIPS.

2. **Propiedades de la Imagen**
   ```xml
   <properties>
     <property>
       <name>width</name>
       <value type="gint">28</value>
     </property>
     <property>
       <name>height</name>
       <value type="gint">32</value>
     </property>
     <property>
       <name>bands</name>
       <value type="gint">4</value>
     </property>
     <property>
       <name>xoffset</name>
       <value type="gint">0</value>
     </property>
     <property>
       <name>yoffset</name>
       <value type="gint">0</value>
     </property>
     <property>
       <name>xres</name>
       <value type="gdouble">2.8346456692913389</value>
     </property>
     <property>
       <name>yres</name>
       <value type="gdouble">2.8346456692913389</value>
     </property>
     <property>
       <name>vips-loader</name>
       <value type="VipsRefString">svgload</value>
     </property>
     <property>
       <name>vips-sequential</name>
       <value type="gint">1</value>
     </property>
     <property>
       <name>orientation</name>
       <value type="gint">0</value>
     </property>
   </properties>
   ```
   - Cada `<property>` contiene un `<name>` y un `<value>` que describen una propiedad específica de la imagen.
   - Ejemplos de propiedades:
     - `width`: Ancho de la imagen (28 píxeles).
     - `height`: Alto de la imagen (32 píxeles).
     - `bands`: Número de bandas de color (4 bandas).
     - `xoffset` y `yoffset`: Desplazamiento en el eje X e Y (ambos 0).
     - `xres` y `yres`: Resolución en el eje X e Y (2.8346456692913389).
     - `vips-loader`: Cargador utilizado por VIPS (svgload).
     - `vips-sequential`: Indicador de procesamiento secuencial (1).
     - `orientation`: Orientación de la imagen (0).

## navIntObs.js

El archivo `navIntObs.js` es un script JavaScript que utiliza la API de Intersection Observer para observar la visibilidad de ciertas secciones en una página web y aplicar clases CSS en consecuencia.

### Estructura del Archivo

```javascript
const options = {
  root: null,
  threshold: 0.3
}

const $ = (element) => document.querySelector(element)

const projects = $('#projects')
const skills = $('#skills')
const socials = $('#socials')
const aboutme = $('#aboutme')

const sections = [projects, skills, socials, aboutme]

const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      $(`.${element.target.id}`).classList.add('active')
    } else {
      $(`.${element.target.id}`).classList.remove('active')
    }
  })
}, options)

sections.forEach((section) => {
  if (section) {
    observer.observe(section)
  }
})
```

### Explicación de los Bloques de Código

1. **Configuración del Intersection Observer**
   ```javascript
   const options = {
     root: null,
     threshold: 0.3
   }
   ```
   - `root: null`: El elemento raíz utilizado como el área de visión. `null` significa que se utiliza el viewport del navegador.
   - `threshold: 0.3`: El umbral de intersección. Cuando el 30% de la sección es visible, se considera que está intersectando.

2. **Función de Selección de Elementos**
   ```javascript
   const $ = (element) => document.querySelector(element)
   ```
   - Define una función `$` que es un alias para `document.querySelector`, facilitando la selección de elementos DOM.

3. **Selección de Secciones**
   ```javascript
   const projects = $('#projects')
   const skills = $('#skills')
   const socials = $('#socials')
   const aboutme = $('#aboutme')

   const sections = [projects, skills, socials, aboutme]
   ```
   - Selecciona las secciones de la página web (`projects`, `skills`, `socials`, `aboutme`) y las almacena en un array `sections`.

4. **Creación del Intersection Observer**
   ```javascript
   const observer = new IntersectionObserver((entries) => {
     entries.forEach((element) => {
       if (element.isIntersecting) {
         $(`.${element.target.id}`).classList.add('active')
       } else {
         $(`.${element.target.id}`).classList.remove('active')
       }
     })
   }, options)
   ```
   - Crea un nuevo `IntersectionObserver` que observa las entradas (`entries`) y aplica o elimina la clase `active` según si la sección está intersectando o no.

5. **Observación de Secciones**
   ```javascript
   sections.forEach((section) => {
     if (section) {
       observer.observe(section)
     }
   })
   ```
   - Itera sobre el array `sections` y observa cada sección utilizando el `IntersectionObserver`.

### Ejemplo de Uso

- Supongamos que tienes una página web con las siguientes secciones:
  ```html
  <section id="projects"></section>
  <section id="skills"></section>
  <section id="socials"></section>
  <section id="aboutme"></section>
  ```
- Cuando el usuario desplaza la página y una de estas secciones se vuelve visible (al menos un 30%), se le añade la clase `active`. Cuando la sección sale de la vista, se elimina la clase `active`.

### Uso de la API de Intersection Observer

- La API de Intersection Observer permite a los desarrolladores observar la visibilidad de los elementos en la página web y ejecutar código cuando los elementos entran o salen del viewport. Esto es útil para implementar efectos de desplazamiento, carga diferida de imágenes, y otras funcionalidades basadas en la visibilidad. 
 ## tsconfig.json

El archivo `tsconfig.json` es un archivo de configuración para TypeScript. Este archivo define las opciones de compilación y las reglas que TypeScript debe seguir al compilar el código. A continuación, se explica cada bloque de código y su propósito:

### CompilerOptions

```json
"compilerOptions": {
  "lib": ["dom", "dom.iterable", "esnext"],
  "allowJs": true,
  "skipLibCheck": true,
  "strict": true,
  "noEmit": true,
  "esModuleInterop": true,
  "module": "esnext",
  "moduleResolution": "bundler",
  "resolveJsonModule": true,
  "isolatedModules": true,
  "jsx": "preserve",
  "incremental": true,
  "plugins": [
    {
      "name": "next"
    }
  ],
  "paths": {
    "@/*": ["./*"]
  }
}
```

- **lib**: Especifica las bibliotecas que se incluyen en la compilación. En este caso, se incluyen `dom`, `dom.iterable` y `esnext`, que son bibliotecas estándar de JavaScript para el DOM y las características más recientes de ECMAScript.
- **allowJs**: Permite la compilación de archivos JavaScript junto con TypeScript.
- **skipLibCheck**: Omite la verificación de tipos en las bibliotecas de declaración.
- **strict**: Habilita todas las opciones de verificación estricta de tipos.
- **noEmit**: No emite archivos de salida.
- **esModuleInterop**: Habilita la interoperabilidad entre módulos ES y CommonJS.
- **module**: Especifica el sistema de módulos a utilizar. `esnext` se refiere a los módulos ECMAScript más recientes.
- **moduleResolution**: Define el algoritmo de resolución de módulos. `bundler` es utilizado por herramientas de empaquetado como Webpack.
- **resolveJsonModule**: Permite la importación de archivos JSON.
- **isolatedModules**: Trata cada archivo como un módulo separado, lo cual es útil para herramientas de empaquetado.
- **jsx**: Especifica cómo se debe tratar el código JSX. `preserve` mantiene el JSX tal como está.
- **incremental**: Habilita la compilación incremental para mejorar el rendimiento.
- **plugins**: Especifica los plugins a utilizar. En este caso, se utiliza el plugin `next`, que es específico para el framework Next.js.
- **paths**: Define alias para las rutas de los módulos. `@/*` se mapea a `./*`, lo que permite importar módulos utilizando el alias `@`.

### Include

```json
"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"]
```

- **include**: Especifica los archivos que deben ser incluidos en la compilación. En este caso, se incluyen los archivos de tipos de Next.js (`next-env.d.ts`), todos los archivos TypeScript (`**/*.ts`), todos los archivos JSX (`**/*.tsx`) y los archivos de tipos generados por Next.js (`.next/types/**/*.ts`).

### Exclude

```json
"exclude": ["node_modules"]
```

- **exclude**: Especifica los archivos que deben ser excluidos de la compilación. En este caso, se excluye la carpeta `node_modules`, que contiene las dependencias del proyecto.

Este archivo de configuración está diseñado para un proyecto que utiliza Next.js, un framework de React para aplicaciones web. Las opciones de compilación están configuradas para trabajar bien con Next.js y para aprovechar las características más recientes de TypeScript y JavaScript.