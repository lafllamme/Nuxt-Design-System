import type { StorybookConfig } from "@storybook-vue/nuxt";
import UnoCSS from 'unocss/vite'

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-essentials",

  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  vite: {
    plugins: [UnoCSS()],
    optimizeDeps: {
      include: ['storybook > @storybook/core > jsdoc-type-pratt-parser'],
    },
  },
};
export default config;
