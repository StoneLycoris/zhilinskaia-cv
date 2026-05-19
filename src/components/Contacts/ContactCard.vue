<template>
  <a
    target="_blank"
    rel="noopener noreferrer"
    class="contact-card"
    :href="contact.href"
    @mousemove="handleMouseMove"
  >
    <div class="contact-card__inner">
      <div class="contact-card__top">
        <div class="contact-card__left">
          <img
            class="contact-card__icon"
            :src="contact.icon"
            :alt="contact.label"
          />
          <span class="contact-card__label">
            {{ contact.label }}
          </span>
        </div>

        <button
          class="contact-card__copy"
          @click.stop.prevent="handleCopy"
        >
          <span v-if="!copied">{{ $t("contacts.copy") }}</span>
          <span
            v-else
            class="contact-card__copied"
            >{{ $t("contacts.copied") }}</span
          >
        </button>
      </div>

      <span class="contact-card__value">
        {{ contact.value }}
      </span>
    </div>
  </a>
</template>

<script setup lang="ts">
  import { useCopyToClipboard } from "@/composables/useCopyToClipboard";
  import type { Contact } from "@/types/contact";

  const props = defineProps<{
    contact: Contact;
  }>();

  const { copied, copy } = useCopyToClipboard();

  function handleCopy() {
    copy(props.contact.value);
  }

  function handleMouseMove(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--x", `${x}px`);
    target.style.setProperty("--y", `${y}px`);
  }
</script>

<style scoped lang="scss">
  .contact-card {
    display: block;
    text-decoration: none;

    border-radius: 18px;

    background: var(--surface-elevated);
    backdrop-filter: blur(14px);
    box-shadow: var(--shadow);

    border: 1px solid var(--border);

    padding: 18px 20px;

    transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      box-shadow 0.25s ease;

    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      inset: 0;

      background: radial-gradient(
        500px circle at var(--x, 50%) var(--y, 50%),
        var(--accent-bg),
        transparent 45%
      );

      opacity: 0;
      transition: opacity 0.25s ease;
    }

    &:hover {
      transform: translateY(-5px);

      border-color: var(--accent-border);

      box-shadow:
        0 20px 45px rgba(0, 0, 0, 0.08),
        var(--shadow);

      &::before {
        opacity: 1;
      }

      .contact-card__copy {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &__inner {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &__icon {
      width: 18px;
      height: 18px;
      opacity: 0.7;
      transition: 0.2s ease;
      filter: var(--icon-filter);
    }

    &:hover &__icon {
      opacity: 1;
      transform: translateY(-1px);
    }

    &__label {
      font-size: 12px;
      color: var(--text);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    &__value {
      font-size: 16px;
      color: var(--text-h);
      font-weight: 600;
    }

    &__copy {
      font-size: 12px;
      padding: 4px 10px;

      border-radius: 999px;

      border: 1px solid var(--border);

      background: transparent;
      color: var(--text);

      cursor: pointer;

      opacity: 0;
      transform: translateY(4px);

      transition: all 0.2s ease;

      &:hover {
        background: var(--accent-bg);
        color: var(--text-h);
      }
    }

    &__copied {
      color: var(--accent);
    }
  }
</style>
