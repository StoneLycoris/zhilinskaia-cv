<template>
  <section class="hero">
    <h1>{{ $t('hero.title') }}</h1>
    <p>{{ $t('hero.subtitle') }}</p>
  </section>
</template>

<style scoped lang="scss">
  .hero {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    text-align: center;

    h1 {
      color: var(--text-h);
      }

    p {
      color: var(--text);
      opacity: 0.8;
      }
}
</style>