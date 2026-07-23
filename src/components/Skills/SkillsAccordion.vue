<template>
  <section
    id="skills"
    class="skills"
  >
    <div class="skills__top">
      <h3 class="skills__title">
        {{ $t("tech.subtitle") }}
      </h3>

      <button
        class="skills__toggle-all"
        type="button"
        @click="toggleAll"
      >
        <svg
          class="skills__toggle-icon"
          viewBox="0 0 20 20"
        >
          <path
            v-if="!allOpened"
            d="M10 4v12M4 10h12"
          />

          <path
            v-else
            d="M4 10h12"
          />
        </svg>

        <span>
          {{ allOpened ? $t("tech.collapseAll") : $t("tech.expandAll") }}
        </span>
      </button>
    </div>

    <div
      v-for="category in categories"
      :key="category"
      class="skills__group"
    >
      <button
        class="skills__header"
        type="button"
        :class="{
          'is-open': isOpen(category),
        }"
        @click="toggle(category)"
      >
        <span class="skills__category">
          {{ $t(`tech.categories.${category}`) }}

          <span class="skills__count">
            {{ groupedSkills[category]?.length }}
          </span>
        </span>

        <span class="skills__icon">
          <svg viewBox="0 0 20 20">
            <path d="M5 7.5L10 12.5L15 7.5" />
          </svg>
        </span>
      </button>

      <Transition name="expand">
        <div
          v-if="isOpen(category)"
          class="skills__list"
        >
          <SkillChip
            v-for="skill in groupedSkills[category]"
            :key="skill.id"
            :skill="skill"
          />
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed, ref } from "vue";

  import { skills } from "@/data/skills";
  import type { SkillCategory } from "@/types/skill";

  import SkillChip from "./SkillChip.vue";

  const categories: SkillCategory[] = [
    "frontend",
    "styling",
    "testing",
    "api",
    "tooling",
    "codeQuality",
    "devOps",
  ];

  const opened = ref<SkillCategory[]>(["frontend", "testing"]);

  const groupedSkills = computed(() => {
    return skills.reduce(
      (result, skill) => {
        if (!result[skill.category]) {
          result[skill.category] = [];
        }
        result[skill.category].push(skill);

        return result;
      },
      {} as Record<SkillCategory, typeof skills>
    );
  });

  const allOpened = computed(() => {
    return opened.value.length === categories.length;
  });

  function isOpen(category: SkillCategory) {
    return opened.value.includes(category);
  }

  function toggle(category: SkillCategory) {
    if (isOpen(category)) {
      opened.value = opened.value.filter((item) => item !== category);
      return;
    }
    opened.value.push(category);
  }

  function toggleAll() {
    if (allOpened.value) {
      opened.value = [];
      return;
    }
    opened.value = [...categories];
  }
</script>

<style scoped lang="scss">
  .skills {
    text-align: left;
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      gap: 16px;
    }

    &__title {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      color: var(--text-h);
    }

    &__toggle-all {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 14px;
      border-radius: 50px;
      background: var(--surface-elevated);
      border: 1px solid var(--border);
      color: var(--text);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      box-shadow: var(--shadow);
      transition:
        transform 0.2s ease,
        background 0.2s ease,
        border-color 0.2s ease,
        color 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        background: var(--accent-bg);
        border-color: var(--accent-border);
        color: var(--text-h);
      }

      &:active {
        transform: translateY(0);
      }
    }

    &__toggle-icon {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    &__group {
      margin-bottom: 14px;
    }

    &__header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background: var(--surface-elevated);
      border: 1px solid var(--border);
      border-radius: 14px;
      color: var(--text-h);
      cursor: pointer;
      box-shadow: var(--shadow);
      transition:
        transform 0.2s ease,
        border-color 0.2s ease,
        background 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        border-color: var(--accent-border);
      }

      &.is-open {
        background: var(--accent-bg);
        border-color: var(--accent-border);
      }
    }

    &__category {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 15px;
      font-weight: 600;
    }

    &__count {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      min-width: 22px;
      height: 22px;
      padding: 0 6px;
      border-radius: 50px;
      background: var(--bg);
      border: 1px solid var(--border);
      font-size: 12px;
      opacity: 0.7;
    }

    &__icon {
      width: 28px;
      height: 28px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: var(--bg);
      transition: transform 0.25s ease;

      svg {
        width: 16px;
        height: 16px;
        fill: none;
        stroke: var(--text);
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    }

    .is-open &__icon {
      transform: rotate(180deg);
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 16px 4px 8px;
    }
  }

  .expand-enter-active,
  .expand-leave-active {
    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
  }

  .expand-enter-from,
  .expand-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }

  @media (max-width: 600px) {
    .skills {
      &__top {
        align-items: flex-start;
      }

      &__toggle-all {
        padding: 7px 10px;
        font-size: 12px;
      }
    }
  }
</style>
