<template>
  <section class="contacts">
    <div class="contacts__container">
      <div class="contacts__header">
        <h2 class="contacts__title">
          {{ $t("contacts.title") }}
        </h2>

        <p class="contacts__subtitle">
          {{ $t("contacts.description") }}
        </p>
      </div>

      <div class="contacts__grid">
        <ContactCard
          v-for="contact in contacts"
          :key="contact.id"
          :contact="contact"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { contacts } from "@/data/contacts";

  import ContactCard from "./ContactCard.vue";
</script>

<style scoped lang="scss">
  .contacts {
    position: relative;
    padding: 0px 24px 120px;

    &__container {
      margin: 0 auto;

      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    &__header {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    &__title {
      font-size: 28px;
      font-weight: 600;
    }

    &__subtitle {
      font-size: 16px;
      line-height: 1.6;
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }
  }
</style>
