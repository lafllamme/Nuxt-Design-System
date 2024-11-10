<!-- Popover.vue -->
<script setup lang="ts">
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'radix-vue';
</script>

<template>
  <div
      class="
      flex items-center justify-center relative w-full p-4 rounded-t-lg
      bg-gradient-to-br from-teal-9 to-green-9
    "
  >
    <PopoverRoot>
      <PopoverTrigger
          class="
          inline-flex items-center justify-center
          h-[35px] px-[15px] py-0
          rounded-[4px] text-[15px] leading-[1] font-medium
          !bg-white text-violet-11
          shadow-[0_2px_10px_var(--blackA-7)]
          hover:bg-mauve-3 focus:shadow-[0_0_0_2px_black]
        "
      >
        More info
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
            class="
            rounded-[4px] p-[20px] w-[260px]
            text-[15px] leading-[1] text-violet-11
            bg-white
            shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
            focus:outline-none
            focus:shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px,0_0_0_2px_var(--violet-7)]
          "
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
