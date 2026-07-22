import type { LocalizedText } from "@/content/proyectos";

export function pickLocalizedText(value: LocalizedText, locale: string): string {
  return value[locale as keyof LocalizedText] ?? value.en;
}
