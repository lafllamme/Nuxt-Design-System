import type { StorybookConfig } from "@storybook-vue/nuxt";
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/components/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "../stories/patterns/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "../stories/patterns/**/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"
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
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          vue: 'vue/dist/vue.esm-bundler.js',
        },
      },
      devtools: true,
    });
  },
};
export default config;
