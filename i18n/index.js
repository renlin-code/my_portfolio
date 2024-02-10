import { createI18n } from "vue-i18n"
import en from "./locales/en.json"

export default createI18n({
  locale: "en",
  fallbackLocale: "ru",
  legacy: false,
  globalInjection: true,
  messages: { en },
  runtimeOnly: false,
})
