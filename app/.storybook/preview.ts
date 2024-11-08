import type { Preview } from "@storybook/vue3";
import 'virtual:uno.css'
// @ts-ignore: Unused import
import reset from "../assets/uno/reset";

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
