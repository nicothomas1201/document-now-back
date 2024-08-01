import { DocLanguage } from '@/app/documents/dto'

const templateDoc = `
1. Introducción
Descripción del Proyecto: Breve descripción de lo que hace la aplicación.
Tecnologías Utilizadas: Listado de tecnologías y librerías principales (React, Tailwind CSS, etc.).
2. Instalación
Requisitos Previos: Software y versiones necesarias (Node.js, npm, etc.).
Pasos de Instalación: Instrucciones detalladas para clonar el repositorio, instalar dependencias y ejecutar la aplicación en desarrollo.
3. Estructura del Proyecto
Descripción General: Explicación de la estructura de directorios y archivos del proyecto.
Componentes Principales: Detalle de los componentes más importantes y su función en la aplicación.
4. Guía de Uso
Navegación por la Aplicación: Cómo moverse por la aplicación y usar sus principales características.
Capturas de Pantalla: Imágenes que ilustren la interfaz y funcionalidades clave.
5. Desarrollo
Configuración del Entorno de Desarrollo: Instrucciones para configurar el entorno de desarrollo.
Scripts de npm: Explicación de los scripts disponibles en package.json (e.g., start, build, test).
6. Componentes y Páginas
Descripción de Componentes: Explicación de cada componente, sus props y ejemplos de uso.
Páginas: Detalle de las páginas de la aplicación, sus rutas y componentes que las componen.
7. Estilos y Temas
Sistema de Estilos: Cómo se gestionan los estilos en la aplicación (Tailwind CSS, CSS modules, etc.).
Temas: Explicación de cómo se implementan y gestionan los temas, si aplicable.
8. Gestión del Estado
Contexto o Redux: Descripción de cómo se gestiona el estado de la aplicación.
Hooks Personalizados: Descripción y ejemplos de hooks personalizados.
9. API y Servicios
Interacción con APIs: Explicación de cómo se realizan las llamadas a APIs, servicios utilizados, y manejo de respuestas y errores.
10. Pruebas
Pruebas Unitarias y de Integración: Explicación de cómo se escriben y ejecutan las pruebas.
Cobertura de Pruebas: Herramientas y comandos para verificar la cobertura de las pruebas.
11. Despliegue
Procesos de Construcción y Despliegue: Instrucciones para construir y desplegar la aplicación en producción.
12. Contribución
Guía para Contribuidores: Cómo pueden otros desarrolladores contribuir al proyecto (reglas de estilo, convenciones de commits, etc.).
Roadmap: Funcionalidades futuras o mejoras planeadas.
13. FAQ
Preguntas Frecuentes: Respuestas a preguntas comunes sobre el uso y desarrollo del proyecto.
14. Contactos
Equipo de Desarrollo: Información de contacto del equipo de desarrollo o de soporte.
`

// TODO: Agregar estructura de carpetas
export const prompt = (
  name: string,
  code: string,
  techStack: string[],
  docLang: DocLanguage,
  description: string,
) => {
  return `
      Usa esta plantilla para generar la documentación de mi proyecto de React llamado "${name}".
      Aquí está el código del repositorio: ${code}.
      Aquí hay una pequeña descripción del proyecto para que tengas un poco mas de contexto: ${description}.
      La aplicación usa las siguientes tecnologías: ${techStack.join(', ')}.
      Asegúrate de proporcionar una descripción detallada de cada sección según la estructura dada.

      Esta es la plantilla de documentación:

      ${templateDoc}

      Dame la documentación en ${docLang}:
  `
}
