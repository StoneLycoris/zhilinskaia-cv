<template>
  <button class="lang-toggle" @click="toggleLocale">
    <span class="lang-text">
      {{ locale === 'en' ? 'RU' : 'EN' }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { locale, toggleLocale } = useLocale()
</script>

<style scoped>
.lang-toggle {
  position: fixed;
  top: 20px;
  left: 10px;
  z-index: 1;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 20px;

  padding: 6px 14px;
  cursor: pointer;

  display: grid;
  place-items: center;

  box-shadow: var(--shadow);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease;

    &:hover {
        transform: translateY(-2px) scale(1.03);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        border-color: rgba(255, 255, 255, 0.25);
    }

    &:active {
        transform: translateY(0px) scale(0.98);
        box-shadow: var(--shadow);
    }
}

.lang-text {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--text-h);
}
</style>