<template>
  <div
    v-if="skill"
    class="tooltip"
    :style="{
      top: tooltipPosition.y + 12 + 'px',
      left: tooltipPosition.x + 12 + 'px',
    }"
  >
    <strong>{{ skill.name }}</strong>
    <p>{{ t(`tech.${skill.id}`) }}</p>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useI18n } from "vue-i18n";

  import { useTechSphereStore } from "@/stores/techSphere.store";

  const { t } = useI18n();

  const store = useTechSphereStore();
  const { hoveredSkill, tooltipPosition } = storeToRefs(store);

  const skill = hoveredSkill;
</script>

<style scoped lang="scss">
  .tooltip {
    position: fixed;
    background: var(--bg);
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    padding: 12px;
    border-radius: 10px;
    font-size: 14px;
    max-width: 220px;
    pointer-events: none;
    transform: translate(12px, 12px);

    h4 {
      color: var(--text-h);
      margin-bottom: 4px;
    }

    p {
      font-size: 13px;
      opacity: 0.8;
    }
  }
</style>
