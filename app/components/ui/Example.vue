<script setup lang="ts">
import cslx from 'clsx';

import {useOllama} from "~/composables/useOllama";
import type {prompt} from "~/types/prompt.model";

const question = ref<string>('');
const response = ref<string>('');
const isWorking = ref<boolean>(false);
const {chatWithStream} = useOllama();

const askOllama = async () => {
  isWorking.value = true
  const prompt: prompt = {
    model: 'mistral',
    messages: [{role: 'user', content: question.value}]
  }
  response.value = ''
  for await (const part of chatWithStream(prompt)) {
    response.value += part // Append the response to the response value
  }
  isWorking.value = false
}

async function handleAction() {
  if (isWorking.value) {
    return
  } else {
    isWorking.value = true
    console.debug('Action triggered')
    await wait(4000)
    isWorking.value = false
  }
}

async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
</script>

<template>
  <div :class="
    cslx (
      'flex justify-start items-center',
      'w-full',
      'space-y-2'
    )">
    <div class="p-20">
         <textarea
             v-model="question"
             rows="10"
             cols="40"
             placeholder="Type something amazing here..."
             class="shadow-black shadow-lg w-full p-4 b-none rounded-lg focus:border-jade-12 focus:ring-2 focus:ring-blue-5 focus:outline-none resize-none bg-gray-5 color-black-12 text-lg"
         ></textarea>
      <button
          class="rounded-full p-2 shadow-black text-white shadow-lg border-black border-amber-5 bg-jade-9 font-thin font-mono font-xl antialiased tracking-tight',
       'color-gray-11A"
          @keydown.enter.prevent="askOllama"
          @click="askOllama"
      >
        Ask me anything
      </button>
    </div>
    <div>
      <p v-if="response">Response: {{ response }}</p>
      <p v-if="isWorking">Working...</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
</style>
