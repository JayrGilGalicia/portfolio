import { getLocale, getTranslations } from "next-intl/server";
import { proyectos, type Locale } from "@/content/proyectos";
import ProjectCard from "@/components/proyectos/ProjectCard";
import AboutProfile from "@/components/about/AboutProfile";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import EducationList from "@/components/education/EducationList";

const STACK = {
  frontend: ["React.js", "Next.js", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Java", "Spring Boot"],
  data: ["MySQL", "ClickHouse", "Python"],
  tools: ["Cypress", "ECharts", "iText 7"],
};

export default async function Home() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("hero");
  const tAbout = await getTranslations("about");
  const tExperience = await getTranslations("experience");
  const tProjects = await getTranslations("projects");
  const tStack = await getTranslations("stack");
  const tEducation = await getTranslations("education");
  const tContact = await getTranslations("contact");

  return (
    <>
      <section
        id="home"
        className="mx-auto flex max-w-5xl scroll-mt-20 flex-col gap-6 px-4 py-16 sm:px-6 sm:py-24 lg:py-32"
      >
        <p className="font-mono text-sm text-accent">{t("greeting")}</p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {t("name")}
        </h1>
        <p className="max-w-xl text-lg text-muted">{t("role")}</p>
        <p className="max-w-2xl text-base text-muted">{t("tagline")}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            {t("ctaSecondary")}
          </a>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
      >
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
          {tAbout("heading")}
        </h2>
        <div className="mt-8">
          <AboutProfile locale={locale} />
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
      >
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
          {tExperience("heading")}
        </h2>
        <div className="mt-10">
          <ExperienceTimeline locale={locale} />
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
      >
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
          {tProjects("heading")}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {proyectos.map((proyecto, index) => (
            <ProjectCard
              key={proyecto.slug}
              proyecto={proyecto}
              locale={locale}
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      <section
        id="stack"
        className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
      >
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
          {tStack("heading")}
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {(
            [
              ["frontend", STACK.frontend],
              ["backend", STACK.backend],
              ["data", STACK.data],
              ["tools", STACK.tools],
            ] as const
          ).map(([key, items]) => (
            <div key={key}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                {tStack(key)}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2 font-mono text-xs text-muted">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-border px-2 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="education"
        className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
      >
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
          {tEducation("heading")}
        </h2>
        <div className="mt-8">
          <EducationList locale={locale} />
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
      >
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
          {tContact("heading")}
        </h2>
        <p className="mt-4 max-w-xl text-muted">{tContact("description")}</p>
        <a
          href="mailto:jayr.galicia.jimenez@gmail.com"
          className="mt-6 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
        >
          {tContact("cta")}
        </a>
      </section>
    </>
  );
}
