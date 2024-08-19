import { DocLanguage } from '@/app/documents/dto'

// TODO: Agregar estructura de carpetas
export const generatePrompt = (
  name: string,
  code: { filesIntro: string; files: string[]; structure: string },
  techStack: string[],
  docLang: DocLanguage,
  description: string,
) => {
  const introduction = `
    Quiero que generes una introducción a la documentación de un proyecto llamado ${name} con la siguiente descripción,
    tech stack y package.json

    descripción: ${description}

    tech stack: ${techStack}

    package.json y md: ${code.filesIntro}

    Menciona las tecnologías utilizadas y explica su propósito dentro del proyecto. Estas tecnologías pueden encontrarse en las dependencias del package.json o en la lista proporcionada al inicio.
    Incluye una explicación de los scripts en el package.json, detallando para qué sirve cada uno.
    Utiliza un título grande que diga "Introducción" y subtítulos para cada explicación de dependencias y scripts.

    quiero que generes la documentación en ${docLang}. y quiero que antes de empezar pongas un titulo que diga "introducción" o "introduction" dependiendo del lenguaje y quiero que sea super grande, pongo con #
  `

  const structure = `
    Quiero que generes una documentación sobre la siguiente estructura de carpetas de un proyecto de javascript

    ${code.structure}

    Quiero que expliques que se almacena en cada carpeta y porque, también quiero que lo muestres de la siguiente manera

    project-root/
        ├── src/
        │   ├── components/
        │   ├── pages/
        │   ├── styles/
        │   └── index.tsx
        ├── public/
        ├── package.json
        └── README.md

    quiero que lo hagas en ${docLang} y quiero que antes de hacerlo pongas un titulo grande que diga "Estructura" o "Structure" dependiendo del idioma y quiero que lo pongas muy grande, ponlo con #
    y al terminar todo pon otro titulo grande que diga "Archivos" o "Files" dependiendo del idioma, también ponlo con #
  `

  const files = code.files.map((currentFiles) => {
    return `
      ${currentFiles}
      
      Quiero que expliques los 3 anteriores archivos de código
      Quiero que expliques que hace cada bloque de código y des ejemplos
      También quiero que si se hace algún llamado a una api expliques para que sirve esa api
      Si ves que usa alguna librería explica porque y para que se usa
      Quiero que pongas el nombre del archivo en un titulo grande osea con ## el resto de títulos ponlos con ###

      No des una conclusión final.
      Si ves algún código relacionado con un svg o de iconos intenta ignorarlo o dar un resumen de que hace ese archivo y ya
  `
  })

  return [introduction, structure, ...files]
}

/*
  return `
      Nombre del Proyecto: ${name}
      Tecnologías Utilizadas: ${techStack}
      Descripción del Proyecto: ${description}

      Archivos del Proyecto:
      ${codeString}

      Solicitud de Documentación:
      Quiero que generes una documentación completa del código proporcionado. Sigue esta estructura:

      Introducción:
      Proporciona un resumen general del proyecto, basado en la descripción y los archivos suministrados.
      Menciona las tecnologías utilizadas y explica su propósito dentro del proyecto. Estas tecnologías pueden encontrarse en las dependencias del package.json o en la lista proporcionada al inicio.
      Incluye una explicación de los scripts en el package.json, detallando para qué sirve cada uno.
      Utiliza un título grande que diga "Introducción" y subtítulos para cada explicación de dependencias y scripts.
      
      Estructura del Proyecto:
      Describe cómo está organizada la estructura de carpetas y archivos del proyecto.
      Explica el propósito de cada carpeta y lo que debería contener.
      Proporciona una representación en árbol de la estructura del proyecto similar a esta:
      
      project-root/
        ├── src/
        │   ├── components/
        │   ├── pages/
        │   ├── styles/
        │   └── index.tsx
        ├── public/
        ├── package.json
        └── README.md

      No muestres los archivos específicos, pero indica el propósito general de cada directorio.
      La información de como esta estructurado el proyecto la puedes tomar en referencia a la ruta de cada archivo
      
      Contextos:
      Identifica y documenta cualquier archivo que gestione contextos en React. Explica cómo y dónde se utilizan estos contextos.
      Proporciona ejemplos de código y detalles sobre los estados (useState) o variables que se comparten.
      Si se utiliza Zustand, Redux, u otra herramienta de manejo de estado, inclúyelos también y de la misma forma.
      Usa un título grande que diga "Contextos" y subtítulos con el nombre de cada contexto.
      
      Rutas:
      Documenta cualquier archivo que maneje rutas utilizando herramientas como react-router-dom, Wouter, u otras similares.
      Explica la función de cada ruta y el componente que se muestra en cada una.
      Incluye ejemplos de código cuando sea posible.
      Usa un título grande que diga "Rutas" y subtítulos para cada ruta.
      
      Hooks:
      Explica detalladamente cada hook personalizado en el proyecto.
      Proporciona ejemplos de código y menciona en qué archivos se utilizan.
      Si no hay hooks personalizados, omite esta sección.
      Usa un título grande que diga "Hooks" y subtítulos con el nombre de cada hook.
      
      APIs:
      Identifica y documenta todas las APIs que el proyecto llama, ya sea con fetch, axios, o herramientas similares.
      Explica la función de cada API y dónde se utilizan en el código.
      Incluye ejemplos de código cuando sea posible.
      Si no se realizan llamadas a APIs, omite esta sección.
      Usa un título grande que diga "APIs" y subtítulos descriptivos para cada API.
      
      Archivos:
      Proporciona una explicación muy detallada de cada archivo proporcionado.
      Describe las partes más importantes del código, centrándote en useEffect, useState, y funciones clave.
      No copies el archivo completo; solo incluye partes relevantes del código para apoyar tus explicaciones.
      Usa un título grande que diga "Archivos" y subtítulos con el nombre de cada archivo y su ruta.
      
      Quiero que generes la documentación en ${docLang} y que incluyas ejemplos de código siempre que sea posible.
  `

*/
