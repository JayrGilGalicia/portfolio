export type Locale = "en" | "es";

export type LocalizedText = {
  en: string;
  es: string;
};

export type Proyecto = {
  slug: string;
  titulo: LocalizedText;
  tagline: LocalizedText;
  contexto: LocalizedText;
  rol: LocalizedText;
  stack: string[];
  retos: { titulo: LocalizedText; descripcion: LocalizedText }[];
  resultados: LocalizedText[];
  capturas: { src: string; alt: LocalizedText }[];
};

export const proyectos: Proyecto[] = [
  {
    slug: "clinica-san-juan",
    titulo: { en: "Clínica San Juan", es: "Clínica San Juan" },
    tagline: {
      en: "Clinical records management system with real-time vital signs tracking",
      es: "Sistema de gestión de expedientes clínicos con seguimiento en tiempo real de signos vitales",
    },
    contexto: {
      en: "A clinic that needed to digitize patient histories, prescriptions, and progress notes, replacing paper records with a centralized system.",
      es: "Clínica que necesitaba digitalizar historiales, prescripciones y evolución de pacientes, reemplazando expedientes en papel por un sistema centralizado.",
    },
    rol: {
      en: "Database design, full-stack development (frontend and backend), and deployment.",
      es: "Diseño de base de datos, desarrollo full-stack (frontend y backend) y despliegue.",
    },
    stack: ["React", "Vite", "Spring Boot", "MySQL", "Cypress", "iText 7"],
    retos: [
      {
        titulo: {
          en: "Complex clinical data model",
          es: "Modelo de datos clínico complejo",
        },
        descripcion: {
          en: "Designed an 18-table schema in 3NF, with a clinical record-type discriminator (outpatient visit vs. hospitalization) and a medical history that belongs directly to the patient, not to each individual visit.",
          es: "Diseño de un esquema de 18 tablas en 3FN, con un discriminador de tipo de registro clínico (consulta vs. hospitalización) y una historia clínica que pertenece directamente al paciente, no a cada visita.",
        },
      },
      {
        titulo: {
          en: "Vital signs traffic-light system",
          es: "Sistema semáforo de signos vitales",
        },
        descripcion: {
          en: "A vital_signs entity with configurable clinical thresholds that visually flags (green/yellow/red) out-of-range values, such as heart rate or oximetry.",
          es: "Entidad vital_signs con umbrales clínicos configurables que marca visualmente (verde/amarillo/rojo) valores fuera de rango, como frecuencia cardiaca u oximetría.",
        },
      },
      {
        titulo: {
          en: "Initial load performance",
          es: "Performance de carga inicial",
        },
        descripcion: {
          en: "Lighthouse score of 53/100 due to a monolithic bundle. Resolved with route-level code-splitting using React.lazy, reaching 93/100.",
          es: "Lighthouse en 53/100 por bundle monolítico. Se resolvió con code-splitting a nivel de ruta usando React.lazy, alcanzando 93/100.",
        },
      },
      {
        titulo: {
          en: "Record export",
          es: "Exportación de expedientes",
        },
        descripcion: {
          en: "PDF generation of the record's \"Front Sheet\" using iText 7 from the backend.",
          es: "Generación de PDF de la 'Hoja Frontal' del expediente con iText 7 desde el backend.",
        },
      },
    ],
    resultados: [
      {
        en: "Lighthouse: 53 → 93 after route-based code-splitting",
        es: "Lighthouse: 53 → 93 tras code-splitting por rutas",
      },
      {
        en: "E2E coverage with Cypress over critical flows (role-based sessions)",
        es: "Cobertura E2E con Cypress sobre flujos críticos (sesiones por rol)",
      },
      {
        en: "System in active use by the clinic for records and vital signs management",
        es: "Sistema en uso por la clínica para gestión de expedientes y signos vitales",
      },
    ],
    capturas: [
      {
        src: "/images/proyectos/clinica-san-juan-expediente.png",
        alt: {
          en: "Patient record view with vital signs and traffic-light system",
          es: "Vista de expediente de paciente con signos vitales y sistema semáforo",
        },
      },
    ],
  },
  {
    slug: "monitor-i3",
    titulo: { en: "Monitor I3", es: "Monitor I3" },
    tagline: {
      en: "Electrical compliance monitoring platform for Código de Red 2.0",
      es: "Plataforma de monitoreo de cumplimiento eléctrico para el Código de Red 2.0",
    },
    contexto: {
      en: "Real-time regulatory power quality monitoring: voltage, THD, flicker, power factor, and imbalance, against the limits of Mexico's Código de Red 2.0.",
      es: "Monitoreo regulatorio de calidad de energía en tiempo real: voltaje, THD, flicker, factor de potencia y desbalance, contra los límites del Código de Red 2.0 mexicano.",
    },
    rol: {
      en: "Backend development (Spring Boot), ETL pipeline, and collaboration on the visualization layer.",
      es: "Desarrollo backend (Spring Boot), pipeline ETL y colaboración en la capa de visualización.",
    },
    stack: ["Spring Boot", "ClickHouse", "Python", "ECharts"],
    retos: [
      {
        titulo: {
          en: "Mapping Modbus registers to regulatory requirements",
          es: "Mapeo de registros Modbus a requisitos normativos",
        },
        descripcion: {
          en: "Mapped the Modbus registers of an SEL-735 meter to the parameters required by Código de Red 2.0, identifying gaps in THD-V/I, flicker (Pst/Plt), and VSSI.",
          es: "Se mapearon los registros Modbus de un medidor SEL-735 a los parámetros exigidos por el Código de Red 2.0, identificando brechas en THD-V/I, flicker (Pst/Plt) y VSSI.",
        },
      },
      {
        titulo: {
          en: "ETL pipeline and time-series ingestion",
          es: "Pipeline ETL e ingestión a series de tiempo",
        },
        descripcion: {
          en: "A Python pipeline that loads SEL-735 data (Excel) into ClickHouse, handling timezone management and multi-table consolidation.",
          es: "Pipeline en Python que carga datos del SEL-735 (Excel) a ClickHouse, resolviendo manejo de timezone y consolidación multi-tabla.",
        },
      },
      {
        titulo: {
          en: "Flexible visualization for compliance reporting",
          es: "Visualización flexible para reportes de cumplimiento",
        },
        descripcion: {
          en: "Migrated from Recharts to ECharts because the project required finer control over how data is displayed: configurable legends, guide lines for regulatory limits, and PNG export.",
          es: "Migración de Recharts a ECharts porque el proyecto requería mayor control sobre cómo se muestran los datos: leyendas configurables, líneas guía para límites regulatorios y exportación a PNG.",
        },
      },
    ],
    resultados: [
      {
        en: "Production dashboard monitoring voltage, frequency, THD, flicker, imbalance, and power factor in real time against regulatory limits",
        es: "Dashboard en producción monitoreando en tiempo real voltaje, frecuencia, THD, flickers, desbalance y factor de potencia contra límites normativos",
      },
      {
        en: "Data and chart export for regulatory compliance reports",
        es: "Exportación de datos y gráficas para reportes de cumplimiento regulatorio",
      },
    ],
    capturas: [
      {
        src: "/images/proyectos/monitor-i3-overview.png",
        alt: {
          en: "MONITOR i3 overview dashboard with power quality metrics",
          es: "Dashboard de overview de MONITOR i3 con métricas de calidad de energía",
        },
      },
      {
        src: "/images/proyectos/monitor-i3-detalle-parametro.png",
        alt: {
          en: "Detail view of the Long Time Flickers parameter with an ECharts chart",
          es: "Vista de detalle de parámetro Long Time Flickers con gráfica ECharts",
        },
      },
    ],
  },
];
