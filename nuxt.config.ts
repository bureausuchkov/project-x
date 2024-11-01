// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: "/greatYa.github.io/",
    head: {
      htmlAttrs: {
        lang: "RU",
      },
      title: "ХаризМЫ, официальный сайт - застройщик в Тюмени, девелоперская компания",

      link: [{ rel: "shortcut icon", href: "favicon.ico" }],
      script: [
        {
          innerHTML: `(function(w, d, s, h, id) {
            w.roistatProjectId = id; w.roistatHost = h;
            var p = d.location.protocol == "https:" ? "https://" : "http://";
            var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
            var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
            })(window, document, 'script', 'cloud.roistat.com', '69166936994c8d5dc38b7f63b341a71b');
          `,
          type: "text/javascript",
        }
      ],
      meta: [{ hid: "description", name: "description", content: "Официальный сайт ХаризМЫ. Строительство и продажа недвижимости в Тюмени. Каталог проектов от застройщика. Цены на квартиры и коммерческую недвижимость в новостройках." }],
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
