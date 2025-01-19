<script lang="ts" setup>
import {
  colors,
  type ColorScale,
  colorScales,
  DefaultColor,
  generateScale,
  safelist,
  sortEntries,
} from 'assets/uno/scales'
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

const styles = {
  text: {
    [DefaultColor.Black]: 'text-pureWhite',
    [DefaultColor.White]: 'text-pureBlack',
  },
  focus: {
    [DefaultColor.Black]: 'focus:ring-pureWhite',
    [DefaultColor.White]: 'focus:ring-pureBlack',
    default: 'focus:ring-pureBlack',
  },
}

function getStyles(palette: string, type: string, i?: number) {
  if (type === 'text' && i !== undefined) {
    return styles.text[palette] ?? grades.value[i] ?? ''
  }
  else if (type === 'focus') {
    // Styles for buttons (focus rings)
    return styles.focus[palette] ?? styles.focus.default
  }
  return '' // Default fallback
}

watchEffect(() => {
  consola.info('Palettes =>', toRaw(palettes.value))
  consola.info('Safelist =>', safelist)
  // check if safe list contains 'bg-black'
  consola.info('Safe list contains bg-black-1A =>', safelist.includes('bg-black-1A'))
  // Find position of 'bg-black' in safe list
  consola.info('Position of bg-black-7A in safe list =>', safelist.indexOf('bg-black-7A'))
})
</script>

<template>
  <div>
    <div
      :class="
        useClsx(
          containerBackground,
          'font-sans text-xl font-extrabold tracking-tight antialiased',
          'overflow-x-hidden p-4',
          'transition-colors duration-700',
        )"
    >
      <!-- Iterate over colors and scales -->
      <div
        :class="useClsx('grid grid-cols-3 justify-around gap-4')"
      >
        <div
          v-for="(color, palette) in palettes"
          :key="palette"
          :class="useClsx('space-y-2')"
        >
          <button
            v-for="(scale, idx) in color"
            :key="`${palette}-${idx}`"
            :class="[
              getStyles(palette as string, 'focus'),
              useClsx(
                scale,
                'focus:outline-none focus:ring-4',
                'w-full rounded-xl p-4',
                'transition-colors duration-700',
              )]"
            @focus="changeBackground(scale)"
          >
            <span
              :class="getStyles(palette as string, 'text', idx)"
            >
              {{ scale }}
            </span>
          </button>
          <div :class="useClsx('spacer h-20 w-full')" />
        </div>
      </div>
    </div>
  </div>
</template>
