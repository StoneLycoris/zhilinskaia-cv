<template>
  <section class="hero">
    <h1>{{ $t('hero.name') }}</h1>
    <h2>{{ $t('hero.title') }}</h2>
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

    h1, h2 {
      color: var(--text-h);
      }

      h2 {
        font-size: 40px;
      }

    p {
      color: var(--text);
      opacity: 0.8;
      }
}
</style>