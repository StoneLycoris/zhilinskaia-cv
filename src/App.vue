<template>
  <div class="app">
    <LanguageToggler />
    <ThemeToggler />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <TechSphere />
    <ContactsSection />
  </div>
</template>

<script setup lang="ts">
import LanguageToggler from '@/components/Language/LanguageToggler.vue';
import ThemeToggler from '@/components/Theme/ThemeToggler.vue';
import HeroSection from '@/components/Hero/HeroSection.vue';
import AboutSection from '@/components/About/AboutSection.vue';
import ExperienceSection from '@/components/Experience/ExperienceSection.vue';
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