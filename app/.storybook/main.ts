import type { StorybookConfig } from "@storybook-vue/nuxt";
import { mergeConfig } from 'vite';
import {theme} from "./theme";

const config: StorybookConfig = {
  stories: [
    "../stories",
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
