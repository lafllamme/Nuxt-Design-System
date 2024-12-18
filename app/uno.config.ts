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
import {safelist} from "./assets/uno/scales";

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
    safelist: safelist,
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
});
