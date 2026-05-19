import { createI18n } from "vue-i18n";

import en from "@/i18n/locales/en";
import ru from "@/i18n/locales/ru";

const STORAGE_KEY = "app-locale";

function getDefaultLocale(): "en" | "ru" {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "ru") return saved;

  const browser = navigator.language.toLowerCase();

  if (browser.startsWith("ru")) return "ru";
  return "en";
}

export const i18n = createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: "en",

  messages: {
    en,
    ru,
  },
});
