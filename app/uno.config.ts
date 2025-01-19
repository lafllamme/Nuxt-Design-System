import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetRadix } from 'unocss-preset-radix'
import { safelist } from './assets/uno/scales'

export default defineConfig({
  shortcuts: [
    // Define any shortcuts here
  ],
  extendTheme: (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        pureBlack: '#000000', // Add pure black
        pureWhite: '#FFFFFF', // Add pure white
      },
      // Custom Fonts
      // TODO: Add custom pattern for fonts
      fontFamily: {
        chopin: ['Chopin Light', 'sans-serif'],
      },
    }
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
        'gray',
        'mauve',
        'slate',
        'sage',
        'olive',
        'sand',
        'gold',
        'bronze',
        'brown',
        'yellow',
        'amber',
        'orange',
        'tomato',
        'red',
        'ruby',
        'crimson',
        'pink',
        'plum',
        'purple',
        'violet',
        'iris',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'jade',
        'green',
        'grass',
        'lime',
        'mint',
        'sky',
        'black',
        'white',
      ],
    }),
  ],
  safelist,
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
