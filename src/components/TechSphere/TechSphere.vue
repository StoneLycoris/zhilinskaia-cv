<template>
  <section
    id="tech"
    class="tech"
  >
    <h2 class="tech__title">{{ $t("tech.title") }}</h2>
    <canvas
      ref="canvasRef"
      class="tech__canvas"
    />
    <TechTooltip />
  </section>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  import TechTooltip from "@/components/TechSphere/TechTooltip.vue";
  import { useTechSphere } from "@/composables/useTechSphere";

  const canvasRef = ref<HTMLCanvasElement | null>(null);

  useTechSphere(canvasRef);
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

  @media (max-width: 1024px) {
    .tech {
      height: clamp(500px, 65vh, 620px);

      &__canvas {
        height: clamp(500px, 65vh, 620px);
      }
    }
  }

  @media (max-width: 768px) {
    .tech {
      height: clamp(420px, 58vh, 500px);

      &__canvas {
        height: clamp(420px, 58vh, 500px);
      }
    }
  }
</style>
