"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

const localeLabels: Record<string, string> = {
  en: "EN",
  es: "ES",
};

export default function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="flex items-center gap-1 rounded-sm border border-border p-1 font-mono text-xs"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          aria-current={loc === locale ? "true" : undefined}
          onClick={() =>
            router.replace(
              // @ts-expect-error -- next-intl no puede validar que `params`
              // coincida con `pathname` en tiempo de compilación; en runtime
              // siempre coinciden porque vienen de la ruta actual.
              { pathname, params },
              { locale: loc },
            )
          }
          className={`rounded-sm px-2 py-1 transition-colors ${
            loc === locale
              ? "bg-primary text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
