// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    nitro: {
        logLevel: 'debug',
    },
    typescript
        : {
        typeCheck
            : true
    },/*
    vite: {
        server: {
            hmr: {
                protocol: "http",
                host: "localhost",
                clientPort: 3000,
                port: 3000,
            },
        },
    },*/
    modules: [
      '@nuxtjs/storybook',
      '@unocss/nuxt',
      'radix-vue/nuxt',
      '@nuxtjs/color-mode',
    ],
})