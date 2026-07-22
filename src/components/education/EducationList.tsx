import { educacion } from "@/content/perfil";
import { pickLocalizedText } from "@/lib/i18n-content";
import type { Locale } from "@/content/proyectos";

type EducationListProps = {
  locale: Locale;
};

export default function EducationList({ locale }: EducationListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {educacion.map((item) => (
        <div
          key={item.periodo.en}
          className="rounded-sm border-l-2 border-accent bg-surface p-5"
        >
          <p className="font-mono text-xs text-accent">
            {pickLocalizedText(item.periodo, locale)}
          </p>
          <h3 className="mt-2 font-semibold text-foreground">
            {pickLocalizedText(item.titulo, locale)}
          </h3>
          <p className="mt-1 text-sm text-muted">{item.institucion}</p>
        </div>
      ))}
    </div>
  );
}
