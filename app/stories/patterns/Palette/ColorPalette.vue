<script lang="ts" setup>
import type { ColorPaletteProps } from './ColorPalette.model'
import consola from 'consola'
import Button from '~/stories/components/Button/Button.vue'
import { defaults } from './ColorPalette.model'

const props = withDefaults(defineProps<ColorPaletteProps>(), defaults)
const { palette } = toRefs(props)
consola.debug('Palette =>', palette)
</script>

<template>
  <div class="w-full flex items-center justify-center">
    <div v-for="(n, idx) in 12" :key="n">
      <Button
        :class="`${palette}-${idx}`"
        :disabled="false"
        :label="`${palette}-${idx}`"
        size="medium"
        type="primary"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
