// scales.ts

// Define all Radix colors
export const colors: string[] = [
    "gray", "mauve", "slate", "sage", "olive", "sand", "gold", "bronze",
    "brown", "yellow", "amber", "orange", "tomato", "red", "ruby", "crimson",
    "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan",
    "teal", "jade", "green", "grass", "lime", "mint", "sky",
];

// Generate the array of classes
export const scales: string[] = colors.flatMap(color =>
    Array.from({ length: 12 }, (_, i) => `bg-${color}${i + 1}`)
);


export default {};
