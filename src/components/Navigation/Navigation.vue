<template>
  <NavigationDesktop class="navigation-desktop" />

  <NavigationMobile class="navigation-mobile" />
</template>

<script setup lang="ts">
  import NavigationDesktop from "@/components/Navigation/NavigationDesktop.vue";
  import NavigationMobile from "@/components/Navigation/NavigationMobile.vue";
</script>

<style scoped lang="scss">
  .navigation-desktop {
    display: flex;
  }

  .navigation-mobile {
    display: none;
  }

  @media (max-width: 900px) {
    .navigation-desktop {
      display: none;
    }

    .navigation-mobile {
      display: flex;
    }
  }
</style>
