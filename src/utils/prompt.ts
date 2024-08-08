import { DocLanguage } from '@/app/documents/dto'

// TODO: Agregar estructura de carpetas
export const generatePrompt = (
  name: string,
  code: string[],
  techStack: string[],
  docLang: DocLanguage,
  description: string,
) => {
  return code.map((codeString) => {
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
      Este es un ejemplo de como debes de explicar cada archivo:

      Archivo:
      import { ScrollArea } from '@/components/ui/scroll-area'
      import { LoaderCircle } from 'lucide-react'
      import { useEffect, useRef } from 'react'

      interface Props {
        loading: boolean
        children: React.ReactNode
        onIntersect?: () => void
        intersect?: boolean
      }

      export function CardList({
        loading,
        children,
        onIntersect = () => {},
        intersect = false,
      }: Props) {
        const scrollAreaRef = useRef<HTMLDivElement>(null)
        const itemRef = useRef<HTMLDivElement>(null)

        const callback: IntersectionObserverCallback = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              onIntersect()
            }
          })
        }

        useEffect(() => {
          if (!scrollAreaRef.current) return

          const options: IntersectionObserverInit = {
            root: scrollAreaRef.current,
            rootMargin: '0px',
            threshold: 1.0,
          }

          const observer = new IntersectionObserver(callback, options)
          if (itemRef.current) observer.observe(itemRef.current)

          if (!intersect && itemRef.current) observer.unobserve(itemRef.current)

          return () => {
            if (itemRef.current) observer.unobserve(itemRef.current)
          }
        }, [scrollAreaRef, itemRef, intersect])

        return (
          <ScrollArea
            ref={scrollAreaRef}
            className={\`
            w-full h-[350px] relative
            after:w-[93%] after:left-1/2 after:-translate-x-1/2 after:absolute after:h-8 after:top-0 after:bg-gradient-to-b after:from-background after:to-background/0
            before:z-30 before:w-[93%] before:left-1/2 before:-translate-x-1/2 before:absolute before:h-8 before:bottom-0 before:bg-gradient-to-t before:from-background before:to-background/0
          \`}
          >
            <div className="relative flex flex-col items-center gap-4 px-5 py-5">
              {children}
              {loading ? (
                <span className="absolute bottom-0">
                  <LoaderCircle size={30} className="animate-spin" />
                </span>
              ) : null}
            </div>
            <div ref={itemRef} className="w-full h-1"></div>
          </ScrollArea>
        )
      }


      Ejemplo:
      Archivo: CardList.tsx
      Ruta: src/components/ui/CardList.tsx

      Este archivo define un componente de React llamado CardList, que se encarga de renderizar una lista de elementos dentro de un área de scroll, mostrar un indicador de carga (LoaderCircle) y manejar la detección de intersecciones utilizando un IntersectionObserver.

      Descripción del Componente CardList
      Props del Componente:

      loading (boolean):
      Indica si se debe mostrar un indicador de carga (LoaderCircle). Cuando loading es true, el componente muestra un spinner en la parte inferior.

      Ejemplo de uso:

      jsx
      Copiar código
      <CardList loading={true}>
        <div>Elemento 1</div>
        <div>Elemento 2</div>
      </CardList>
      children (React.ReactNode):
      Representa los elementos secundarios que serán renderizados dentro del área de scroll.

      Ejemplo de uso:

      jsx
      Copiar código
      <CardList loading={false}>
        <div>Elemento 1</div>
        <div>Elemento 2</div>
      </CardList>
      onIntersect (función, opcional):
      Función de callback que se ejecuta cuando un elemento dentro del área de scroll se intersecta con el viewport. Su valor por defecto es una función vacía.

      Ejemplo de uso:

      jsx
      Copiar código
      <CardList
        loading={false}
        onIntersect={() => {
          console.log("Elemento intersectado");
        }}
      >
        <div>Elemento 1</div>
        <div>Elemento 2</div>
      </CardList>
      intersect (boolean, opcional):
      Controla si el IntersectionObserver debe observar o dejar de observar el elemento referenciado. Su valor por defecto es false.

      Ejemplo de uso:

      jsx
      Copiar código
      <CardList loading={false} intersect={true}>
        <div>Elemento 1</div>
        <div>Elemento 2</div>
      </CardList>
      Detalles de Implementación
      Referencias (useRef):

      scrollAreaRef:
      Referencia al div que actúa como contenedor del área de scroll. Es utilizado como el root en el IntersectionObserver.

      itemRef:
      Referencia a un div vacío que se encuentra al final del contenido renderizado. Este div es el que se observa para detectar cuándo llega al final del área de scroll.

      Ejemplo de uso:

      jsx
      Copiar código
      const scrollAreaRef = useRef<HTMLDivElement>(null)
      const itemRef = useRef<HTMLDivElement>(null)
      Callback de Intersección (callback):

      La función callback recibe las entradas (entries) del IntersectionObserver y, para cada entrada que esté intersectando (entry.isIntersecting), ejecuta la función onIntersect.
      Ejemplo de código:

      jsx
      Copiar código
      const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect()
          }
        })
      }
      Efecto de Observación (useEffect):

      El useEffect configura el IntersectionObserver cuando el componente se monta y lo limpia cuando se desmonta.
      Ejemplo de código:

      jsx
      Copiar código
      useEffect(() => {
        if (!scrollAreaRef.current) return

        const options: IntersectionObserverInit = {
          root: scrollAreaRef.current,
          rootMargin: '0px',
          threshold: 1.0,
        }

        const observer = new IntersectionObserver(callback, options)
        if (itemRef.current) observer.observe(itemRef.current)

        if (!intersect && itemRef.current) observer.unobserve(itemRef.current)

        return () => {
          if (itemRef.current) observer.unobserve(itemRef.current)
        }
      }, [scrollAreaRef, itemRef, intersect])
      Renderizado:
      Componente Principal (ScrollArea):

      Renderiza un área de scroll utilizando el componente ScrollArea, que recibe la referencia scrollAreaRef para su manipulación posterior.
      Ejemplo de código:

      jsx
      Copiar código
      <ScrollArea ref={scrollAreaRef} className="w-full h-[350px] relative">
        {/* Contenido */}
      </ScrollArea>
      Contenedor de Contenido (div):

      Los children se renderizan dentro de un div que actúa como contenedor de los elementos de la lista. Además, se aplica un padding y un gap entre los elementos para un diseño alineado verticalmente.
      Ejemplo de código:

      jsx
      Copiar código
      <div className="relative flex flex-col items-center gap-4 px-5 py-5">
        {children}
        {loading ? (
          <span className="absolute bottom-0">
            <LoaderCircle size={30} className="animate-spin" />
          </span>
        ) : null}
      </div>
      Indicador de Carga (LoaderCircle):

      Si loading es true, un spinner animado se muestra en la parte inferior de la lista.
      Ejemplo de código:

      jsx
      Copiar código
      {loading ? (
        <span className="absolute bottom-0">
          <LoaderCircle size={30} className="animate-spin" />
        </span>
      ) : null}
      Elemento de Observación (itemRef):

      Un div vacío al final del contenido sirve como objetivo del IntersectionObserver, permitiendo detectar cuándo el usuario ha llegado al final del área de scroll.
      Ejemplo de código:

      jsx
      Copiar código
      <div ref={itemRef} className="w-full h-1"></div>
      Conclusión:
      El componente CardList está diseñado para manejar de manera eficiente listas de elementos en un área de scroll, con una carga adicional de contenido basada en la observación de intersección. Además, está preparado para mostrar un indicador de carga mientras se espera la adición de nuevos elementos.


      Usa un título grande que diga "Archivos" y subtítulos con el nombre de cada archivo y su ruta.

      IMPORTANTE: Nunca copies el archivo completo en la respuesta. solo apóyate con fragmentos del archivo para tus explicaciones
      
      Quiero que generes la documentación en ${docLang} y que incluyas ejemplos de código siempre que sea posible.
  `
  })
}
