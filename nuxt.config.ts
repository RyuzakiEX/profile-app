// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxthub/core",
    "@nuxtjs/i18n",
    "nuxt-nodemailer",
  ],
  nodemailer: {
    from: process.env.NUXT_NODEMAILER_FROM,
    host: process.env.NUXT_NODEMAILER_HOST,
    port: Number(process.env.NUXT_NODEMAILER_PORT),
    secure: true,
    auth: {
      user: process.env.NUXT_NODEMAILER_AUTH_USER,
      pass: process.env.NUXT_NODEMAILER_AUTH_PASS,
    },
  },
  nitro: {
    externals: {
      inline: [],
    },
    moduleSideEffects: ["nodemailer"],
    rollupConfig: {
      external: ["nodemailer", "node:url"],
    },
  },
});
