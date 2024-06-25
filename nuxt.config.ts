// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/greatYa.github.io/",
    head: {
      link: [{ rel: 'shortcut icon', href: 'favicon.ico' }]
    }
  },
  ssr: false,
  css: ['normalize.css'],
  //devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  typescript: {
    typeCheck: true
  },
})