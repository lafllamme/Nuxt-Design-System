// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss';

import {presetRadix} from "unocss-preset-radix";

const palettes = [
    'gray', 'mauve', 'slate', 'sage', 'olive', 'sand', 'gold', 'bronze',
    'brown', 'yellow', 'amber', 'orange', 'tomato', 'red', 'ruby', 'crimson',
    'pink', 'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan',
    'teal', 'jade', 'green', 'grass', 'lime', 'mint', 'sky',
];

const backgrounds = palettes.flatMap(color =>
    Array.from({length: 12}, (_, i) => `bg-${color}${i + 1}`)
);

const colors = palettes.flatMap(color =>
    Array.from({length: 12}, (_, i) => `color-${color}${i + 1}`)
);

export default defineConfig({
    shortcuts: [
        // Define any shortcuts here
    ],
    theme: {
        colors: {
            // Extend or override theme colors here if needed
        },
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // Define your custom web fonts here if needed
            },
        }),
        presetRadix({
            palette: [
                'gray', 'mauve', 'slate', 'sage', 'olive', 'sand', 'gold', 'bronze',
                'brown', 'yellow', 'amber', 'orange', 'tomato', 'red', 'ruby', 'crimson',
                'pink', 'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan',
                'teal', 'jade', 'green', 'grass', 'lime', 'mint', 'sky',
            ],
            aliases: {
                primary: "green",
                base: "slate",
            },
        }),
    ],
    safelist: [...backgrounds, ...colors],

    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
});
