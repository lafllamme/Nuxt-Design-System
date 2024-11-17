<script setup lang="ts">
import {ColorPaletteProps, defaults} from './ColorPalette.model'
import Button from "~/stories/components/Button/Button.vue";

const props = withDefaults(defineProps<ColorPaletteProps>(), defaults)
const { palette } = toRefs(props)
console.debug('Palette =>', palette)
</script>

<template>
  <div class="flex justify-center items-center w-full">
    <div v-for="(n, idx) in 12">
      <Button
          :label="`${palette}-${idx}`"
          :class="`${palette}-${idx}`"
          type='primary'
          size='medium'
          :disabled="false"
      />

      <button class="text-red-10A">
        Alpha Color
      </button>
      <button class="text-red-10">
        Regular Color
      </button>
      <button class="color-red-dar">
        Regular Color
      </button>

    </div>
  </div>
</template>

<style scoped lang="scss">

</style>