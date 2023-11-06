export default defineNuxtConfig({
  target: "static",
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/ui"],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
});
