<template>
  <button
    class="theme-toggle"
    :aria-label="ariaLabel"
    @click="toggleTheme"
  >
    <span class="icon">
      <svg
        v-if="theme === 'dark'"
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="12"
          r="5"
        />
        <g
          stroke-width="2"
          stroke="currentColor"
        >
          <line
            x1="12"
            y1="1"
            x2="12"
            y2="4"
          />
          <line
            x1="12"
            y1="20"
            x2="12"
            y2="23"
          />
          <line
            x1="4.2"
            y1="4.2"
            x2="6.5"
            y2="6.5"
          />
          <line
            x1="17.5"
            y1="17.5"
            x2="19.8"
            y2="19.8"
          />
          <line
            x1="1"
            y1="12"
            x2="4"
            y2="12"
          />
          <line
            x1="20"
            y1="12"
            x2="23"
            y2="12"
          />
        </g>
      </svg>

      <svg
        v-else
        viewBox="0 0 24 24"
      >
        <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  import { useTheme } from "@/composables/useTheme";

  const { theme, toggleTheme } = useTheme();

  const ariaLabel = computed(() =>
    theme.value === "dark" ? "Switch to light theme" : "Switch to dark theme"
  );
</script>

<style scoped>
  .theme-toggle {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1;
    width: 44px;
    height: 44px;

    border-radius: 50%;
    display: grid;
    place-items: center;

    background: var(--bg);
    border: 1px solid var(--border);

    box-shadow: var(--shadow);
    cursor: pointer;

    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .theme-toggle:hover {
    transform: translateY(-2px);
  }

  .icon svg {
    width: 20px;
    height: 20px;
    fill: var(--text-h);
    stroke: var(--text-h);
  }
</style>
