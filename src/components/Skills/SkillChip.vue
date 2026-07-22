<template>
  <div
    class="skill-chip"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
  >
    <img
      v-if="skill.icon"
      :src="skill.icon"
      :alt="skill.name"
    />

    <span>
      {{ skill.name }}
    </span>

    <div
      v-if="visible"
      class="tooltip"
    >
      <strong>
        {{ skill.name }}
      </strong>

      <p>
        {{ t(`tech.${skill.id}`) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useI18n } from "vue-i18n";

  import type { Skill } from "@/types/skill";

  defineProps<{
    skill: Skill;
  }>();

  const { t } = useI18n();

  const visible = ref(false);

  function showTooltip() {
    visible.value = true;
  }

  function hideTooltip() {
    visible.value = false;
  }
</script>

<style scoped>
  .skill-chip {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 50px;
    background: var(--accent-bg);
    border: 1px solid var(--accent-border);
    color: var(--text);
    cursor: default;
    transition:
      transform 0.2s ease,
      border-color 0.2s ease;

    img {
      width: 16px;
      height: 16px;
    }

    &:hover {
      transform: translateY(-2px);
    }
  }

  .tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    padding: 12px;
    background: var(--bg);
    border: 1px solid var(--border);

    border-radius: 12px;
    box-shadow: var(--shadow);
    z-index: 10;

    p {
      margin-top: 6px;
      font-size: 13px;
      opacity: 0.8;
    }
  }
</style>
