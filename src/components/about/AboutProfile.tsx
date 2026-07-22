import { perfil, bio } from "@/content/perfil";
import { pickLocalizedText } from "@/lib/i18n-content";
import type { Locale } from "@/content/proyectos";
import { getTranslations } from "next-intl/server";

type AboutProfileProps = {
  locale: Locale;
};

export default async function AboutProfile({ locale }: AboutProfileProps) {
  const t = await getTranslations("about");

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start lg:gap-12">
      <div className="rounded-sm border border-border bg-surface p-6">
        <p className="font-mono text-xs text-accent">// perfil</p>
        <dl className="mt-4 space-y-4">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">
              {t("labelNombre")}
            </dt>
            <dd className="mt-1 text-sm text-foreground">{perfil.nombre}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">
              {t("labelRol")}
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {pickLocalizedText(perfil.rol, locale)}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">
              {t("labelStack")}
            </dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {perfil.stackPrincipal.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-border px-2 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">
              {t("labelEnfoque")}
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {pickLocalizedText(perfil.enfoque, locale)}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">
              {t("labelActualmente")}
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {pickLocalizedText(perfil.actualmente, locale)}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">
              {t("labelCofundador")}
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              <a
                href={perfil.cofundadorUrl}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border underline-offset-2 transition-colors hover:text-accent hover:decoration-accent"
              >
                {pickLocalizedText(perfil.cofundador, locale)}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-col gap-5 text-muted">
        {bio.map((paragraph, index) => (
          <p key={index}>{pickLocalizedText(paragraph, locale)}</p>
        ))}
      </div>
    </div>
  );
}
