<template>
  <div class="app">
    <LanguageToggler />
    <ThemeToggler />
    <Hero />
    <About />
    <Experience />
    <TechSphere />
    <ContactsSection />
  </div>
</template>

<script setup lang="ts">
import LanguageToggler from '@/components/Language/LanguageToggler.vue';
import ThemeToggler from '@/components/Theme/ThemeToggler.vue';
import Hero from '@/components/Hero/Hero.vue';
import About from '@/components/About/About.vue';
import Experience from '@/components/Experience/Experience.vue';
import TechSphere from '@/components/TechSphere/TechSphere.vue';
import ContactsSection from '@/components/Contacts/ContactsSection.vue';
</script>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

section {
      padding: 0px 24px;
    }
</style>