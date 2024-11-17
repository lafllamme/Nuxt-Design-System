<script setup lang="ts">
import {ref} from 'vue';
import {scales} from '~/assets/uno/scales';

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
function generateScale(prefix: string, colors: string[] | string): ColorScale {
  if (typeof colors === 'string') {
    return {[colors]: Array.from({length: 12}, (_, i) => `${prefix}-${colors}${i + 1}`)};
  } else {
    return colors.reduce((color: ColorScale, palette: string) => {
      color[palette] = Array.from({length: 12}, (_, i) => `${prefix}-${palette}${i + 1}`);
      return color;
    }, {});
  }
}

// Reactive reference for scales
const palettes = ref<ColorScale>(generateScale('bg', colors));
const textColor = ref<ColorScale>(generateScale('color', colors[0]));


const grades = computed(() => {
  const levels = [...textColor.value.gray].reverse(); // Reverse levels for highest visibility
  const repeats = [3, 3, 3, 3]; // Repeat counts for each group

  return repeats.flatMap((count, idx) => {
    const levelIndex = idx === 2 ? levels.length - 2 : idx === 3 ? levels.length - 1 : idx;
    return Array(count).fill(levels[levelIndex]);
  });
});


watchEffect(() => {
  console.debug('TextColor =>', textColor);
  console.debug('Palettes =>', palettes.value);
  console.debug('TextColor DEbug =>', textColor.value.gray);
  console.debug('TextColor Grade =>', grades.value);
});
</script>

<template>
  <div>
    <div class="font-sans text-xl antialiased font-extrabold tracking-tight overflow-x-hidden">
      <!-- Iterate over colors and scales -->
      <div class="grid grid-cols-3 gap-4 justify-between">
        <div v-for="color in palettes" class="space-y-2" :key="color">
          <button v-for="(scale, idx) in color" class="rounded-xl p-4 w-full" :class=scale>
            <span :class="grades[idx]">{{ scale }}</span>
          </button>
          <div class="spacer w-full h-20"></div>
        </div>
      </div>
    </div>
  </div>
</template>
