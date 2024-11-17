<!-- components/Button/Button.vue -->

<template>
  <button :class="buttonClasses" :disabled="disabled">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { ButtonProps, buttonDefaults } from './Button.model';

// Define props using the ButtonProps interface
const props = withDefaults(
    defineProps<ButtonProps>(),
    buttonDefaults
);

// Compute button classes based on props
const buttonClasses = computed(() => [
  `btn-${props.type}`,
  `size-${props.size}`,
  { 'btn-disabled': props.disabled },
]);
</script>

<style scoped>

</style>
