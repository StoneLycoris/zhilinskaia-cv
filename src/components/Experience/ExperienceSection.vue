<template>
  <section class="experience">
    <h2 class="experience__title">
      {{ $t('experience.title') }}
    </h2>

    <div class="experience__container">
      <ExperienceItem
        v-for="item in experience"
        :key="item.id"
        :item="item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import ExperienceItem from '@/components/Experience/ExperienceItem.vue'
import type { ExperienceItem as ExperienceItemType } from '@/types/experience'

const { tm } = useI18n()

const experience = computed<ExperienceItemType[]>(() =>
  tm('experience.items') as ExperienceItemType[]
)
</script>

<style scoped lang="scss">
.experience {
  text-align: left;

  &__title {
    margin-bottom: 40px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>