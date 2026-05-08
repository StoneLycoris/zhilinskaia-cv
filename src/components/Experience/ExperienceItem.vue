<template>
  <article
    class="experience-item"
    @mousemove="handleMouseMove"
  >
    <div class="experience-item__header">
      <div>
        <h3>{{ item.company }}</h3>

        <p class="experience-item__muted">
          {{ item.role }} • {{ item.location }}
        </p>
      </div>

      <span class="experience-item__period">
        {{ item.period }}
      </span>
    </div>

    <p class="experience-item__summary">
      {{ item.summary }}
    </p>

    <div
      v-for="project in item.projects"
      :key="project.name"
      class="experience-item__project"
    >
      <h4>{{ project.name }}</h4>

      <div class="experience-item__tags">
        <p>{{ $t('experience.stack') }}:</p>

        <span
          v-for="tech in project.stack"
          :key="tech"
        >
          {{ tech }}
        </span>
      </div>

      <div
        v-if="project.libraries"
        class="experience-item__tags experience-item__tags--secondary"
      >
        <p>{{ $t('experience.libraries') }}:</p>

        <span
          v-for="lib in project.libraries"
          :key="lib"
        >
          {{ lib }}
        </span>
      </div>

      <div
        v-if="project.testing"
        class="experience-item__tags experience-item__tags--secondary"
      >
        <p>{{ $t('experience.tests') }}:</p>

        <span
          v-for="test in project.testing"
          :key="test"
        >
          {{ test }}
        </span>
      </div>

      <ul class="experience-item__achievements">
        <li
          v-for="achievement in project.achievements"
          :key="achievement"
        >
          {{ achievement }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '@/types/experience'

defineProps<{
  item: ExperienceItem
}>()

function handleMouseMove(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()

  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  target.style.setProperty('--x', `${x}px`)
  target.style.setProperty('--y', `${y}px`)
}
</script>

<style scoped lang="scss">
.experience-item {
  padding: 28px;

  border-radius: 16px;

  background: var(--surface-elevated);

  border: 1px solid var(--border);

  box-shadow: var(--shadow);

  position: relative;
  overflow: hidden;

  will-change: transform;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &::before {
    content: '';

    position: absolute;
    inset: 0;

    pointer-events: none;

    opacity: 0;

    transition: opacity 0.2s ease;

    background: radial-gradient(
      320px circle at var(--x, 50%) var(--y, 50%),
      var(--accent-bg),
      transparent 45%
    );
  }

  &:hover {
    transform: translateY(-6px);

    border-color: var(--accent-border);

    box-shadow:
      0 18px 40px rgba(0, 0, 0, 0.08),
      var(--shadow);

    &::before {
      opacity: 1;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin-bottom: 12px;
  }

  &__period {
    font-size: 14px;

    color: var(--text);

    opacity: 0.7;
  }

  &__summary {
    margin: 12px 0 16px;

    color: var(--text);

    line-height: 1.5;
  }

  &__project {
    margin-top: 18px;

    h4 {
      margin-bottom: 8px;

      color: var(--text);
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;

    gap: 8px;

    margin-bottom: 10px;

    span {
      padding: 5px 10px;

      border-radius: 999px;

      font-size: 12px;
      font-weight: 500;

      background: var(--accent-bg);

      color: var(--accent);

      border: 1px solid var(--accent-border);

      transition: transform 0.2s ease;

      &:hover {
        transform: translateY(-1px);
      }
    }

    &--secondary {
      opacity: 0.6;
    }
  }

  &__achievements {
    padding-left: 18px;

    li {
      margin-bottom: 6px;

      line-height: 1.5;
    }
  }

  &__muted {
    opacity: 0.6;

    font-size: 14px;
  }
}
</style>