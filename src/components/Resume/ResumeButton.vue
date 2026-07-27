<template>
  <a
    :href="currentResume.file"
    :download="currentResume.download"
    class="resume-button"
    @mousemove="updateGlowPosition"
  >
    <div class="resume-button__icon">
      <svg
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 3V15"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />

        <path
          d="M7 10L12 15L17 10"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <path
          d="M5 20H19"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <div class="resume-button__content">
      <span class="resume-button__title">
        {{ $t("resume.title") }}
      </span>

      <span class="resume-button__subtitle">
        {{ $t("resume.subtitle") }}
      </span>
    </div>
  </a>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { useI18n } from "vue-i18n";

  import { useGlowHover } from "@/composables/useGlowHover";
  import { resumes } from "@/data/resume";
  import type { ResumeLocale } from "@/types/resume";

  const { locale } = useI18n();

  const { updateGlowPosition } = useGlowHover();

  const currentResume = computed(() => {
    return resumes[locale.value as ResumeLocale] ?? resumes.en;
  });
</script>

<style scoped lang="scss">
  .resume-button {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 18px;
    width: fit-content;
    padding: 18px 22px;
    margin: 0 auto;
    text-decoration: none;
    border-radius: 18px;
    background: var(--surface-elevated);
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      box-shadow 0.25s ease;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(
        340px circle at var(--x, 50%) var(--y, 50%),
        var(--accent-bg),
        transparent 45%
      );
      opacity: 0;
      transition: opacity 0.25s ease;
      pointer-events: none;
    }

    &:hover {
      transform: translateY(-4px);
      border-color: var(--accent-border);
      box-shadow:
        0 18px 40px rgba(0, 0, 0, 0.08),
        var(--shadow);

      &::before {
        opacity: 1;
      }

      .resume-button__icon {
        transform: translateY(-2px);
      }
    }

    &__icon {
      flex-shrink: 0;
      width: 56px;
      height: 56px;
      display: grid;
      place-items: center;
      border-radius: 16px;
      background: var(--accent-bg);
      color: var(--accent);
      transition: transform 0.25s ease;

      svg {
        width: 26px;
        height: 26px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 4px;
      z-index: 1;
    }

    &__title {
      font-size: 18px;
      font-weight: 700;
      color: var(--text-h);
    }

    &__subtitle {
      font-size: 14px;
      color: var(--text);
      opacity: 0.75;
    }
  }

  @media (max-width: 768px) {
    .resume-button {
      &__title {
        font-size: 16px;
      }

      &__subtitle {
        font-size: 13px;
      }

      &__icon {
        width: 48px;
        height: 48px;

        svg {
          width: 22px;
          height: 22px;
        }
      }
    }
  }
</style>
