// scales.ts

// Define all Radix colors
export const palettes = [
    "gray", "mauve", "slate", "sage", "olive", "sand", "gold", "bronze",
    "brown", "yellow", "amber", "orange", "tomato", "red", "ruby", "crimson",
    "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan",
    "teal", "jade", "green", "grass", "lime", "mint", "sky",
];

// Helper function to generate scales
// scales.ts

// Safelist generation function
export function generateSafelist(prefix: string, colors: string[], includeAlpha = false): string[] {
    return colors.flatMap(color => {
        const baseScales = Array.from({length: 12}, (_, i) => `${prefix}-${color}-${i + 1}`);
        const alphaScales = includeAlpha
            ? Array.from({length: 12}, (_, i) => `${prefix}-${color}-${i + 1}A`)
            : [];
        return [...baseScales, ...alphaScales];
    });
}

// Use the function to generate safelists


// Generate scales
export const backgrounds = generateSafelist('bg', palettes, true);
export const textColors = generateSafelist('color', palettes, true);
export const focusRings = generateSafelist('focus:ring', palettes, true);

// Combine into a single safelist
export const safelist = [
    ...backgrounds,
    ...textColors,
    ...focusRings,
];

console.debug(safelist);

export default {};
