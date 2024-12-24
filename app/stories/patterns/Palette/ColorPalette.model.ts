export type palette =
  'gray' | 'mauve' | 'slate' | 'sage' | 'olive' | 'sand' | 'gold' | 'bronze' |
  'brown' | 'yellow' | 'amber' | 'orange' | 'tomato' | 'red' | 'ruby' | 'crimson' |
  'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' |
  'teal' | 'jade' | 'green' | 'grass' | 'lime' | 'mint' | 'sky' | 'black' | 'white'

export interface ColorPaletteProps {
  palette: palette
}

export const defaults: Partial<ColorPaletteProps> = {
  palette: 'gray',
}

export const allPalettes: palette[] = [
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
]
