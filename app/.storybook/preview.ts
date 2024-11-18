import type { Preview } from "@storybook/vue3";
import 'virtual:uno.css';
import '~/assets/uno/reset';
import DefaultLayout from '~/stories/layouts/DefaultLayout.vue';
import { theme } from "./theme";
import '../assets/fonts/storybook.scss';

const applyTheme = (theme: string) => {
    const html = document.documentElement;
    if (theme === 'dark') {
        html.classList.add('dark-theme');
    } else {
        html.classList.remove('dark-theme');
    }
};

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        options: {
            storySort: {
                method: 'alphabetical',
                order: [],
                locales: '',
            },
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            toolbar: {
                title: 'Theme',
                icon: 'circle', // Initial icon, will be replaced dynamically
                items: [
                    { value: 'light', title: 'Light Mode', icon: 'sun' },
                    { value: 'dark', title: 'Dark Mode', icon: 'moon' },
                ],
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: 'light',
    },
    docs: {
        theme: theme,
    },
    layout: 'fullscreen',
    decorators: [
        (story, context) => {
            const { globals } = context;
            applyTheme(globals.theme);
            return {
                components: { story, DefaultLayout },
                template: `
          <DefaultLayout>
            <story/>
          </DefaultLayout>`,
            };
        },
    ],
};

export default preview;
