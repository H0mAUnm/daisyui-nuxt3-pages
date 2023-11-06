export default defineNuxtConfig({
  target: "static",
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  buildModules: ["nuxt-vite"],
  vite: {
    vue: {
      build: true,
    },
  },
});
