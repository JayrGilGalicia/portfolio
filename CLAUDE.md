# Portafolio de Jayr — contexto del proyecto

Este archivo le da contexto a Claude Code sobre qué es este proyecto,
qué decisiones ya se tomaron y qué falta por hacer. Léelo completo antes
de empezar a trabajar.

## Quién soy / qué es esto

Portafolio personal de un desarrollador full-stack (React/Vite en frontend,
Spring Boot/Java en backend, MySQL y ClickHouse como bases de datos).
Co-fundador de NGC Software Solutions (desarrollo de software para clientes)
y desarrollador en A3E Ingenieros (proyectos internos). Basado en Morelos,
México.

El objetivo del sitio es mostrar 2 casos de estudio técnicos reales con
profundidad (no solo screenshots bonitos), para atraer tanto clientes de
NGC como oportunidades individuales.

## Stack ya decidido

- **Next.js (App Router) + TypeScript** — elegido sobre Vite puro por SEO
  real (SSR) y porque el deploy en Vercel es trivial. Es una excepción a mi
  stack habitual de cliente (React + Vite); aquí SEO importa más que en un
  proyecto de cliente típico.
- **Tailwind CSS** — ya configurado por `create-next-app`.
- **Framer Motion** — pendiente de instalar, para transiciones/hover sutiles
  en las tarjetas de proyecto. No abusar de animación (ver sección de diseño).
- **Deploy:** Vercel, conectado a GitHub para deploy automático.

No uses un CMS ni MDX todavía — el contenido de los proyectos vive en
`src/content/proyectos.ts` como datos tipados (ver abajo). Si el sitio
crece a tener blog técnico, ahí sí vale la pena evaluar MDX.

## Estructura de carpetas (ya creada)

```
/src/app
  page.tsx                     → home
  /proyectos/[slug]/           → detalle de cada proyecto (leer de proyectos.ts)
  /sobre-mi/                   → página sobre mí
/src/components                → componentes reutilizables (vacío, por armar)
/src/content/proyectos.ts      → contenido tipado de los casos de estudio
/public/images/proyectos/      → capturas de cada proyecto
```

## Contenido: los 2 casos de estudio

Ya están cargados en `src/content/proyectos.ts` con la estructura completa
(tagline, contexto, rol, stack, retos técnicos, resultados, capturas).
**No inventes ni cambies estos datos** — son hechos reales de proyectos
reales. Si falta algo o hace falta más detalle, pregúntame antes de rellenar
con contenido genérico.

Los dos proyectos:

1. **Clínica San Juan** (`clinica-san-juan`) — sistema de expedientes
   clínicos para NGC. Punto fuerte: diseño de base de datos (18 tablas, 3FN),
   sistema semáforo de signos vitales, mejora de Lighthouse de 53 a 93 vía
   code-splitting con `React.lazy`.

2. **Monitor I3** (`monitor-i3`) — plataforma de monitoreo de cumplimiento
   eléctrico (Código de Red 2.0) para A3E. Punto fuerte: pipeline ETL con
   Python + ClickHouse, mapeo de registros Modbus de un medidor SEL-735 a
   requisitos normativos, migración de Recharts a ECharts justificada
   técnicamente (control de leyendas, líneas guía regulatorias, export PNG).

Un tercer proyecto (Super Farmacias Tetela) está en fase de planeación y
**no debe incluirse todavía** — no hay código funcionando.

### Sobre las capturas

Las imágenes en `public/images/proyectos/` ya están puestas y aprobadas
para uso público:

- `clinica-san-juan-expediente.png` — usa un **paciente ficticio**
  (verificado, sin PII real).
- `monitor-i3-overview.png` y `monitor-i3-detalle-parametro.png` — capturas
  reales de producción, aprobadas para mostrar públicamente.

**Regla importante:** si en algún momento agrego más capturas del sistema
de Clínica San Juan, verifica conmigo antes de usarlas — los expedientes
reales de pacientes contienen datos personales (nombre, teléfono,
dirección, signos vitales) y **no deben publicarse**. Ante la duda, pregunta
en vez de asumir que una imagen es segura de usar.

## Plantilla de caso de estudio (para consistencia visual)

Cada página de proyecto debe seguir este orden:

1. Título + tagline
2. Contexto (el problema de negocio, no solo lo técnico)
3. Mi rol
4. Stack técnico (con breve por qué de las decisiones no obvias)
5. Retos técnicos → cada uno como problema → decisión → resultado
6. Resultados/métricas
7. Capturas

## Dirección de diseño

Todavía no hay una dirección visual definida — es lo primero que hay que
resolver antes de construir componentes. Al diseñar:

- Evitar el look genérico de "portafolio de IA" (crema + serif + acento
  terracota, o negro + verde ácido, o estilo periódico con hairlines).
- Basar la identidad visual en el contenido real: esto es el portafolio de
  alguien que trabaja con sistemas de datos regulados (salud, energía) —
  hay una oportunidad de tomar señales visuales de dashboards técnicos
  reales (como las capturas de Monitor I3) en vez de un portafolio
  genérico de "desarrollador creativo".
- Responsive hasta mobile, focus visible en teclado, respetar
  `prefers-reduced-motion`.

## Convenciones de código

- Componentes en `src/components`, un archivo por componente.
- Contenido de proyectos SIEMPRE desde `proyectos.ts`, nunca hardcodeado
  en las páginas.
- Copys de UI en español (el sitio es en español).
- Commits pequeños y descriptivos.

## Qué falta por hacer

1. Definir dirección visual (paleta, tipografía, layout) antes de tocar
   componentes — seguir el proceso de brainstorm → crítica → build.
2. Construir el home (`/`) con hero + preview de los 2 proyectos.
3. Construir `/proyectos/[slug]` leyendo de `proyectos.ts`.
4. Construir `/sobre-mi`.
5. Sección de contacto (email directo o formulario simple).
6. Deploy a Vercel.
