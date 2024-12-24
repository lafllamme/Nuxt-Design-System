<script lang="ts" setup>
import type { ColorScale } from 'assets/uno/scales'
import { colors, colorScales, generateScale, safelist, sortEntries } from 'assets/uno/scales'
import { computed, ref } from 'vue'

// TODO: Move all this shit into a helper

/**
 * Returns a computed object with all color palettes
 * The object is sorted alphabetically by key
 */
const palettes = computed<ColorScale>(() => {
  const base = generateScale('bg', colors, true)
  return sortEntries(base) as ColorScale
})

const grayScale = ref<ColorScale>(generateScale('color', colors[0], true))
const rings = ref<ColorScale>(generateScale('focus:ring', 'red', true))

// Container background
const containerBackground = ref('')
const backgroundTimer = ref<NodeJS.Timeout | null>(null)

/**
 * Change the background color of the container
 * @param newBackground
 */
function changeBackground(newBackground: string) {
  containerBackground.value = newBackground
  if (backgroundTimer.value)
    clearTimeout(backgroundTimer.value)
  backgroundTimer.value = setTimeout(() => {
    containerBackground.value = '' // Reset background after 10 seconds
  }, 10000)
}

/**
 * Generate a scale of text colors based on the gray scale
 * @param grayScale - The gray scale color scale
 * This is used for the descriptive text in each button
 */
const grades = computed(() => {
  return colorScales(grayScale.value.gray)
})

const focusRings = computed(() => {
  const levels = [...rings.value.red] // Use the gray focus:ring classes directly
  return Array.from({ length: 12 }, (_, i) => levels[i % levels.length]) // Cycle through levels
})

watchEffect(() => {
  consola.info('Palettes =>', toRaw(palettes.value))
  consola.info('Safelist =>', safelist)
  // check if safe list contains 'bg-black'
  consola.info('Safe list contains bg-black =>', safelist.includes('bg-black-7A'))
  // Find position of 'bg-black' in safe list
  consola.info('Position of bg-black in safe list =>', safelist.indexOf('bg-black-7A'))
})
</script>

<template>
  <div>
    <div
      :class="containerBackground"
      class="overflow-x-hidden p-4 text-xl font-extrabold tracking-tight font-sans antialiased transition-colors duration-700"
    >
      <!-- Iterate over colors and scales -->
      <div class="bg-amber-7A mb-4">
        This works as expected
      </div>
      <div class="bg-black-4A text-white-fg">
        ITS NOT TOTALLY BLACK
      </div>
      <div class="bg-black-9A text-white-fg">
        ITS NOT TOTALLY BLACK
      </div>
      <div class="bg-black-12A text-white-fg">
        ITS NOT TOTALLY BLACK
      </div>
      <div class="bg-black-1A text-white-fg">
        ITS NOT TOTALLY BLACK
      </div>
      <div class="grid grid-cols-3 justify-around gap-4">
        <div
          v-for="(color, palette) in palettes"
          :key="palette"
          class="space-y-2"
        >
          <button
            v-for="(scale, idx) in color"
            :key="`${palette}-${idx}`"
            :class="scale"
            class="w-full rounded-xl p-4 transition-colors duration-700 focus:outline-none focus:ring-4 focus:ring-black"
            @focus="changeBackground(scale)"
          >
            <span :class="grades[idx]">{{ scale }}</span>
          </button>
          <div class="spacer h-20 w-full" />
        </div>
      </div>
    </div>
  </div>
</template>
