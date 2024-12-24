<!-- components/Button/Button.vue -->

<script lang="ts" setup>
import type { ButtonProps } from './Button.model'
import { buttonDefaults } from './Button.model'

// Define props using the ButtonProps interface
const props = withDefaults(
  defineProps<ButtonProps>(),
  buttonDefaults,
)

// Compute button classes based on props
const buttonClasses = computed(() => [
  `btn-${props.type}`,
  `size-${props.size}`,
  { 'btn-disabled': props.disabled },
])
</script>

<template>
  <button :class="buttonClasses" :disabled="disabled">
    {{ label }}
  </button>
</template>

<style scoped>

</style>
