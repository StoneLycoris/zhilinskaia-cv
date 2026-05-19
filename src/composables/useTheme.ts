import { readonly, ref } from "vue";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

const theme = ref<Theme>("dark");

function applyTheme(t: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", t);
  theme.value = t;
  localStorage.setItem(STORAGE_KEY, t);
}

function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;

  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
  } else {
    applyTheme("dark");
  }
}

function toggleTheme() {
  applyTheme(theme.value === "dark" ? "light" : "dark");
}

export function useTheme() {
  return {
    theme: readonly(theme),
    toggleTheme,
    setTheme: applyTheme,
    initTheme,
  };
}
