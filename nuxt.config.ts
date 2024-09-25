// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: "/greatYa.github.io/",
    head: {
      htmlAttrs: {
        lang: "RU",
      },
      title: "Харизмы",

      link: [{ rel: "shortcut icon", href: "favicon.ico" }],
      meta: [{ hid: "description", name: "description", content: "Харизмы" }],
    },
  },
  runtimeConfig: {
    public: {},
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  },
  css: ["normalize.css", "vue-final-modal/style.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/scripts"],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  ssr: false,
  compatibilityDate: "2024-07-14",
  scripts: {
    registry: {
      googleTagManager: {
        id: "GTM-WWLKDGZT",
      },
    },
  },
});
