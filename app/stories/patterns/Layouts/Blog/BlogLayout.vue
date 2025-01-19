<script lang="ts" setup>
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'radix-vue'
</script>

<template>
  <div class="relative w-full flex items-center justify-center rounded-t-lg from-teal9 to-green9 bg-gradient-to-br p-4">
    <div class="h-64 w-full px-8 text-sm text-green9 font-medium">
      <SplitterGroup
        id="splitter-group-1"
        direction="horizontal"
      >
        <SplitterPanel
          id="splitter-group-1-panel-1"
          :min-size="20"
          class="bg-white flex items-center justify-center rounded-xl"
        >
          Panel A
        </SplitterPanel>
        <SplitterResizeHandle
          id="splitter-group-1-resize-handle-1"
          class="w-2"
        />
        <SplitterPanel
          id="splitter-group-1-panel-2"
          :min-size="20"
        >
          <SplitterGroup
            id="splitter-group-2"
            direction="vertical"
          >
            <SplitterPanel
              id="splitter-group-2-panel-1"
              :min-size="20"
              class="bg-white flex items-center justify-center rounded-xl"
            >
              Panel B
            </SplitterPanel>
            <SplitterResizeHandle
              id="splitter-group-2-resize-handle-1"
              class="h-2"
            />
            <SplitterPanel
              id="splitter-group-2-panel-2"
              :min-size="20"
              class="bg-white flex items-center justify-center rounded-xl"
            >
              Panel C
            </SplitterPanel>
          </SplitterGroup>
        </SplitterPanel>
      </SplitterGroup>
    </div>
  </div>
</template>
