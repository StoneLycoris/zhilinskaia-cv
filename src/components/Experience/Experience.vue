<template>
  <section class="experience">
    <h2 class="experience__title">{{ $t('experience.title') }}</h2>

    <div
      v-for="item in experience"
      :key="item.id"
      class="experience__item"
      @mousemove="handleMouseMove"
    >
      <div class="experience__header">
        <div>
          <h3>{{ item.company }}</h3>
          <p class="muted">
            {{ item.role }} • {{ item.location }}
          </p>
        </div>

        <span class="period">{{ item.period }}</span>
      </div>

      <p class="summary">
        {{ item.summary }}
      </p>

      <div
        v-for="project in item.projects"
        :key="project.name"
        class="project"
      >
        <h4>{{ project.name }}</h4>

        <div class="tags">
          <p>{{ $t('experience.stack') }}:</p>
          <span v-for="tech in project.stack" :key="tech">
            {{ tech }}
          </span>
        </div>

        <div v-if="project.libraries" class="tags tags-libraries">
          <p>{{ $t('experience.libraries') }}:</p>
          <span v-for="lib in project.libraries" :key="lib">
            {{ lib }}
          </span>
        </div>

        <div v-if="project.testing" class="tags tags-tests">
          <p>{{ $t('experience.tests') }}:</p>
          <span v-for="test in project.testing" :key="test">
            {{ test }}
          </span>
        </div>

        <ul class="achievements">
          <li v-for="achievement in project.achievements" :key="achievement">
            {{ achievement }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { ExperienceItem } from '@/types/experience'

const { tm } = useI18n()

const experience = computed<ExperienceItem[]>(() =>
  tm('experience.items') as ExperienceItem[]
)

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
.experience {
  text-align: left;

  &__title {
    margin-bottom: 40px;
  }

  &__item {
    padding: 28px;

  border-radius: 16px;

  background: var(--surface-elevated);

  border: 1px solid var(--border);

  box-shadow: var(--shadow);

  backdrop-filter: blur(12px);

  position: relative;
  overflow: hidden;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;

    background: radial-gradient(
      500px circle at var(--x, 50%) var(--y, 50%),
      var(--accent-bg),
      transparent 45%
    );

    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
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
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
  }
}

.period {
  font-size: 14px;
  color: var(--text);
  opacity: 0.7;
}

.summary {
  margin: 12px 0 16px;
  color: var(--text);
  line-height: 1.5;
}

.project {
  margin-top: 18px;

  h4 {
    margin-bottom: 8px;
    color: var(--text);
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;

  span {
    background: var(--accent-bg);
    color: var(--accent);

    padding: 5px 10px;

    border-radius: 999px;

    font-size: 12px;
    font-weight: 500;

    border: 1px solid var(--accent-border);

    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-1px);
    }
  }

  &-libraries,
  &-tests {
    opacity: 0.6;
  }
}

.achievements {
  padding-left: 18px;

  li {
    margin-bottom: 6px;
    line-height: 1.5;
  }
}

.muted {
  opacity: 0.6;
  font-size: 14px;
}
</style>