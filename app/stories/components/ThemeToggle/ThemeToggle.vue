<script setup lang="ts">
import {ref} from 'vue';
import clsx from 'clsx';
import  {safelist}  from "assets/uno/scales";

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
    const baseScale = Array.from({length: 12}, (_, i) => `${prefix}-${colors}${i + 1}`);
    const alphaScale = includeAlpha
        ? Array.from({length: 12}, (_, i) => `${prefix}-${colors}-${i + 1}A`)
        : [];
    return includeAlpha
        ? {[colors]: baseScale, [`${colors}A`]: alphaScale}
        : {[colors]: baseScale};
  } else {
    return colors.reduce((color: ColorScale, palette: string) => {
      const baseScale = Array.from({length: 12}, (_, i) => `${prefix}-${palette}${i + 1}`);
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
const allColors = ref<ColorScale>(generateScale('color', colors, true));
const colorFirst = ref<ColorScale>(generateScale('color', colors[0]));
const rings = ref<ColorScale>(generateScale('focus:ring', 'red'));


const grades = computed(() => {
  const levels = [...colorFirst.value.gray].reverse(); // Reverse levels for highest visibility
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
  console.debug('TextColor =>', colorFirst.value);
  console.debug('Palettes =>', palettes.value);
  console.debug('Focus Rings =>', focusRings.value);
  console.debug('Safelist =>', safelist);
});
</script>

<template>
  <div>
    <button class="focus:outline-none focus:ring-2 rounded-xl p-4 w-full bg-gray-7A focus:ring-red1"><span class="color-gray12">bg-gray7A</span></button>
    <div class="font-sans text-xl antialiased font-extrabold tracking-tight overflow-x-hidden">
      <!-- Iterate over colors and scales -->
      <div class="bg-amber-7A">
        This works as expected
      </div>
      <div class="grid grid-cols-3 gap-4 justify-around">
        <div
            v-for="color in palettes"
            class="space-y-2"
            :key="color"
        >
          <button
              v-for="(scale, idx) in color"
              class="focus:outline-none focus:ring-2 rounded-xl p-4 w-full"
              :class="
                [
                  scale,
                  focusRings[idx]
                ]
          ">
            <span :class="grades[idx]">{{ scale }}</span>
          </button>
          <div class="spacer w-full h-20"></div>
        </div>
      </div>
    </div>
  </div>
</template>
