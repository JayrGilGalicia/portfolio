"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ThemeToggle from "@/components/theme/ThemeToggle";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

const SECTIONS = [
  { id: "home" },
  { id: "about" },
  { id: "experience" },
  { id: "projects" },
  { id: "stack" },
  { id: "education" },
  { id: "contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const [activeId, setActiveId] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = SECTIONS.map((section) =>
      document.getElementById(section.id),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          jayr<span className="text-accent">.</span>dev
        </Link>

        <nav className="hidden items-center gap-6 font-mono text-sm text-muted lg:flex">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`border-b pb-0.5 transition-colors ${
                activeId === section.id
                  ? "border-accent text-foreground"
                  : "border-transparent hover:text-foreground"
              }`}
            >
              {t(section.id)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={t("menu")}
            className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-border px-4 py-4 font-mono text-sm lg:hidden"
        >
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMenuOpen(false)}
              className={`rounded-sm px-2 py-2 transition-colors ${
                activeId === section.id
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {t(section.id)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
