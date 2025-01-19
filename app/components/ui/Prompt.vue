<script lang="ts" setup>
import type { prompt } from '~/types/prompt.model'
import { useOllama } from '~/composables/useOllama'

const question = ref<string>('')
const response = ref<string>('')
const isWorking = ref<boolean>(false)
const shouldCancel = ref<boolean>(false)
const placeholder = ref<string>('')
const placeholderText = 'Type something amazing here...'
const { chatWithStream } = useOllama()

const buttonClass = 'font-xl font-thin font-mono text-white tracking-tight antialiased rounded-full bg-jade-9 p-2 mt-4 border-black shadow-black shadow-lg self-end'

async function askOllama() {
  isWorking.value = true
  const prompt: prompt = {
    model: 'mistral',
    messages: [{ role: 'user', content: question.value }],
  }
  response.value = ''
  for await (const part of chatWithStream(prompt)) {
    if (shouldCancel.value) {
      shouldCancel.value = false
      break
    }
    response.value += part // Append the response to the response value
    consola.info('[Prompt.vue] => Response:', response.value)
  }
  isWorking.value = false
}

function handleCancel() {
  shouldCancel.value = true
  response.value = ''
  consola.info('[Prompt.vue] => Cancelling...')
}

async function typePlaceholder() {
// function that simulates typing a placeholder
  // generate a random ms number between 50 and 85ms
  const ms = Math.floor(Math.random() * 35) + 42
  consola.info('[Prompt.vue] => Typing ms', ms)
  while (placeholder.value.length < placeholderText.length) {
    // add a character to the placeholder
    placeholder.value += placeholderText.charAt(placeholder.value.length)
    await new Promise(resolve => setTimeout(resolve, ms))
  }
}

onMounted(() => {
  typePlaceholder().catch(err => consola.error('[Prompt.vue] => Error:', err))
})
</script>

<template>
  <div
    :class="
      useClsx(
        'flex flex-col lg:flex-row justify-start items-start',
        'w-full space-y-2 lg:space-y-0 lg:space-x-2', // Reduced spacing
      )"
  >
    <!-- Input Section -->
    <div class="w-full flex flex-col p-10 lg:w-1/2">
      <!-- Adjusted padding -->
      <textarea
        v-model="question"
        :class="useClsx(
          'font-chopin-regular text-lg antialiased color-black-12 caret-orange-10',
          'p-4 w-full resize-none rounded-lg',
          'bg-gray-5 shadow-lg shadow-black b-none',
          'focus:outline-none focus:ring-2 focus:ring-orange-5 transition-all duration-300',
          'focus:border-2 focus:border-orange-5',
        )"
        :placeholder="placeholder"
        cols="40"
        rows="10"
      />

      <div
        :class="useClsx(
          'flex items-center content-center justify-end',
        )"
      >
        <button
          v-show="isWorking"
          :class="useClsx(
            'font-xl font-thin font-mono text-white tracking-tight antialiased',
            'rounded-full bg-jade-9 p-2 mt-4',
            'border-black shadow-black shadow-lg self-end',
            'animate-fade-in',
          )"
          @click="handleCancel"
          @keydown.enter.prevent="handleCancel"
        >
          Cancel
        </button>
        <button
          :class="useClsx(
            'font-xl font-thin font-mono text-white tracking-tight antialiased',
            'rounded-full bg-jade-9 p-2 mt-4',
            'border-black shadow-black shadow-lg self-end',
          )"
          @click="askOllama"
          @keydown.enter.prevent="askOllama"
        >
          Ask me anything
        </button>
      </div>
    </div>

    <!-- Response Section -->
    <div class="w-full p-10 lg:w-1/2">
      <!-- Adjusted padding -->
      <div
        :class="
          useClsx(
            'overflow-y-auto rounded-lg transition-all duration-300',
            'bg-gray-5 shadow-lg shadow-black p-4',
            response ? 'h-auto' : 'h-14', // Dynamic height adjustment
            'animate-fade-in-down',
          )"
      >
        <p v-if="response" class="whitespace-pre-line">
          {{ response }}
        </p>
        <p v-if="isWorking" class="text-jade-9 font-thin">
          Working...
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/ui/fonts.scss';
</style>
