<!-- Popover.vue -->
<script lang="ts" setup>
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'
</script>

<template>
  <div
    :class="
      useClsx(
        'relative w-full py-24 flex items-center justify-center p-4',
        'rounded-t-lg from-teal-9 to-green-9 bg-gradient-to-br',
      )"
  >
    <PopoverRoot>
      <PopoverTrigger
        :class="
          useClsx(
            'h-[35px] inline-flex items-center justify-center py-0 px-[15px]',
            'font-[-apple-system] text-[15px] text-violet-11 font-500 leading-[1]',
            'rounded-[4px] px-[15px]',
            'shadow-[0_2px_10px_var(--un-preset-radix-black7A)] !bg-white',
            'hover:bg-mauve-3 focus:shadow-[0_0_0_2px] focus:shadow-black',
          )"
      >
        More info
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          :class="
            useClsx(
              'w-[260px] rounded-[4px] bg-white p-[20px]',
              'text-[15px] text-violet-11 font-400 leading-[1]',
              'shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]',
              'focus:outline-none hue-violet',
              'focus:shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px,0_0_0_2px_var(--un-preset-radix-hue7)]',
            )"
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
