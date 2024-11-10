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

import { presetRadix } from "unocss-preset-radix";

export default defineConfig({
    shortcuts: [
        // Define any shortcuts here
    ],
    theme: {
        colors: {
            // You can override or extend theme colors here
        },
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // Define your web fonts here
            },
        }),
        presetRadix({
            // Include all Radix colors
            palette: [
                'gray', 'mauve', 'slate', 'sage', 'olive', 'sand', 'gold', 'bronze',
                'brown', 'yellow', 'amber', 'orange', 'tomato', 'red', 'ruby', 'crimson',
                'pink', 'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan',
                'teal', 'jade', 'green', 'grass', 'lime', 'mint', 'sky'
            ],
            aliases: {
                primary: "green",
                base: "slate",
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
});
