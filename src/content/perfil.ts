import type { LocalizedText } from "./proyectos";

export type PerfilInfo = {
  nombre: string;
  rol: LocalizedText;
  stackPrincipal: string[];
  enfoque: LocalizedText;
  actualmente: LocalizedText;
  cofundador: LocalizedText;
  cofundadorUrl: string;
};

export const perfil: PerfilInfo = {
  nombre: "Jayr Gil Galicia Jiménez",
  rol: {
    es: "Desarrollador Full Stack",
    en: "Full Stack Developer",
  },
  stackPrincipal: ["Java", "Spring Boot", "React"],
  enfoque: {
    es: "Sistemas industriales y regulados",
    en: "Industrial & regulated systems",
  },
  actualmente: {
    es: "Monitor I3 @ A3E Ingenieros",
    en: "Monitor I3 @ A3E Ingenieros",
  },
  cofundador: {
    es: "NGC Software Solutions",
    en: "NGC Software Solutions",
  },
  cofundadorUrl: "https://ngcsoftwaresolutions.com/",
};

export const bio: LocalizedText[] = [
  {
    es: "Soy Jayr Gil Galicia Jiménez, desarrollador Full Stack especializado en construir sistemas robustos de punta a punta, desde APIs backend hasta interfaces en tiempo real. Trabajo principalmente con Java (Spring Boot) y React, integrando bases de datos relacionales y no relacionales según las necesidades del proyecto.",
    en: "I'm Jayr Gil Galicia Jiménez, a Full Stack developer specialized in building robust end-to-end systems, from backend APIs to real-time interfaces. I work primarily with Java (Spring Boot) and React, integrating relational and non-relational databases depending on the project's needs.",
  },
  {
    es: "Me interesa particularmente el desarrollo de software para sectores industriales y regulados, donde la precisión de los datos y la integración con hardware real (medidores, protocolos como Modbus TCP) son tan importantes como la experiencia de usuario. Actualmente desarrollo Monitor I3, una plataforma de monitoreo de variables eléctricas para cumplimiento normativo, y colaboro en sistemas de gestión de calidad que digitalizan procesos internos.",
    en: "I'm particularly interested in software for industrial and regulated sectors, where data accuracy and integration with real hardware (meters, protocols like Modbus TCP) matter just as much as the user experience. I'm currently developing Monitor I3, an electrical variable monitoring platform for regulatory compliance, and collaborating on quality management systems that digitize internal processes.",
  },
  {
    es: "Además de mi trabajo en A3E Ingenieros, soy cofundador de NGC Software Solutions, donde llevo software a la medida a clientes reales, desde la conversación inicial hasta la entrega.",
    en: "Beyond my work at A3E Ingenieros, I'm co-founder of NGC Software Solutions, where I deliver custom software to real clients, from the initial conversation through to delivery.",
  },
];

export type ExperienciaItem = {
  rol: LocalizedText;
  empresa: string;
  periodo: LocalizedText;
  actual?: boolean;
  descripcion: LocalizedText;
  tecnologias: string[];
};

export const experiencia: ExperienciaItem[] = [
  {
    rol: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    empresa: "A3E Ingenieros Especialistas en Energía Eléctrica",
    periodo: {
      es: "Enero 2026 — Presente",
      en: "January 2026 — Present",
    },
    actual: true,
    descripcion: {
      es: "Desarrollo del backend de Monitor I3, plataforma de monitoreo de variables eléctricas construida con Java Spring Boot, con integración a dispositivos industriales vía Modbus TCP y almacenamiento en ClickHouse para series de tiempo. Implementación del frontend en React para visualización en tiempo real de las variables monitoreadas. Mantenimiento del sistema de gestión de calidad (SGC) en PHP Symfony, orientado a la trazabilidad de procesos internos, incluyendo migraciones de base de datos e implementación de pruebas automatizadas.",
      en: "Backend development of Monitor I3, an electrical variable monitoring platform built with Java Spring Boot, integrating industrial devices via Modbus TCP and storing time-series data in ClickHouse. Frontend implementation in React for real-time visualization of monitored variables. Maintenance of the quality management system (QMS) in PHP Symfony, focused on internal process traceability, including database migrations and automated test implementation.",
    },
    tecnologias: ["Java", "Spring Boot", "React", "Modbus TCP", "ClickHouse", "PHP", "Symfony"],
  },
  {
    rol: {
      es: "Analista Programador",
      en: "Programmer Analyst",
    },
    empresa: "Centro de Desarrollo de Software (CDS-UTEZ)",
    periodo: {
      es: "Abril 2024 — Agosto 2025",
      en: "April 2024 — August 2025",
    },
    descripcion: {
      es: "Desarrollo y mantenimiento de aplicaciones backend con Spring Boot e interfaces frontend con React.js, gestión de bases de datos relacionales (MySQL, PostgreSQL) y participación en proyectos bajo metodología SCRUM, colaborando en la mejora continua de procesos y prácticas de desarrollo del equipo.",
      en: "Development and maintenance of backend applications with Spring Boot and frontend interfaces with React.js, management of relational databases (MySQL, PostgreSQL), and participation in projects under the SCRUM methodology, collaborating on continuous improvement of the team's development processes and practices.",
    },
    tecnologias: ["Spring Boot", "React.js", "MySQL", "PostgreSQL", "SCRUM"],
  },
];

export type EducacionItem = {
  titulo: LocalizedText;
  institucion: string;
  periodo: LocalizedText;
};

export const educacion: EducacionItem[] = [
  {
    titulo: {
      es: "Ingeniería en Desarrollo y Gestión de Software",
      en: "Engineering in Software Development and Management",
    },
    institucion: "Universidad Tecnológica Emiliano Zapata (UTEZ)",
    periodo: {
      es: "Septiembre 2024 – Abril 2026",
      en: "September 2024 – April 2026",
    },
  },
  {
    titulo: {
      es: "Técnico Superior Universitario en Desarrollo de Software",
      en: "University Technician in Software Development",
    },
    institucion: "Universidad Tecnológica Emiliano Zapata (UTEZ)",
    periodo: {
      es: "Septiembre 2022 – Agosto 2024",
      en: "September 2022 – August 2024",
    },
  },
];
