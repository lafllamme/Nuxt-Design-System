import type { Preview } from "@storybook/vue3";
import 'virtual:uno.css'
// @ts-ignore: Unused import
import '~/assets/uno/reset'; // Importing the file directly applies the styles

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
