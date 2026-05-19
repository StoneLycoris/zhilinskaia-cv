<template>
  <section class="about">
    <p>{{ $t("hero.description.general") }}</p>
    <p>{{ $t("hero.description.experience") }}</p>
  </section>
</template>

<style scoped lang="scss">
  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    section {
      padding: 0 24px;
    }
  }
</style>
