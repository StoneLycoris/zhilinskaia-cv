import { useI18n } from 'vue-i18n'

const STORAGE_KEY = 'app-locale'

export function useLocale() {
  const { locale } = useI18n()

  function setLocale(lang: 'en' | 'ru') {
    locale.value = lang
    localStorage.setItem(STORAGE_KEY, lang)
  }

  function toggleLocale() {
    const next = locale.value === 'en' ? 'ru' : 'en'
    setLocale(next)
  }

  return {
    locale,
    setLocale,
    toggleLocale,
  }
}