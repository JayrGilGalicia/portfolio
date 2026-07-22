import { experiencia } from "@/content/perfil";
import { pickLocalizedText } from "@/lib/i18n-content";
import type { Locale } from "@/content/proyectos";
import { getTranslations } from "next-intl/server";

type ExperienceTimelineProps = {
  locale: Locale;
};

export default async function ExperienceTimeline({ locale }: ExperienceTimelineProps) {
  const t = await getTranslations("experience");

  return (
    <ol className="relative list-none space-y-10 before:absolute before:top-2 before:bottom-2 before:left-2 before:w-px before:bg-border">
      {experiencia.map((item) => (
        <li key={item.empresa} className="relative pl-8">
          <span
            className={`absolute top-1 left-0 h-4 w-4 rounded-full border-2 ${
              item.actual ? "border-accent bg-accent" : "border-border bg-background"
            }`}
          />
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold text-foreground">
              {pickLocalizedText(item.rol, locale)}
            </h3>
            {item.actual && (
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-accent px-2 py-0.5 font-mono text-xs text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
                {t("current")}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-muted">{item.empresa}</p>
          <p className="mt-1 font-mono text-xs text-accent">
            {pickLocalizedText(item.periodo, locale)}
          </p>
          <p className="mt-3 max-w-2xl text-muted">
            {pickLocalizedText(item.descripcion, locale)}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2 font-mono text-xs text-muted">
            {item.tecnologias.map((tech) => (
              <li key={tech} className="rounded-sm border border-border px-2 py-1">
                {tech}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
