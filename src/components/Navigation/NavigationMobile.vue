<template>
  <header class="mobile-navigation">
    <button
      class="burger"
      type="button"
      aria-label="Menu"
      @click="open = !open"
    >
      <span :class="{ active: open }" />

      <span :class="{ active: open }" />

      <span :class="{ active: open }" />
    </button>

    <Transition name="overlay">
      <div
        v-if="open"
        class="menu-overlay"
        @click="open = false"
      />
    </Transition>

    <Transition name="menu">
      <nav
        v-if="open"
        class="menu"
      >
        <button
          v-for="link in links"
          type="button"
          :key="link.id"
          :class="{
            active: activeSection === link.id,
          }"
          @click="
            scrollToSection(link.id);
            open = false;
          "
        >
          {{ $t(link.label) }}
        </button>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  import { useNavigation } from "@/composables/useNavigation";
  import { links } from "@/data/navigation";

  const open = ref(false);

  const { activeSection, scrollToSection } = useNavigation();
</script>

<style scoped lang="scss">
  .mobile-navigation {
    position: fixed;
    top: 56px;
    left: 10px;
    z-index: 1100;
  }

  .burger {
    width: 46px;
    height: 46px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 50%;
    border: 1px solid var(--border);
    background: color-mix(in srgb, var(--bg) 92%, transparent);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow:
      0 10px 30px rgba(0, 0, 0, 0.12),
      var(--shadow);
    cursor: pointer;
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      background 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      border-color: var(--accent-border);
    }

    &:active {
      transform: scale(0.96);
    }

    span {
      width: 20px;
      height: 2px;
      border-radius: 2px;
      background: var(--text-h);
      transition:
        transform 0.25s ease,
        opacity 0.2s ease;
    }

    span:nth-child(1).active {
      transform: translateY(7px) rotate(45deg);
    }

    span:nth-child(2).active {
      opacity: 0;
    }

    span:nth-child(3).active {
      transform: translateY(-7px) rotate(-45deg);
    }
  }

  .menu-overlay {
    position: fixed;
    inset: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }

  .menu {
    position: absolute;
    top: 58px;
    left: 0;
    width: min(280px, calc(100vw - 32px));
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: color-mix(in srgb, var(--surface-elevated) 90%, var(--bg));
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid var(--border);
    border-radius: 20px;
    box-shadow:
      0 24px 60px rgba(0, 0, 0, 0.22),
      var(--shadow);
    overflow: hidden;

    button {
      min-height: 44px;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 16px;
      border-radius: 14px;
      border: 1px solid transparent;
      background: transparent;
      color: var(--text-h);
      font-size: 15px;
      font-weight: 500;
      text-align: left;
      cursor: pointer;

      transition:
        background 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease,
        border-color 0.2s ease;

      &:hover {
        background: var(--accent-bg);
        transform: translateX(4px);
      }

      &:active {
        transform: scale(0.98);
      }

      &.active {
        background: var(--accent-bg);
        color: var(--accent);
        border-color: var(--accent-border);
      }
    }
  }

  .menu-enter-active,
  .menu-leave-active {
    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
  }

  .menu-enter-from,
  .menu-leave-to {
    opacity: 0;

    transform: translateY(-12px) scale(0.96);
  }

  @media (max-width: 380px) {
    .mobile-navigation {
      top: 48px;

      left: 12px;
    }

    .menu {
      width: calc(100vw - 24px);
    }
  }
</style>
