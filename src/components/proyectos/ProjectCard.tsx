"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import type { Proyecto, Locale } from "@/content/proyectos";
import { pickLocalizedText } from "@/lib/i18n-content";

type ProjectCardProps = {
  proyecto: Proyecto;
  locale: Locale;
  priority?: boolean;
};

export default function ProjectCard({ proyecto, locale, priority }: ProjectCardProps) {
  const t = useTranslations("projects");
  const prefersReducedMotion = useReducedMotion();
  const thumbnail = proyecto.capturas[0];

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col overflow-hidden rounded-sm border border-border bg-surface"
    >
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <Image
          src={thumbnail.src}
          alt={pickLocalizedText(thumbnail.alt, locale)}
          fill
          priority={priority}
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {pickLocalizedText(proyecto.titulo, locale)}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {pickLocalizedText(proyecto.tagline, locale)}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted">
          {proyecto.stack.map((tech) => (
            <li key={tech} className="rounded-sm border border-border px-2 py-1">
              {tech}
            </li>
          ))}
        </ul>
        <Link
          href={`/proyectos/${proyecto.slug}`}
          className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent"
        >
          {t("viewCase")}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
