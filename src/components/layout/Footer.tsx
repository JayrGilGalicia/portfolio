import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 font-mono text-sm text-muted sm:flex-row sm:px-6">
        <p>{t("rights", { year })}</p>
        <a
          href="mailto:jaly.ik.2@gmail.com"
          className="transition-colors hover:text-primary"
        >
          jaly.ik.2@gmail.com
        </a>
      </div>
    </footer>
  );
}
