<script setup>
import data from '@/data/data.json'
import { computed } from 'vue';

const { id, experienceSlug } = defineProps({
  id: { type: Number, required: true },
  experienceSlug: { type: String, required: true }
})

const destination = computed(() => data.destinations.find( destination => destination.id === id))
const experience = computed(() => destination.value.experiences.find( experience => experience.slug === experienceSlug))
</script>

<template>
  <section class="my-10">
    <h1 class="text-lg font-bold mb-5">{{ experience.name }}</h1>
    <div class="flex flex-col gap-5 items-center justify-between lg:flex-row">
      <img class="w-full rounded" :src="`/images/${experience.image}`" :alt="experience.name">
      <p class="text-sm text-gray-800 mt-5">{{ experience.description }}</p>
    </div>
  </section>
</template>