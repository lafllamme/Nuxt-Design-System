<script lang="ts" setup>
import cslx from 'clsx'

import { useOllama } from '~/composables/useOllama'
import type { prompt } from '~/types/prompt.model'

const question = ref<string>('')
const response = ref<string>('')
const isWorking = ref<boolean>(false)
const { chatWithStream } = useOllama()

async function askOllama() {
  isWorking.value = true
  const prompt: prompt = {
    model: 'mistral',
    messages: [{ role: 'user', content: question.value }],
  }
  response.value = ''
  for await (const part of chatWithStream(prompt)) {
    response.value += part // Append the response to the response value
  }
  isWorking.value = false
}
</script>

<template>
  <div
    :class="
      cslx (
        'flex justify-start items-center',
        'w-full',
        'space-y-2',
      )"
  >
    <div class="p-20">
      <textarea
        v-model="question"
        class="color-black-12 w-full resize-none rounded-lg b-none bg-gray-5 p-4 text-lg shadow-black shadow-lg focus:border-jade-12 focus:outline-none focus:ring-2 focus:ring-blue-5"
        cols="40"
        placeholder="Type something amazing here..."
        rows="10"
      />
      <button
        class="font-xl tracking-tight', 'color-gray-11A border-amber-5 border-black rounded-full bg-jade-9 p-2 text-white font-thin font-mono antialiased shadow-black shadow-lg"
        @click="askOllama"
        @keydown.enter.prevent="askOllama"
      >
        Ask me anything
      </button>
    </div>
    <div>
      <p v-if="response">
        Response: {{ response }}
      </p>
      <p v-if="isWorking">
        Working...
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
