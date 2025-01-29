import type { StorybookConfig } from '@storybook-vue/nuxt'
import { mergeConfig } from 'vite'

/**
 * @type {import('@storybook-vue/nuxt').StorybookConfig}
 */
const config: StorybookConfig = {
  stories: [
    '../stories',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-essentials',

  ],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          // vue: 'vue/dist/vue.esm-bundler.js',
          '@nuxtjs/color-mode': require.resolve('@nuxtjs/color-mode'),
        },
      },
      devtools: true,
    })
  },
}
export default config
