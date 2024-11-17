<script setup lang="ts">
import {ref, watchEffect, computed} from 'vue';
import clsx from 'clsx';

// Define an interface for the scale structure
interface ColorScale {
  [key: string]: string[];
}

// Define all colors from the presetRadix palette
const colors: string[] = [
  'gray', 'mauve', 'slate', 'sage', 'olive', 'sand', 'gold', 'bronze',
  'brown', 'yellow', 'amber', 'orange', 'tomato', 'red', 'ruby', 'crimson',
  'pink', 'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan',
  'teal', 'jade', 'green', 'grass', 'lime', 'mint', 'sky',
];

// Generate a class scale for each color and scale from 1 to 12
// Extend palette to include alpha variants
function generateScale(prefix: string, colors: string[] | string, includeAlpha = false): ColorScale {
  if (typeof colors === 'string') {
    const baseScale = Array.from({length: 12}, (_, i) => `${prefix}-${colors}-${i + 1}`);
    const alphaScale = includeAlpha
        ? Array.from({length: 12}, (_, i) => `${prefix}-${colors}-${i + 1}A`)
        : [];
    return includeAlpha
        ? {[colors]: baseScale, [`${colors}A`]: alphaScale}
        : {[colors]: baseScale};
  } else {
    return colors.reduce((color: ColorScale, palette: string) => {
      const baseScale = Array.from({length: 12}, (_, i) => `${prefix}-${palette}-${i + 1}`);
      const alphaScale = includeAlpha
          ? Array.from({length: 12}, (_, i) => `${prefix}-${palette}-${i + 1}A`)
          : [];
      if (includeAlpha) {
        color[palette] = baseScale;
        color[`${palette}A`] = alphaScale;
      } else {
        color[palette] = baseScale;
      }
      return color;
    }, {});
  }
}

// Reactive reference for scales
const palettes = ref<ColorScale>(generateScale('bg', colors, true)); // Includes alpha variants
const grayScale = ref<ColorScale>(generateScale('color', colors[0], true));
const rings = ref<ColorScale>(generateScale('focus:ring', 'red', true));

// Reactive reference for the container background
const containerBackground = ref('');
const backgroundTimer = ref<NodeJS.Timeout | null>(null);

// Function to update container background and set a timeout for reset
const changeBackground = (newBackground: string) => {
  containerBackground.value = newBackground;
  if (backgroundTimer.value) clearTimeout(backgroundTimer.value);
  backgroundTimer.value = setTimeout(() => {
    containerBackground.value = ''; // Reset background after 10 seconds
  }, 10000)
};

const grades = computed(() => {
  const levels = [...grayScale.value.gray].reverse(); // Reverse levels for highest visibility
  const repeats = [3, 3, 3, 3]; // Repeat counts for each group

  return repeats.flatMap((count, idx) => {
    const levelIndex = idx === 2 ? levels.length - 2 : idx === 3 ? levels.length - 1 : idx;
    return Array(count).fill(levels[levelIndex]);
  });
});

const focusRings = computed(() => {
  const levels = [...rings.value.red]; // Use the gray focus:ring classes directly
  return Array.from({length: 12}, (_, i) => levels[i % levels.length]); // Cycle through levels
});

watchEffect(() => {
  console.debug('TextColor =>', grayScale.value);
  console.debug('Palettes =>', palettes.value);
  console.debug('Focus Rings =>', focusRings.value);
});
</script>

<template>
  <div>
    <div
        class="font-sans text-xl antialiased font-extrabold tracking-tight overflow-x-hidden p-4 transition-colors duration-700"
        :class="containerBackground"
    >
      <!-- Iterate over colors and scales -->
      <div class="bg-amber-7A mb-4">
        This works as expected
      </div>
      <div class="grid grid-cols-3 gap-4 justify-around">
        <div
            v-for="(color, palette) in palettes"
            class="space-y-2"
            :key="palette"
        >
          <button
              v-for="(scale, idx) in color"
              @focus="changeBackground(scale)"
              class="focus:outline-none focus:ring-black focus:ring-4 rounded-xl p-4 w-full transition-colors duration-700"
              :class="scale"
          >
            <span :class="grades[idx]">{{ scale }}</span>
          </button>
          <div class="spacer w-full h-20"></div>
        </div>
      </div>
    </div>
  </div>
</template>

