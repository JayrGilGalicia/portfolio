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
      className="flex items-center gap-1 rounded-full border border-black/[.08] p-1 text-sm dark:border-white/[.145]"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          aria-current={loc === locale ? "true" : undefined}
          onClick={() =>
            router.replace({ pathname, params }, { locale: loc })
          }
          className={`rounded-full px-3 py-1 transition-colors ${
            loc === locale
              ? "bg-foreground text-background"
              : "text-zinc-600 hover:bg-black/[.04] dark:text-zinc-400 dark:hover:bg-white/[.08]"
          }`}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
