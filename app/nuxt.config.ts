export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  imports: {
    // Auto-import
    imports: [
      {
        from: 'consola',
        name: 'default',
        as: 'consola',
      },
    ],
  },
  nitro: {
    logLevel: 'debug',
  },
  typescript: {
    typeCheck: true,
  },
  modules: [
    '@nuxtjs/storybook',
    '@unocss/nuxt',
    'radix-vue/nuxt',
    '@nuxtjs/color-mode',
  ],
})
