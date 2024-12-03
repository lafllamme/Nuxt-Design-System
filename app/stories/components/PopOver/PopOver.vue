<!-- Popover.vue -->
<script lang="ts" setup>
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'
</script>

<template>
  <div
    class="relative w-full flex items-center justify-center rounded-t-lg from-teal-9 to-green-9 bg-gradient-to-br p-4"
  >
    <PopoverRoot>
      <PopoverTrigger
        class="h-[35px] inline-flex items-center justify-center rounded-[4px] px-[15px] py-0 text-[15px] text-violet-11 font-medium leading-[1] shadow-[0_2px_10px_var(--blackA-7)] !bg-white hover:bg-mauve-3 focus:shadow-[0_0_0_2px_black]"
      >
        More info
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          class="w-[260px] rounded-[4px] bg-white p-[20px] text-[15px] text-violet-11 leading-[1] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px,0_0_0_2px_var(--violet-7)] focus:outline-none"
        >
          Some more info...
          <PopoverClose />
          <PopoverArrow class="fill-white" />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  </div>
</template>

<!-- No <style> block needed since we're using UnoCSS classes -->
