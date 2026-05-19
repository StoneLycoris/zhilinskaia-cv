<template>
  <section class="tech">
    <h2 class="tech__title">{{ $t('tech.title') }}</h2>
    <canvas ref="canvasRef" class="tech__canvas" />
    <TechTooltip />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import TechTooltip from '@/components/TechSphere/TechTooltip.vue'
import { useTechSphere } from '@/composables/useTechSphere'

const canvasRef = ref<HTMLCanvasElement | null>(null)

useTechSphere(canvasRef)
</script>

<style scoped lang="scss">
.tech {
  position: relative;
  width: 100%;
  height: 96vh;

  &__canvas {
    display: block;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
}
</style>