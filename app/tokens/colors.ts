import { blue, gray, green, red, teal } from '@radix-ui/colors'

// Basisfarben aus Radix
export const colors = {
  primary: teal,
  secondary: blue,
  tertiary: green,
  quaternary: red,
  neutral: gray,
}

// Zustände für Farben generieren
export type ColorStates = 'hover' | 'active' | 'focus' | 'disabled'

export function generateColorStates(base: string) {
  return {
    [`${base}-hover`]: `${base}9`, // Hellerer Farbton
    [`${base}-active`]: `${base}11`, // Dunklerer Farbton
    [`${base}-focus`]: `${base}12`, // Fokus-Ton
    [`${base}-disabled`]: `${base}6`, // Gedämpfter Ton
  }
}

// Alle Farb-Tokens mit Zuständen
export const colorTokens = {
  ...generateColorStates('primary'),
  ...generateColorStates('secondary'),
  ...generateColorStates('tertiary'),
  ...generateColorStates('quaternary'),
  ...generateColorStates('neutral'),
}

export type ColorTokenKeys = keyof typeof colorTokens
