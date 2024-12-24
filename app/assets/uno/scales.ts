// scales.ts

// Define all Radix colors
export const colors = [
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

// TODO: Move to types
// Define an interface for the scale structure
export interface ColorScale {
  [key: string]: string[]
}

/**
 * Generates a palette and its scales for given colors
 * @param prefix
 * @param colors
 * @param alpha
 */
export function generateScale(prefix: string, colors: string | string[], alpha = true): ColorScale {
  const getScale = (color: string) => {
    const isBW = color === 'black' || color === 'white'

    const baseScale = isBW
      ? [`${prefix}-${color}`]
      : Array.from({ length: 12 }, (_, i) => `${prefix}-${color}-${i + 1}`)

    const alphaScale = alpha
      ? Array.from({ length: 12 }, (_, i) => `${prefix}-${color}-${i + 1}A`)
      : []
        /*
            consola.info('[Scales] Prefix:', prefix, 'Color:', color, 'Base:', baseScale, 'Alpha:', alphaScale)
        */

    return { baseScale, alphaScale }
  }

  // Single color => single object
  if (typeof colors === 'string') {
    const { baseScale, alphaScale } = getScale(colors)
    return alpha
      ? { [colors]: baseScale, [`${colors}-A`]: alphaScale }
      : { [colors]: baseScale }
  }

  // Multiple colors => reduce into one object
  return colors.reduce((acc, color) => {
    const { baseScale, alphaScale } = getScale(color)
    if (alpha) {
      acc[color] = baseScale
      acc[`${color}-A`] = alphaScale
    }
    else {
      acc[color] = baseScale
    }
    return acc
  }, {} as ColorScale)
}

export function sortEntries(obj: Record<string, string[]>): object {
  const entries = Object.entries(obj)
  entries.sort(([a], [b]) => a.localeCompare(b))
  return Object.fromEntries(entries)
}

export function colorScales(palette: string[]) {
  const reversed = [...palette].reverse()

  const repeats = [3, 3, 3, 3]

  const indices = [0, 1, reversed.length - 2, reversed.length - 1]

  return repeats.flatMap((count, i) => {
    const color = reversed[indices[i]]
    return Array.from({ length: count }).fill(color)
  })
}

// Generate scales
export const backgrounds = generateScale('bg', colors, true)
export const textColors = generateScale('color', colors, true)
export const focusRings = generateScale('focus:ring', colors, true)
export const shadow = generateScale('shadow', colors, true)

// Combine into a single safelist
export const safelist = [
  backgrounds,
  textColors,
  focusRings,
  shadow,
].flatMap(Object.values).flat()

export default {}
