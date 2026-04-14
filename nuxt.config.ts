// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Lato: [300, 400, 700, 900],
      Roboto: [300, 400, 700, 900],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
