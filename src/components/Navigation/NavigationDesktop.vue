<template>
  <nav class="navigation">
    <button
      v-for="link in links"
      :key="link.id"
      type="button"
      :class="{
        active: activeSection === link.id,
      }"
      @click="scrollToSection(link.id)"
    >
      {{ $t(link.label) }}
    </button>
  </nav>
</template>

<script setup lang="ts">
  import { useNavigation } from "@/composables/useNavigation";
  import { links } from "@/data/navigation";

  const { activeSection, scrollToSection } = useNavigation();
</script>

<style scoped lang="scss">
  .navigation {
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    display: flex;
    gap: 6px;
    padding: 8px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--bg) 85%, transparent);
    border: 1px solid var(--border);
    backdrop-filter: blur(18px);
    box-shadow: var(--shadow);
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 10px 16px;
    border-radius: 999px;
    color: var(--text);
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover {
      background: var(--accent-bg);
      color: var(--text-h);
    }

    &.active {
      background: var(--accent-bg);
      color: var(--accent);
      border: 1px solid var(--accent-border);
    }
  }
</style>
