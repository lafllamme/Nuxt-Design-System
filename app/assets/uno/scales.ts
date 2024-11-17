// scales.ts

// Define all Radix colors
export const palettes = [
    "gray", "mauve", "slate", "sage", "olive", "sand", "gold", "bronze",
    "brown", "yellow", "amber", "orange", "tomato", "red", "ruby", "crimson",
    "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan",
    "teal", "jade", "green", "grass", "lime", "mint", "sky",
];

// Helper function to generate scales
const generateScales = (prefix: string, suffix: string = '') =>
    palettes.flatMap(color =>
        Array.from({length: 12}, (_, i) => `${prefix}-${color}${i + 1}${suffix}`)
    );

// Generate scales
export const backgrounds = generateScales('bg');
export const textColors = generateScales('color');
export const focusRings = generateScales('focus:ring');
export const alphaBackgrounds = generateScales('bg', 'A');
export const alphaTextColors = generateScales('color', 'A');
export const alphaFocusRings = generateScales('focus:ring', 'A');

// Combine into a single safelist
export const safelist = [
    ...backgrounds,
    ...textColors,
    ...focusRings,
    ...alphaBackgrounds,
    ...alphaTextColors,
    ...alphaFocusRings,
];

export default {};
