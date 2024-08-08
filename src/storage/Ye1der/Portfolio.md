 
 # Documentación del Proyecto Portfolio

## Introducción

Este proyecto es un portafolio de un desarrollador web, construido utilizando varias tecnologías modernas. El objetivo principal es mostrar las habilidades, proyectos y experiencia del desarrollador de una manera visualmente atractiva y funcional.

### Tecnologías Utilizadas

- **lucide-react**: Biblioteca de iconos para React.
- **next**: Framework de React para construir aplicaciones web.
- **react**: Biblioteca de JavaScript para construir interfaces de usuario.
- **react-dom**: Paquete que proporciona métodos específicos del DOM para React.
- **@types/node**: Tipos TypeScript para Node.js.
- **@types/react**: Tipos TypeScript para React.
- **@types/react-dom**: Tipos TypeScript para React DOM.
- **eslint**: Herramienta para identificar y reportar patrones en JavaScript/TypeScript.
- **eslint-config-next**: Configuración de ESLint para Next.js.
- **postcss**: Herramienta para transformar CSS con plugins.
- **tailwindcss**: Framework de CSS utilitario para diseñar rápidamente interfaces de usuario.
- **typescript**: Lenguaje de programación que es un superconjunto tipado de JavaScript.

### Scripts en package.json

- **dev**: Ejecuta el servidor de desarrollo de Next.js.
- **build**: Compila la aplicación para producción.
- **start**: Inicia el servidor de producción de Next.js.
- **lint**: Ejecuta ESLint para verificar el código.

## Estructura del Proyecto

### Raíz del Proyecto

- **.gitignore**: Archivo que especifica qué archivos y directorios deben ser ignorados por Git.
- **.prettierignore**: Archivo que especifica qué archivos y directorios deben ser ignorados por Prettier.
- **.prettierrc**: Configuración de Prettier para formatear el código.
- **settings.json**: Configuración de VSCode para el proyecto.
- **README.md**: Archivo de documentación del proyecto.
- **animation.html**: Archivo HTML que muestra una animación de transición de clip-path.
- **globals.css**: Archivo CSS global que incluye estilos de Tailwind CSS y estilos personalizados.
- **layout.tsx**: Archivo que define el layout principal de la aplicación.
- **page.tsx**: Archivo que define la página principal de la aplicación.
- **button.module.css**: Archivo CSS que define estilos para los botones.
- **navbar.css**: Archivo CSS que define estilos para la barra de navegación.
- **Aboutme.tsx**: Componente que muestra información sobre el desarrollador.
- **Button.tsx**: Componente que define un botón reutilizable.
- **Logo.tsx**: Componente que muestra logos de tecnologías.
- **Navbar.tsx**: Componente que define la barra de navegación.
- **Presentation.tsx**: Componente que muestra la presentación del desarrollador.
- **Project.tsx**: Componente que define un proyecto individual.
- **Projects.tsx**: Componente que muestra la lista de proyectos.
- **Skills.tsx**: Componente que muestra las habilidades del desarrollador.
- **Socials.tsx**: Componente que muestra las redes sociales del desarrollador.
- **next.config.mjs**: Configuración de Next.js.
- **postcss.config.mjs**: Configuración de PostCSS.
- **vips-properties.xml**: Archivo XML que contiene propiedades de una imagen.
- **navIntObs.js**: Script que maneja la intersección de observadores para la navegación.
- **toggleTheme.js**: Script que maneja el cambio de tema (claro/oscuro).
- **tsconfig.json**: Configuración de TypeScript.

## Contextos

No se encontraron archivos que definan contextos de React en el proyecto.

## Rutas

No se encontraron archivos que manejen las rutas del proyecto con `react-router-dom`, `wouter` u otras bibliotecas similares.

## Hooks

No se encontraron hooks personalizados en el proyecto.

## APIs

No se encontraron llamadas a APIs en el proyecto.

## Archivos

### .gitignore

Este archivo especifica qué archivos y directorios deben ser ignorados por Git.

```plaintext
# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

### .prettierignore

Este archivo especifica qué archivos y directorios deben ser ignorados por Prettier.

```plaintext
.expo
.githus
.dist
.vscode
node_modules
android
assets
ios
```

### .prettierrc

Este archivo contiene la configuración de Prettier para formatear el código.

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "none",
  "bracketSpacing": true,
  "arrowParens": "always",
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.jsx"],
      "options": {
        "semi": false,
        "singleQuote": true,
        "tabWidth": 2,
        "useTabs": false,
        "trailingComma": "none",
        "bracketSpacing": true,
        "arrowParens": "always"
      }
    }
  ]
}
```

### settings.json

Este archivo contiene la configuración de VSCode para el proyecto, incluyendo palabras personalizadas para el corrector ortográfico.

```json
{
  "cSpell.words": [
    "aboutme",
    "celcuotas",
    "Celcuotas",
    "expressjs",
    "figma",
    "gmail",
    "hackathon",
    "kotlin",
    "linkedin",
    "lucide",
    "navlink",
    "netlify",
    "nextjs",
    "postgresql",
    "reactrouter",
    "sqlite",
    "yeider",
    "Yeider"
  ]
}
```

### README.md

Este archivo contiene la documentación del proyecto, incluyendo instrucciones para ejecutar el servidor de desarrollo y enlaces a recursos de Next.js.

```markdown
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
```

### animation.html

Este archivo contiene una animación de transición de clip-path en HTML y CSS.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Circle ClipPath Transition</title>
  <style>
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

  </style>
</head>
<body>
  <div class="content">Hello, World!</div>
  <button class="toggle-button" id="toggleButton">Toggle Dark Mode</button>

  <script>
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
  </script>
</body>
</html>
```

### globals.css

Este archivo contiene estilos globales para la aplicación, incluyendo estilos de Tailwind CSS y estilos personalizados.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

* {
  scrollbar-color: #d940ff #111;
  scrollbar-width: thin;
  scroll-behavior: smooth;
}

body {
  background: linear-gradient(to bottom, #fcf0f9, #fff);
}

.dark {
  body {
    background: linear-gradient(to bottom, #070a13, #000000);
  }
}

#aboutmeImage {
  mask-image: linear-gradient(white 50%, transparent);
}

.dark {
  #aboutmeImage {
    mask-image: linear-gradient(black 50%, transparent);
  }
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

/* --> To add transition in a gradient background
@property --gradient-end {
  syntax: "<color>";
  initial-value: transparent;
  inherits: false;
}

@property --gradient-start {
  syntax: "<color>";
  initial-value: transparent;
  inherits: false;
}

body {
  --gradient-start: #fcf0f9;
  --gradient-end: #fff;
  transition: .2s --gradient-start, .2s --gradient-end, .2s color;
  background: linear-gradient(to bottom, var(--gradient-start), var(--gradient-end));
}

.dark {
  body {
    --gradient-start: #070a13;
    --gradient-end: #000000;
  }
  }
*/
```

### layout.tsx

Este archivo define el layout principal de la aplicación, incluyendo la configuración del tema oscuro/claro.

```tsx
import './globals.css'
import { poppins } from './ui/fonts'

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

### page.tsx

Este archivo define la página principal de la aplicación, incluyendo los componentes de presentación, proyectos, habilidades, redes sociales y sobre mí.

```tsx
import { Presentation } from './ui/Presentation'
import { Skills } from './ui/Skills'
import { Projects } from './ui/Projects'
import { Socials } from './ui/Socials'
import { Navbar } from './ui/Navbar'
import { Aboutme } from './ui/Aboutme'

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

### button.module.css

Este archivo contiene estilos para los botones.

```css
.button {
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 1.125rem;
  border-radius: 0.75rem;
  display: flex;
  justify-items: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::after {
    content: "";
    background: #D940FF; /* color de fondo hover */
    position: absolute;
    z-index: -1;
    padding: 16px 20px;
    display: block;
    top: 0;
    bottom: 0;
    left: -100%;
    right: 100%;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  &:hover::after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
}

.icon {
  rotate: 0deg;
  transition: rotate .2s, color .2s;
}

.button:hover .icon {
  rotate: 370deg;
}

@keyframes rotation {
  0% {
    rotate: 0deg;
  }

  25% {
    rotate: 20deg;
  }

  75% {
    rotate: -10deg;
  }

  100% {
    rotate: 10deg;
  }
}
```

### navbar.css

Este archivo contiene estilos para la barra de navegación.

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

.dark {
  nav {
    animation: showBackgroundDark auto linear both;
    animation-timeline: scroll(root block);
  }
}

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

### Aboutme.tsx

Este archivo define el componente que muestra información sobre el desarrollador.

```tsx
import { BookUser } from 'lucide-react'
import Image from 'next/image'

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

### Button.tsx

Este archivo define un componente de botón reutilizable.

```tsx
import React from 'react'
import styles from '../styles/button.module.css'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
  icon: React.ReactNode
  href: string
  className?: string
}

export function Button({ text, icon, href, className, ...props }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      {...props}
      className={`${styles.button} ${className} text-white bg-[#0F172A] dark:text-black dark:bg-white`}
    >
      {text}
      <span className={styles.icon}>{icon}</span>
    </a>
  )
}
```

### Logo.tsx

Este archivo define un componente que muestra logos de tecnologías.

```tsx
import Image from 'next/image'

export function Logo({ name }: { name: string }) {
  return (
    <div
      className={`group bg-[#d8d8d8] dark:bg-[#111] h-[60px] w-[60px] rounded-2xl flex items-center justify-center relative`}
    >
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
    </div>
  )
}
```

### Navbar.tsx

Este archivo define la barra de navegación.

```tsx
import '../styles/navbar.css'
import { Moon, Sun } from 'lucide-react'
import Script from 'next/script'

export function Navbar() {
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
}
```

### Presentation.tsx

Este archivo define el componente de presentación del desarrollador.

```tsx
import Image from 'next/image'
import { CornerDownRight, FileDown } from 'lucide-react'
import { Button } from './Button'

export function Presentation() {
  return (
    <section className="flex max-lg:flex-col gap-10 items-center">
      <Image
        src={'/photo.avif'}
        alt="photo"
        width={500}
        height={500}
        className="w-[180px]"
        priority
      />

      <div>
        <h1 className={`text-4xl font-semibold max-lg:text-center`}>
          Soy <span className={` text-customPurple`}> Yeider Peña </span>
        </h1>

        <div className="flex items-center gap-2 lg:ml-5 mt-1">
          <CornerDownRight
            size={34}
            strokeWidth={2.3}
            className="max-lg:hidden"
          />
          <h2 className="max-lg:text-xl max-lg:opacity-90 lg:text-2xl font-semibold mt-2 max-lg:text-center">
            Desarrollador JavaScript full stack 🇨🇴
          </h2>
        </div>

        <div className="flex items-center gap-5 mt-6 max-lg:justify-center">
          <Button
            text="Descargar CV"
            icon={<FileDown />}
            href="/yeider-cv.pdf"
            download
          />
          <a
            href="https://www.linkedin.com/in/yeider-pe%C3%B1a-640311230/"
            target="_blank"
            className="hover:drop-shadow-[0_0px_35px_rgb(10,102,194)] transition-shadow duration-200"
          >
            <Image
              src="/logos/linkedin.svg"
              alt="logo linkedin"
              width={100}
              height={100}
              className="h-[30px] m-0 w-fit"
            />
          </a>

          <a href="https://github.com/Ye1der" target="_blank" className="">
            <Image
              src="/logos/github.svg"
              alt="logo github"
              width={100}
              height={100}
              className="h-[30px] m-0 w-fit block dark:hidden hover:drop-shadow-[0_0px_35px_rgb(0,0,0,1)] transition-shadow duration-200"
            />

            <Image
              src="/logos/github_dark.svg"
              alt="logo github"
              width={100}
              height={100}
              className="h-[30px] m-0 w-fit hidden dark:block hover:drop-shadow-[0_0px_35px_rgb(254,254,254,1)] transition-shadow duration-200"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
```

### Project.tsx

Este archivo define un componente que muestra un proyecto individual.

```tsx
import Image from 'next/image'
import { Button } from './Button'
import { Github, Link2 } from 'lucide-react'

interface Props {
  name: string
  description: string
  image: string
  technologies: string[]
  github: string
  url: string
}

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

### Projects.tsx

Este archivo define el componente que muestra la lista de proyectos.

```tsx
import { CodeXml } from 'lucide-react'
import { Project } from './Project'

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

### Skills.tsx

Este archivo define el componente que muestra las habilidades del desarrollador.

```tsx
import { Redo, Star } from 'lucide-react'
import { Logo } from './Logo'

export function Skills() {
  const languages = [
    'javascript',
    'typescript',
    'php',
    'bash_dark',
    'c',
    'java',
    'kotlin'
  ]

  const frameworks = [
    'react',
    'nextjs',
    'expressjs_dark',
    'astro_dark',
    'react_native',
    'tailwind',
    'reactrouter',
    'nodejs',
    'expo',
    'jwt',
    'vitest',
    'jest'
  ]

  const database = ['postgresql', 'mysql', 'sqlite', 'mongodb', 'realm']

  const tools = [
    'git',
    'github_dark',
    'figma',
    'vscode',
    'firebase',
    'railway_dark',
    'netlify',
    'linux'
  ]

  const names = [
    'Lenguajes',
    'Frameworks / librerías',
    'Base de datos',
    'Herramientas'
  ]

  return (
    <section id="skills" className="pt-32">
      <span className="flex items-center gap-3 mb-10">
        <h1 className="text-4xl font-semibold">Habilidades</h1>
        <Star size={40} />
      </span>

      <div className="max-lg:max-w-[380px] lg:max-w-[800px] flex flex-col gap-8">
        {[languages, frameworks, database, tools].map((array, index) => {
          return (
            <div key={index} className={`flex flex-col gap-5`}>
              <div className="flex items-center gap-2">
                <h1 className="text-[22px] opacity-80 font-semibold">
                  {names[index]}
                </h1>
                <Redo size={28} className="rotate-[25deg] opacity-80" />
              </div>

              <div className={`flex flex-wrap gap-5`}>
                {array.map((tech, index) => {
                  return <Logo name={tech} key={index} />
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
```

### Socials.tsx

Este archivo define el componente que muestra las redes sociales del desarrollador.

```tsx
import { AtSign } from 'lucide-react'
import Image from 'next/image'

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

### next.config.mjs

Este archivo contiene la configuración de Next.js.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
```

### postcss.config.mjs

Este archivo contiene la configuración de PostCSS.

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
```

### vips-properties.xml

Este archivo contiene propiedades de una imagen en formato XML.

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

### navIntObs.js

Este archivo contiene un script que maneja la intersección de observadores para la navegación.

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

### toggleTheme.js

Este archivo contiene un script que maneja el cambio de tema (claro/oscuro).

```javascript
const toggleButton = document.getElementById('toggleTheme')

toggleButton?.addEventListener('click', async (event) => {
  let isDark = true
  const currentTheme = localStorage.getItem('theme')

  if (currentTheme === 'dark') {
    localStorage.setItem('theme', 'light')
    isDark = false
  } else {
    localStorage.setItem('theme', 'dark')
    isDark = true
  }

  function nextTick() {
    return new Promise((resolve) => setTimeout(resolve, 0))
  }

  const x = event.clientX
  const y = event.clientY

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    const head = document.head || document.getElementsByTagName('head')[0]
    const style = document.createElement('style')
    style.type = 'text/css'

    const css = `
          ::view-transition-old(root),
          .dark ::view-transition-new(root) {
            z-index: ${isDark ? 9999 : 1};
          }

          ::view-transition-new(root),
          .dark ::view-transition-old(root) {
            z-index: ${isDark ? 1 : 9999};
          }
        `

    if (style.styleSheet) {
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css)) // Otros navegadores
    }

    head.appendChild(style)

    document.querySelector('html')?.classList.toggle('dark', isDark)
    await nextTick()
  }).ready

  // Animate the clip path
  document.documentElement.animate(
    { clipPath: isDark ? clipPath.reverse() : clipPath },
    {
      duration: 400,
      easing: 'ease-in-out',
      pseudoElement: `::view-transition-${isDark ? 'old' : 'new'}(root)`
    }
  )
})
```

### tsconfig.json

Este archivo contiene la configuración de TypeScript.

```json
{
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
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Conclusión

Este proyecto de portafolio utiliza una variedad de tecnologías modernas para crear una experiencia de usuario atractiva y funcional. La estructura del proyecto está bien organizada, con componentes reutilizables y estilos modulares. La documentación proporcionada aquí debería ayudar a cualquier desarrollador a entender y contribuir al proyecto.