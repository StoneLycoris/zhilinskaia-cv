<template>
  <div class="app">
    <LanguageToggler />
    <ThemeToggler />
    <Navigation />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <TechSphere />
    <SkillsAccordion />
    <ContactsSection />
  </div>
</template>

<script setup lang="ts">
  import AboutSection from "@/components/About/AboutSection.vue";
  import ContactsSection from "@/components/Contacts/ContactsSection.vue";
  import ExperienceSection from "@/components/Experience/ExperienceSection.vue";
  import HeroSection from "@/components/Hero/HeroSection.vue";
  import LanguageToggler from "@/components/Language/LanguageToggler.vue";
  import Navigation from "@/components/Navigation/Navigation.vue";
  import SkillsAccordion from "@/components/Skills/SkillsAccordion.vue";
  import TechSphere from "@/components/TechSphere/TechSphere.vue";
  import ThemeToggler from "@/components/Theme/ThemeToggler.vue";
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
