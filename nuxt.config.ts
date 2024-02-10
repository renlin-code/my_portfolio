// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [{ src: "/js/rem.js"}, { src: "/js/flickity.js" }],
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "google", content: "notranslate" },
        {name: "yandex-verification", content: "486e9cae33d98517"},
      ],
    },  
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n/i18n.config.ts' 
  },
  devtools: { enabled: false },
  css: ["@/assets/styles/flickity.min.css", "@/assets/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_vars.scss" as *;',
        },
      },
    },
  },
})
